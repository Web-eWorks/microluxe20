<!-- $header Vehicles & Spaceships -->

# Planetary Vehicles

A Planetary vehicle is any type of vehicle or transportation that operates only on a planet, whether it be a car, a truck, a skimmer, a fighter craft, or even a passenger shuttle.

Planetary Vehicles come in two types: **surface vehicles** and **air vehicles**. Surface vehicles are dependent upon proximity to a flat surface – such as a planet, a roof, or a road – to operate. Cars, motorbikes, and skimmers are all Surface vehicles.

Air vehicles are not dependent upon any solid surface except during take-off or landing. Fightercraft, spaceships in atmosphere, and shuttles are all Air vehicles.

Vehicles that operate on the surface of the water are considered Surface vehicles, and vehicles that operate underwater are functionally similar to Air vehicles. Hovercraft and Boats are all Surface vehicles, while submersibles and submarines are all Air vehicles that operate underwater.

Vehicles may carry passengers, have multiple modes of travel, mount weapons, carry cargo, and do many more things.

## Vehicle Stats

<div class="float-right t-full pull-up-sm">

**Vehicle Sizes**
<!-- $data vehicles.yml vehicle-size  -->

**Vehicle Damage**
<!-- $data vehicles.yml damage-levels -->
</div>

Vehicles have three main Stats, analogous to a character's stats. These stats are used in dice rolls by their Bonus, which is equal to `Stat / 2`, rounded down.

- **Toughness (TGH):** A measure of the vehicle's hull and internals, Toughness determines how resistant to damage and adverse conditions a vehicle is. It is also used to determine how much damage a vehicle does when it collides with something.
- **Maneuverability (MNV):** A measure of the vehicle's responsiveness to user input and how easy it is to control. With a more maneuverable vehicle, it is easier to do stunts and travel at high speeds.
- **Cortex (COR):** A vehicle's Cortex is a measure of how much it assists its users with targeting or computations. Most ground vehicles don't have a Cortex rating, but fightercraft and more complex vehicles usually have targeting and navigation capabilities.

Vehicles also have a few additional stats which affect them:

**Size:** This determines how much of a target the vehicle is, as well as how well it can fit inside a container or building. Most single-person vehicles are Small, while multiple-person passenger vehicles tend to be Normal or Large.

Vehicle Sizes are not equal to character Sizes; Normal and smaller characters count as Small, and all others count as Normal or Large in vehicle Size.

**Speed:** A measure of how fast the vehicle travels at Normal speed, usually expressed in MPH or KPH. Speed can also be expressed in Meters per Round. <br> For reference, one round is 1/600th of an hour.

**Armor Class (AC):** A vehicle's Armor class is equal to `10 + Toughness + Armor Bonus (if any)` of the vehicle.

**Damage:** This measures the condition of the vehicle, according to the table on the right. A vehicle can have a single damage meter, or as many as the gamemaster decides. A vehicle can take an infinite amount of Very Light damage, but damage of greater levels will increase the meter.

So long as a vehicle or part is not Destroyed, it can be repaired, though repairs are proportionately more expensive and time-consuming the more damage there is. If a vehicle's Damage meter reaches Destroyed, the vehicle (or the part associated with the meter) is destroyed beyond repair and must be replaced.

### Resolving Damage

When an attack successfully hits a vehicle, three steps govern how much damage is received. First, the Gamemaster determines which section of the vehicle is taking damage. For vehicles with only one meter, this is obvious, but vehicles with more than one meter make this a bit trickier. Typically, damage flows from external Armor into the vehicle's core, but sometimes specific systems of a vehicle may take damage instead of the whole.

Then, the damage level is calculated. The attacker rolls the die code of the weapon, getting the raw damage. Then, the vehicle's Toughness Bonus is subtracted from the raw damage, yielding the damage total, and the damage level is found on the damage table. If the damage level is Very Light, the vehicle's damage meter is not modified.

Otherwise, the vehicle's damage meter is increased by the number of damage levels over Very Light. If the damage level is Moderate or greater, the vehicle's occupants take damage equal to 1/4 the damage total, rounded down.

**Example:** A vehicle takes 16 HP damage, or Moderate. Moderate is two levels above Very Light, so its damage meter of Light is increased to Severe, and its occupants take 4 HP damage.

## Driving and Flying

Driving or flying a vehicle is accomplished by making MNV+Physical checks against a certain difficulty, as outlined in this section. If the difficulty of an action is less than `10 + MNV+Phys` it is considered an automatic success, but if it is equal or greater, the driver or pilot will need to make a roll for the action.

### Vehicle Speed

When driving or flying, you will be travelling at one of six speeds, listed below. The vehicle can be travelling at any speed between the current and the next lowest; the speeds listed are maximum speeds for the mode.

<!-- $data vehicles.yml move-mode float-right -->

- **Stopped:** The vehicle goes nowhere. Requires no roll and doesn't consume an action.
- **Cautious:** The vehicle moves slowly. This is generally a free action, but terrain and other modifiers may necessitate a roll. A vehicle being driven backwards must use this mode.
- **Normal:** The vehicle is travelling down a smaller road or on off-road terrain. This consumes a full action, but has a base difficulty of 0. Characters need only roll if the difficulty is increased by terrain or other conditions.
- **Cruising:** The vehicle is travelling at high speeds on a road, in the sea, or in the air.
- **Emergency:** Reserved for times of significant danger, vehicles travelling at Emergency speed normally can't sustain it for long without damaging their propulsion sustem.

### Terrain and Situation

The situation or terrain a vehicle is travelling in has an effect on the difficulty of an action, as does what you are trying to accomplish. Driving in a straight line over flat terrain with no traffic is an extremely easy action, while attempting to navigate traffic in a rainstorm while travelling at emergency speed is a very dangerous thing to do.

The Situation is a measure of how difficult the driving environment is to navigate. Terrain, weather, and traffic all contribute to this.

<!-- $data vehicles.yml situation float-right -->

- **Easy:** A flat surface with little to no obstacles, light weather, a gentle sea, traffic on a small road.
- **Moderate:** Choppy seas, an uneven surface, small obstacles, moderate winds or rain, traffic on an expressway.
- **Rough:** Heavy wind or rain, large but negotiable obstacles, flying near obstacles or the ground, strong undercurrent or waves, heavy traffic.
- **Very Rough:** Stormy weather, airborne hazards, large waves, hail, dense or large obstacles.
- **Hazardous:** A minefield, large obstacles with almost no passage, significant airborne hazards, gale-force winds, massive waves, a hurricane or tornado.

<!-- $page-break -->

### Doing Stunts

Stunts are specific actions the driver is attempting to accomplish. Generally, just driving is a generic action that doesn't need to be rolled for, but if the driver is attempting to evade pursuers, put on a show, or anything else of significant importance, Stunts express those actions.

<!-- $data vehicles.yml vehicle-stunts float-right -->

- **Parking/Landing:** Parking a vehicle in a busy parking lot or on the side of a street, or landing an airborne craft.
- **Sideswiping/Ramming:** Attempting to ram or sideswipe a vehicle is an extremely dangerous action, and will result in loss of control of the vehicle.
- **Slow Turn:** Making a turn of less than 45 degrees at Cruising speed, or up to 90 degrees at Normal or slower speed, without loosing control of the vehicle. Failing this is not likely to damage the vehicle.
- **Fast Turn / Tight Turn:** Making a turn at Cruising speed without running into something, flipping, or damaging the vehicle. A 180-degree turn at Normal Speed is a Tight Turn.
- **Hairpin Turn:** Making a 180 degree turn at Cruising speed. Mechanical propulsion methods _will_ take damage from this action, whether it succeeds or fails.

If a driver fails a Stunt roll, the vehicle is out of control, and the driver must make a DC 15 MNV+Phys check to regain control. Failure may also entail damage to the vehicle, its occupants, or nearby vehicles or characters.

### Ramming / Sideswiping

Attempting to damage or disable another vehicle by hitting it with your own is a very dangerous action, and will result in damage to both vehicles if attempted. A miss while ramming or sideswiping will put the vehicle in a spin, which may cause damage to the vehicle or occupants if the driver fails a Tight Turn stunt roll.

TODO: impact damage

## Weapons

Shooting: Cortex+Accuracy

TODO: weapon attacks, damage, and ammo

## Creating Vehicles

Vehicles have three Stats: Toughness, Manuverability, and Cortex.

TODO: vehicle creation rules

# Spaceflight

TODO: space/atmo flight rules: piloting, gunnery, sensors, etc.

## Creating Spaceships

TODO: spaceship creation rules
