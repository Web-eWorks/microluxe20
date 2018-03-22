<!-- $header Microluxe 20 Space <br> <br> Equipment Tables -->

# Equipment

<!-- TODO: rework all equipment lists. -->

## Currency

The most common currency used across all of Terador space is the Council Credit, normally known as the Credit ($). The credit is a standardized currency jointly developed by Sol and Teramir, traded on an extremely decentralized Council-wide banking system. The end result is a currency highly resistant to forgery and inflation that can be taken anywhere an adventurer wants to go.

Credits are stored on Credsticks - passively-powered, biometric-protected micro-computers issued by a number of banking organizations. One credstick holds a virtually-infinite amount of credits, and the currency stored can be transferred between credsticks at any computing platform with a compatible port.

The conversion rates for certain metals historically used as currency are listed below:

<!-- $data wealth.yml metal -->

You begin with a certain amount of acquired credits, determined by your character class.

<!-- $data wealth.yml class_wealth -->

## Weapons

Here is the format for weapon entries (given as column headings on the table below):

- **Damage:** The damage column gives the damage dealt by the weapon on a successful hit.
- **Range:** If a weapon can be thrown or fired, this is the range at which a normal attack is made. Any attack less than this distance is not penalized. However, every extra doubling of this distance imposes a -5 penalty on the attack roll.
- **Size:** The size of a weapon determines which stat is used to determine hits, as well as which classes can use it. For example, Deckers can only use Light weapons.
- **Cost:** This value is the price for purchasing the weapon. The cost includes miscellaneous gear that goes with the weapon (for example, buying a knife includes a sheath).

### Melee Weapons

<!-- $data weapons.yml melee -->

<div class="page-break-after"></div>

### Ranged Weapons

Ranged weapons use ammunition, which is consumed at a rate of 1 for every attack made, regardless of if the attack hit. When a weapon is out of ammunition, you must spend a round reloading it before you are able to fire it again. When purchased, they include one full load of ammunition and any required gear (magazine, etc.)

Ranged weapons have a few extra headings:

- **Ammo:** The number of shots the weapon can fire before reloading. The weapon includes this as part of the purchase price. "–" in the Ammo field indicates a single shot weapon that doesn't need to be reloaded as a separate action.
- **Cost:** The cost of one full load of ammunition follows the cost of the actual weapon.

<!-- $data weapons.yml ranged -->

###  Thrown Weapons

Some weapons (such as grenades) are thrown at the enemy and then do damage. To resolve attacks with these weapons, make a skill check to throw the weapon (usually DEX+Accuracy), and roll attacks for each character caught in the weapon's attack radius. A weapon's attack roll is 1d20 + the weapon's attack bonus. For all attacks that succeed, damage is resolved normally.

The format for thrown weapons is as follows:

- **Damage:** The damage (or other effect) done by the weapon when it lands.
- **Radius:** This is the distance from the object which characters must be in to be affected.
- **Range:** The normal range at which the weapon can be thrown.
- **Cost:** The amount in credits the item can normally be purchased for.

<!-- $data weapons.yml thrown -->

## Armor & Shields

<!-- TODO: Powered armor and exoskeletons. -->

Here is the format for armor entries (given as column headings on the table below):

- **Size:** The physical size of the armor. Different classes can only wear specific sizes of armor. Similar to armor sizes, different types of shields are only available to certain classes as well.
- **Cost:** The normal price of the armor.
- **AC Bonus:** The Armor Class bonus provided by the armor when worn.

### Armor

<!-- $data armor.yml armor -->

### Shields

<!-- $data armor.yml shields -->

<div class="page-break-after"></div>

## Adventuring Equipment

<!-- TODO: rework all of this. -->

Characters may purchase equipment from the following lists with their starting money or select one of the standard adventuring "fast packs".

### Adventuring Gear

<!-- $data gear.yml adventuring-gear -->

### Clothing

<!-- $data gear.yml clothing -->

### Mounts and Related Gear

<!-- $data gear.yml mounts -->

### Fast Equipment Packs

Suggested starting packs for new characters. Each pack uses 35gp of a character's starting money.

<!-- TODO: extend table constructor to allow this sort of data.  -->

| __Pack A__ | __Pack B__ | __Pack C__ |
| :--- | :--- | :--- |
| backpack | backpack | backpack |
| belt pouch | belt pouch | belt pouch |
| bedroll | bedroll | bedroll |
| hooded lantern | 10 torches | 10 torches |
| 10 oil flasks | 10 oil flasks | tent |
| flint & steel | flint & steel | flint & steel |
| shovel | chalk | hammer |
| 2 sets of caltrops | 10 ft. pole | 10 iron spikes |
| signal whistle | mirror | grappling hook |
| pen & paper | crowbar | 50 ft. rope |
| water skin | water skin | water skin |
| rations (4 days) | rations (4 days) | rations (4 days) |

Rogues are advised to purchase Thieves tools if they want to pick locks, disarm traps, etc.
