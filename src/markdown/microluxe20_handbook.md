<!-- $header-main Microluxe 20 Space <br> <br> Handbook -->

# Introduction

<!-- TODO: spin this for M20 Space -->

Microluxe20 is a minimalist tabletop role-playing game designed with simplicity in mind. Using an easy-to-grasp, yet extremely robust stat/skill framework, Microluxe20 allows for crafting exciting encounters that are fun and fluid, emphasizing storytelling and player interaction over the traditional "straight-jacket" skill systems found in many modern tabletop games. Keeping compatibility in mind, OGL/d20 supplements should work out of the box, without any conversions; in fact, SRD/OGL adventures with any incompatibilities can be converted _on the fly_ with almost no effort! The entire character sheet fits on one sheet of paper, meaning character creation and management is extremely quick and easy. Microluxe20 is great for one-shot adventures, or teaching new players about tabletop gaming. However, unlike many one-shot styled tabletop games, it is also robust enough to cater to full-fledged campaign-style games as well, especially because of its compatibility with other OGL/d20 content.

## First Steps

<!-- TODO: rewrite for space -->

### What is a Role-Playing Game?

A role-playing game (RPG) is a cooperative narration game in which players assume the roles of characters in a fictional setting, deciding freely which actions to take as their fictional alter-ego. The Game Master(GM), the main narrator of the game, describes the game world and its inhabitants. The other players describe the intended actions of their characters, and the GM describes the outcomes. Actions taken within the game succeed or fail according to a formal system of rules and guidelines. For example:

**GM:** “You’re walking along a path in a small wood when you hear noises coming from behind a large bush of vegetation. A sparkle of light reveals something shiny...”

**Now it’s your turn:** Are you a fearful adventurer that decides to run for his life? Are you brave enough to search in the wood? Maybe you’re a warrior that grabs his sword, sure that this is an ambush. Or maybe you’re a smart and cunning rogue, climbing silently on a tree to look at what’s behind the plants. Maybe you’re a powerful wizard that casts a spell to clearly see through all obstacles in front of you. The possibilities are limitless! It’s up to you to decide!

### How to Play

When playing Microluxe20, the game will follow a basic pattern:

1. The GM shows or describes the world. The GM tells the players where they are and what they are doing, explaining any lore or recent happenings. For example, the GM may describe a small town that the players have just entered, telling them that they see a small stable, an inn and a few farm houses. The GM may elaborate, saying there are mountains in the distance, or bloody footprints on the ground near one of the farm house entrances.

2. The players decide on what they want to do, and describe their actions to the GM. Outside of combat, one player may speak for the whole party, or maybe each player has their own plans on what they want to do or investigate. The players don't necessarily need to take turns, but the GM still needs to be able to listen to each player's decision and resolve it. Decision resolution can be simple (for example, if the player simply wants to open the farm door, the GM can just tell the player what they see inside) or complex (perhaps the door is locked and the player must work out a way to get inside). In more complex situations, the GM may make use of dice rolls to determine the outcome of the player's action.

3. After the player decides on their action and describes it, the GM responds with the results of the player's action. Once the GM describes the outcome, the pattern starts over again, returning to step 1.

This pattern is used for any conflict resolution, aside from combat. Once combat begins in a situation, the game switches to a more rigid and structured ruleset, where players take turns deciding on and completing actions. Outside of combat, this basic pattern continues to keep everything fluid and simple, continually adapting to the adventure's storyline.

### Items Needed

To play Microluxe20, you will need **paper**, **pencils**, and a conventional set of **d20 tabletop dice**. The dice required to play are a 4-sided die (d4), 6-sided die (d6), 8-sided die (d8), 10-sided die (d10), 12-sided die (d12), 20-sided die (d20), and a Percentile 10-sided die (d10 showing 00/10/20/30, etc).

When referencing dice in the game, dice rolls are often abbreviated to something like "d6" or "d20", where the number after the "d" represents the number of sides on the die. Numbers in front of the "d" dictate how many times the die should be rolled.

For example, “3d6 + 5” means you roll three 6-sided dice, add their results together, then add 5 to the total.

# Character Creation

When creating a character in Microluxe20, you will need to decide on a race and class. After choosing your character's race and class, you can configure their stats and skills.

<!-- TODO: define setting races. Human, synth, space-orc, space-elf, space-dwarf? -->

## Races

Terador has a wealth of races to choose from, each with their unique history. While the Mir are the most common race in Terador, the many other races are fairly commonplace to see as well. When creating a character, your player will be one of the major races of Terador.

<!-- $data races.yml races -->

## Classes

Classes define your character's way of life. Your character's class helps shape his/her combat style and methods of overcoming various obstacles. Your class provides a pathway, granting special powers and features for your character.

<!-- TODO: flesh these out -->

**Mercenary:** may use any type of armor and weapons.
**Assassin:** may use Light ranged weapons and armor, and any melee weapons.
**Hacker:** may use Light weapons and armor; can use Programs.
**Ranger:** may use Light melee weapons, any ranged weapons, and Normal armor.
**Officer:** may use Normal weapons and armor; can use Programs.
**Psion:** may only use Light weapons and armor; can use Psionic Abilities.

## Stats

There are 3 core stats that define a character:

**Strength** (STR): Strength represents the physical prowess of the character. It defines their resilience and toughness as well as how hard they can hit.

**Dexterity** (DEX): Dexterity represents the character's coordination, precision, agility, reflexes, balance and movement.

**Mind** (MIND): Mind represents the character's analytical thinking, as well as their wisdom, memory, knowledge of lore, and general intelligence.

When creating a character, you get 10 points to freely spend on your core stats, as long as no single stat is higher than 6. For example, a Mercenary may choose to have 6 STR, 4 DEX, and 0 MIND.

**Stat Bonus:** For any stat, the Stat Bonus is that stat's value divided by two, rounding down.

**Hit Points (HP)**: Hit Points determine how healthy a character is. As they are injured or hurt, their HP depletes. To determine a character's starting HP, use the following formula:

	10 + STR stat + 1d6(with a minimum of 3).

If a player's character is damaged to the point where their HP reaches zero (or below zero), the character becomes "downed", or unconscious and near death, with 0 HP. Further damage directly reduces their normally highest stat (either STR, DEX, or MIND). If that stat drops below -10, the character dies. While down, at the start of your turn, roll a d6. You have 3 chances (1 chance per turn) to roll above a 3. If successful, you are stable and return to 1 HP. Otherwise, if unsuccessful 3 turns, the character dies.

Sometimes damage in combat is dealt directly to a character's Stats instead of Hit Points. If any stat reaches -10 or below, the character is downed and treated as if they were reduced to 0 HP. Stats damaged directly or while downed will return to their normal levels after a long rest (4 hours).

**Speed** comes in 3 tiers. You are either Slow(20ft.), Normal(30ft.) or Fast(35ft.). Speed is determined by the game master and can be affected by equipment and conditions. Typically, Mercenaries or Officers with Heavy armor are Slow, Assassins and Rangers are Fast, and the rest are Normal speed.

**Armor Class (AC):** A character's Armor Class represents their ability to evade or block physical attacks. The higher a character's AC, the more difficult it is to land a damaging blow. A character's Armor Class is determined by this formula:

	10 + DEX bonus + Armor bonus + Racial bonus (if applicable).


## Skills & Saves

There are 5 skills: **Physical**, **Accuracy**, **Cunning**, **Knowledge**, and **Communication**. Roll higher than the given Difficulty Class to succeed.

**Skill Rank** = any bonus due to your class or race + any allocated points.

**Skill Roll** = d20 + skill rank + whatever stat bonus is most applicable to the use + situation modifiers

For example, Climbing would use Physical + STR bonus. Dodging a falling rock is Physical + DEX bonus. Finding a trap is Cunning + MIND bonus. Disabling a trap is Cunning + DEX bonus.

**Save Roll** = d20 + stat bonus + situation modifiers

For compatibility purposes, the 3 saves in Microluxe20 (STR save, DEX save, and MIND save), directly match Fortitude, Reflex, and Will saves (often called "saving throws") found in other SRD-based games.

<h2 class="page-break"> Level Advancement </h2>

<!-- TODO: rework these examples -->

Characters gain XP (or Experience Points) from defeating monsters, disarming traps, or from handling situations in innovative ways, at the GM's discretion. XP is awarded to all characters who take part in the encounter.

**XP Gained** = Hit Dice of defeated monsters, or the given XP for the trap, situation, etc. Add +1 for each doubling of the number of foes.

**Examples:** Kobolds have 1 hit die, so 1 kobold = 1 XP. 2 kobolds are double the amount, so 2 kobolds = 2 XP (1 XP for first kobold + 1 XP for doubling). 4 kobolds are double the amount again, so 4 kobolds = 3 XP ( 1 XP for first kobold + 1 XP for doubling to 2 + 1 XP for doubling from 2 to 4). A Black Bear has 3 hit die, so 1 Black Bear = 3 XP. 2 Black Bears = 4 XP. 4 Black Bears = 5 XP.

As characters participate in encounters, they will begin to accumulate XP. Characters advance to the next level when they have gained XP equal to 10 times their current level. After advancing, the total XP is reset to 0. If a character has more XP than is required for the next level, keep the excess XP and add it after resetting the character's XP to 0. For example, if a level 1 character has 8XP and is awarded 4XP, the character advances to level 2 with 2XP.

**Example:** The 1st level adventurers have just completed a dungeon adventure, and defeated five 1 XP encounters, a 2 XP trap and the 3 XP leader. That's a total of 10 XP, so they all advance to level 2. They need to gain another 20 XP to reach Level 3.

Each level adds:

* +1d6 to Hit Points (with a minimum of 3). Fighters also get additional HP equal to their STR bonus.

* +2 points to spend on skills. When upgrading skills, you cannot add more points to a skill if it is higher than or equal to your character's level + 5.

* If your character's level divides by three (ex: level 3,6,9,etc.) add 1 point to STR, DEX or MIND.

* Mercenaries gain +1 to their attack and damage rolls at levels 5,10,15,etc.

* New program slots and power levels are unlocked at levels 2,4,6,8,etc.

## Cybernetics

<!-- TODO: write up rules for cybernetics: slots, limits, bonuses, etc. -->

## Combat

When entering combat, the pace of the game shifts from the free-form nature of exploration to tightly structured units of time called 'rounds', in which each character gets one turn. On their turn, characters may move up to their maximum speed and take one additional action (attack, use a program, move again, speak with someone, etc.), unless they are immobilized, unconscious, or otherwise incapacitated.

The order in which characters take their turns in combat is determined by rolling d20 + DEX bonus for **initiative** at the start of each round (ties are settled with a re-roll).

When making an attack, roll a d20, adding the appropriate **attack bonus** for the action. If the resulting total is greater than your opponent's Armor Class (AC), it's a hit. Natural 20 is automatically a critical, dealing additional damage equal to your weapon's maximum damage.

**Melee attack bonus** = STR bonus + Physical Skill

**Ranged attack bonus** = DEX bonus + Accuracy Skill

If the total attack bonus is +6 or more, a second attack can be made with a -5 penalty to the attack bonus. If the total bonus is +11 or more a third attack can be made at a -10 penalty. For example, if the total bonus is +12, three attacks can be made at +12/+7/+2.

Characters using Light Melee weapons may use their DEX bonus instead of their STR bonus; likewise, characters wielding Heavy Ranged weapons may use their STR bonus instead of DEX bonus. Assassins and Rangers may wield 2 light weapons and attack with both in a round, if they take a -2 penalty on all attack rolls that round.

For each attack that hits, roll the damage die code on your weapon and subtract the resulting total from your opponent's HP. When wielding a Heavy Melee weapon, add your STR bonus to the damage total; when wielding a Light Melee weapon add your DEX bonus to the total.

<!-- TODO: ranged and melee combat example here -->

When all characters (including Gamemaster's characters) have taken their turn, the round is over. If there are any opponents left alive or not incapacitated, a new round begins. Otherwise, combat is over.

## Programs

<!-- TODO: write up program rules and fluff -->

## Resting & Recuperating

After combat, players must rest to regain their stamina. There are 2 forms of resting:

**Short Rest:** Resting for 1-4 hours constitutes a short rest. Characters heal up to 1/4 of their HP (rounded up). Spellcasters are no longer under arcane/divine influence.

**Long Rest:** Resting for over 4 hours constitutes a long rest. Characters heal all of their HP and short-term side effects. Spellcasters also lose their arcane/divine influence.

## Heroism

**Heroism** is intended to relieve some of the power incompatibilities with some d20 adventure types. If you find that the party is consistently too weak, try adding Heroism. **Heroism** is a bonus equal to the character's level that may be applied to one of the following actions three times per day: Attack Bonus, Damage, Saving Throw, Skill Check, or Program DC.

# Appendix

<!-- TODO: drop this section? Add a cheat-sheet? -->
