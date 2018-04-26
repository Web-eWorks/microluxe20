const gulp = require('gulp');
const markdownpdf = require('gulp-markdown-pdf');
const zip = require('gulp-zip');
const changed = require('gulp-changed');
const changedInPlace = require('gulp-changed-in-place');
const fs = require('fs');
const path = require('path');
const pjson = require('./package.json');
const yaml = require('js-yaml');
const through = require('through2');

const config = {
  dataPath: 'src/data/*.{yml,yaml}',
  mdPath: 'src/markdown/*.md',
  cssPath: 'src/styles/main.css',
  paperFormat: 'Letter',
  out: 'documents',
  readme: 'README.md',
  includeHeaders: true,
};

let dataFiles = {};

// Parse the directive: !data <file> [key]
function replaceData(directive) {
  const matches = directive.match(/(\S+)\s*(\S+)/);
  if (matches === null) return '';

  const file = dataFiles[matches[1]];
  if (file === undefined) {
    console.log(`No such file ${matches[1]}.`);
    return '';
  }

  // Get the table YAML document matching the key, or the first if no key.
  let doc;
  for (const d of file) if (d.id === matches[2]) doc = d;
  if (doc === undefined) {
    console.log(`No such table ${matches[2]} in file ${matches[1]}.`);
    return '';
  }

  // Convert it into markdown, optionally combining multiple columns.
  let header = '';
  let body = '';

  const columns = doc.columns || 1;
  for (const h of doc.header) header += `| ${`${h} | `.repeat(columns - 1)}${h}\n`;

  const size = Math.floor(doc.data.length / columns);
  const extra = doc.data.length % columns;

  // Stack table entries side-by-side.
  for (let i = 0; extra ? i <= size : i < size; i++) {
    let d = '| ';
    for (let c = 0; c < columns && (i < size || c < extra); c++) {
      const offset = c ? extra : 0;
      const idx = i + offset + c * size;
      if (idx >= doc.data.length) break;
      d += (c ? ' | ' : '') + doc.data[idx];
    }
    body += `${d}\n`;
  }

  return header + body;
}

function replaceHeader(extraData, keep) {
  const imgUrl = 'https://github.com/kgrubb/microluxe20/raw/master/src/static/logo-plain.png';
  return keep ? `![title-img](${imgUrl})\n<h1 class="title"> Microluxe 20 Space <br> <br> ${extraData} </h1>` : '';
}

// Transform markdown document by parsing and including data tables.
function preProcessMd(data, e, cb) {
  // Scan for HTML comments with a directive, e.g. <!-- $data -->.
  const regex = /<!--\s*\$(\S+)\s*(.+?)-->/g;

  function replace(match, name, extraData) {
    if (name === 'data') return replaceData(extraData);
    if (name === 'header') return replaceHeader(extraData, config.includeHeaders);
    if (name === 'header-main') return replaceHeader(extraData, true);
    return '';
  }

  const newData = data.toString().replace(regex, replace);
  // Insert into page, replacing the comment.
  cb(null, Buffer.from(newData));
}

// Load data when it has changed.
gulp.task('load-data', () => {
  return gulp.src(config.dataPath)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(through.obj((file, enc, cb) => {
      let data = yaml.safeLoadAll(file.contents);
      dataFiles[file.relative] = data;
      cb();
    }));
});

gulp.task('compile-md', () => {
  const cwd = process.cwd();
  return gulp.src(config.mdPath)
    .pipe(changed(config.out, {
      extension: '.pdf',
    }))
    .pipe(markdownpdf({
      cwd,
      cssPath: config.cssPath,
      paperFormat: config.paperFormat,
      preProcessMd: () => through.obj(preProcessMd),
    }))
    .pipe(gulp.dest(config.out));
});

// compile all the documents
gulp.task('compile', gulp.series('load-data', 'compile-md'));

// create release zip from documents
gulp.task('release', done => fs.stat('documents', (err) => {
  if (err) {
    return console.log(err);
  }
  const release = `microluxe20_${pjson.version}.zip`;
  return gulp.src(['documents/*', 'character-sheets/*', 'map/*.png', 'LICENSE'])
    .pipe(zip(release))
    .pipe(gulp.dest('./release'), done());
}));

gulp.task('watch', () => {
  gulp.watch([config.mdPath, config.cssPath], gulp.task('compile'));
});

gulp.task('default', cb => {
  console.log(fs.readFileSync(config.readme, {
    encoding: 'UTF8',
  }));
  cb();
});
