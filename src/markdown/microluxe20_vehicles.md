<!-- $header Vehicles & Spaceships -->

# Planetary Vehicles

A Planetary vehicle is any type of vehicle or transportation that operates only on a planet, whether it be a car, a truck, a skimmer, a fighter craft, or even a passenger shuttle.

Planetary Vehicles come in two types: **surface vehicles** and **air vehicles**. Surface vehicles are dependent upon proximity or contact with a flat surface – such as ground, water, a roof, or a road – to operate. Cars, boats, motorbikes, and skimmers are all Surface vehicles.

Air vehicles are not dependent upon any solid surface except during take-off or landing. Fightercraft, spaceships in atmosphere, and shuttles are all Air vehicles. Submersibles are a special type of Air vehicle, travelling in water rather than air.

Vehicles may carry passengers, have multiple modes of travel, mount weapons, carry cargo, and do many more things.

## Vehicle Stats

<div class="float-right t-full pull-up-sm">

**Vehicle Sizes**
<!-- $data vehicles.yml vehicle-size  -->

**Vehicle Damage**
<!-- $data vehicles.yml damage-levels -->
</div>

Vehicles have three main Stats, analogous to a character's stats. These stats are used in dice rolls by their Bonus, which is equal to `Stat / 2`, rounded down.

- **Toughness (TGH):** A measure of the vehicle's hull and internals, Toughness determines how resistant to damage and adverse conditions a vehicle is.
- **Maneuverability (MNV):** A measure of the vehicle's responsiveness to user input and how easy it is to control. With a more maneuverable vehicle, it is easier to do stunts and travel at high speeds.
- **Cortex (COR):** A vehicle's Cortex is a measure of how much it assists its users with targeting or computations. Most ground vehicles don't have a Cortex rating, but fightercraft and more complex vehicles usually have targeting and navigation capabilities.

Vehicles also have a few additional stats which affect them:

**Size:** This determines how much of a target the vehicle is, as well as how well it can fit inside a container or building. Most single-person vehicles are Small, while multiple-person passenger vehicles tend to be Normal or Large.

Vehicle Sizes are not equal to character Sizes; Normal and smaller characters count as Small, and all others count as Normal or Large in vehicle Size.

**Speed:** A measure of how fast the vehicle travels at Normal speed, usually expressed in MPH or KPH. Speed can also be expressed in Meters per Round. <br> For reference, one round is 1/600th of an hour.

**Armor Class (AC):** A vehicle's Armor class is equal to `10 + MNV + Armor Bonus (if any)` of the vehicle.

**Damage:** This measures the condition of the vehicle, according to the table on the right. A vehicle can have a single damage meter, or as many as the gamemaster decides. A vehicle can take an infinite amount of Very Light damage, but damage of greater levels will increase the meter.

## Driving and Flying

Driving or flying a vehicle is accomplished by making MNV+Physical checks against a certain difficulty, as outlined in this section. If the difficulty of an action is less than 10, it is considered an automatic success and no roll need be made.

<!-- $page-break -->

### Vehicle Speed

When driving or flying, you will be travelling at one of five speed levels. The speeds listed are maximum speeds for the level, calculated from a vehicle's Speed; any speed between the current and the next lowest speed is part of the level.

<!-- $data vehicles.yml move-mode float-right -->

- **Stopped:** The vehicle goes nowhere. Requires no roll and doesn't consume an action.
- **Cautious:** The vehicle moves slowly. This is generally a free action, but terrain and other modifiers may necessitate a roll. A vehicle being driven backwards must use this mode.
- **Normal:** The vehicle is travelling down a smaller road or on off-road terrain. This consumes a full action, but has a base difficulty of 0. Characters need only roll if the difficulty is increased by terrain or other conditions.
- **Cruising:** The vehicle is travelling at high speeds on a road, in the sea, or in the air.
- **Emergency:** Reserved for times of significant danger, vehicles travelling at Emergency speed normally can't sustain it for long without damaging their propulsion system.

### Terrain and Situation

The situation or terrain a vehicle is travelling in has an effect on the difficulty of an action, as does what you are trying to accomplish. Driving in a straight line over flat terrain with no traffic is an extremely easy action, while attempting to navigate traffic in a rainstorm while travelling at emergency speed is a very dangerous thing to do.

<!-- $data vehicles.yml situation float-right -->

The Situation is a measure of how difficult the driving environment is to navigate:

- **Easy:** A flat surface with little to no obstacles, light weather, a gentle sea, light traffic.
- **Moderate:** Choppy seas, an uneven surface, small obstacles, moderate winds, rain, or traffic.
- **Rough:** Heavy wind or rain, large but negotiable obstacles, flying near obstacles or the ground, strong undercurrent or waves, heavy traffic.
- **Very Rough:** Stormy weather, airborne hazards, large waves, hail, dense or large obstacles.
- **Hazardous:** A minefield, large obstacles with almost no passage, significant airborne hazards, gale-force winds, massive waves, a hurricane or tornado.

### Doing Stunts

Stunts are specific actions the driver is attempting to accomplish. Generally, just driving is a generic action that doesn't need to be rolled for, but if the driver is attempting to evade pursuers, put on a show, or anything else of significant importance, Stunts express those actions.

Stunts are carried out by rolling MNV+Physical against the driving difficulty, modified by the difficulty of the stunt. A few stunts and difficulties are listed here:

<!-- $data vehicles.yml vehicle-stunts float-right -->

- **Parking/Landing:** Parking a vehicle in a busy parking lot or on the side of a street, or landing an aircraft.
- **Sideswiping/Ramming:** Attempting to ram or sideswipe a vehicle is an extremely dangerous action, and will result in loss of control of both vehicles if successful.
- **Slow Turn:** Making a turn of less than 45 degrees at Cruising speed, or up to 90 degrees at Normal speed, without loosing control of the vehicle. Failing this is not likely to damage the vehicle.
- **Fast Turn / Tight Turn:** Making a turn at Cruising speed without running into something, flipping, or damaging the vehicle. A 180-degree turn at Normal Speed is a Tight Turn.

If a driver fails a Stunt roll, the vehicle is out of control, and the driver must make a DC 15 MNV+Phys check to regain control. Failure may also entail damage to the vehicle, its occupants, or nearby vehicles or characters.

<!-- $page-break -->

## Impact Damage

Attempting to damage or disable another vehicle by hitting it with your own is a very dangerous action, and will result in damage to both vehicles if attempted. A miss while ramming or sideswiping will put the vehicle in a spin, which may, at the Gamemaster's discretion, cause damage to the vehicle or occupants if the driver fails a Tight Turn stunt roll.

<!-- $data vehicles.yml ram-speed float-right -->

Damage to vehicles is calculated by their relative speeds, dependent upon the collision type. Head-on collisions are the most damaging, while a sideswipe is the least.

Collision damage is expressed in damage levels, rather than points, and is controlled by two factors: the speed of the collision, and the relative positioning of the vehicles. A head-on collision increases the damage by one level, while a sideswipe reduces it by two.

The difference in size affects the damage levels, as well. For each level of size difference, increase or reduce the damage level by one.

If damage is needed in points, pick a random value in the damage level's range.

**Example:** A personal skimmer (Small) collides head-on with a transport truck (Normal) at Cruising speed. The skimmer is Destroyed, while the transport takes Extreme damage.

**Example:** A box-van sidesipes a truck, travelling at Cruising speed. Both vehicles take Light damage.

## Weapons

Vehicles can carry or mount offensive weapons in several manners:

- **Fixed / Arc Mount:** The weapon is attached directly to the vehicle with limited travel, restricting its aiming arc to 90 degrees in one of four directions: left (&#9680;), right (&#9681;), forward (&#9683;), or backward (&#9682;). Generally, these mounts are used for weapons controlled by the driver or pilot.
- **Turret Mount:** The weapon is attached to a turret with a full range of motion. These weapons cannot usually be controlled by the driver, but must be controlled by another character.
- **Character-Wielded:** These are not technically vehicle weapons, but are weapons held by characters travelling in the vehicle. They are fired as normal for characters, albeit with higher difficulty when the vehicle is doing a Stunt.

Combat with vehicle-mounted weapons is carried out very similarly to ranged combat with characters, except a different Attack Bonus is used:

**Vehicle Attack Bonus** = COR bonus + Accuracy + modifiers

The Attack Bonus is modified by the difference in size (using the vehicle size table) between the attacking vehicle and the target, as well as any modifiers the weapon may have.

If the vehicle is doing a Stunt while firing a weapon, the to-hit difficulty increases at the Gamemaster's discretion; suggested values are +2 for a minor stunt, and +5 for a major stunt.

A Natural 20 is handled in the same fashion as with characters; the attack automatically hits, and the weapon's maximum damage is added to the normal damage roll.

## Resolving Damage

When an attack successfully hits a vehicle, these steps govern how much damage is received. First, the Gamemaster determines which section of the vehicle is taking damage. For vehicles with only one damage meter, this is obvious, but for vehicles with more than one, the choice is up to the Gamemaster. Typically, damage flows from external armor into the vehicle's core, but sometimes specific systems of a vehicle may take damage instead of the whole.

If the damage is expressed in points rather than levels, roll the weapon's die code and subtract the vehicle's Toughness bonus, yielding the damage total. This total is used to find the damage level on the Vehicle Damage table.

If the damage level is Very Light or less, the damage is discarded. Otherwise, the vehicle's damage meter is increased by the number of damage levels over Very Light.

If the damage level is Moderate or greater, the vehicle's occupants take 1/2 the damage, rounding down. When a vehicle reaches Severe damage, it becomes Unpowered and slows to a stop. Extreme damage renders the vehicle Uncontrollable, and the vehicle will likely crash.

**Example:** A vehicle takes 16 HP of damage, which is Moderate level. Moderate is two levels above Very Light, so the vehicle's damage meter of Light is increased to Severe, its occupants take 4 HP damage, and it looses power.

So long as a vehicle or part is not Destroyed, it can be repaired, though repairs are proportionately more expensive and time-consuming the more damage there is. If a vehicle's Damage meter reaches Destroyed, the vehicle (or the part associated with the meter) is destroyed beyond repair and must be replaced.

## Creating Vehicles

Creating a vehicle is almost as simple as creating a character. Toughness, Maneuverability, and Cortex are set based on the vehicle's design. The gamemaster determines what Size and Speed the vehicle is, as well as how much Damage it can take. The vehicle's weapons, cargo capacity, passenger capacity, and cost are set, and _voila_, done!

**Example:**

<div class="flex">
<!-- $object
name: Light Skimmer
subtitle: "TGH: 1, MNV: 6, COR: 0 | AC: 12, Speed: 115"
nameFirst: true
---

A small, single-person skimmer, similar in form to a motorcycle of Old Terran make. The driver sits on an external seat, and there is a small cargo container mounted behind the seat.

**Size:** Small
**Damage:** Undamaged (Core)
**Cargo:** 1 Small Container (0.20 U)
**Seats:** 1
**Weapons:** None
**Cost:** $380
-->

<!-- $object
name: Converted SUV
subtitle: "TGH: 5, MNV: 4, COR: 0 | AC: 14, Speed: 90"
---

An old SUV made battle-ready by the addition of some armor plating and a makeshift turret mounted on the roof.

- **HP:** 40 (Core), 15 (Armor)
- **Size:** Normal
- **Cargo:** Truck Bed (1.00 U)
- **Seats:** 4
- **Weapons:** 1x Turret Mount
	- Ballistic LMG (2d6+2, 110ft, ammo: 7)
- **Cost:** $380
-->
</div>

# Spaceflight

TODO: space/atmo flight rules: piloting, gunnery, sensors, etc.

## Creating Spaceships

TODO: spaceship creation rules
