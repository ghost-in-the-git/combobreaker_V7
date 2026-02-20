# Codebase Structure - Detailed

## Game Systems

### Combat
- Waves spawn every 5s, 30s to engage/decline
- Turn-based: player attacks all enemies, then enemies attack back
- Damage = attack - defence (min 1)
- Combo stat = % chance for bonus hits
- Regen stat = HP recovered per combat turn
- Speed stat affects turn order
- Defeat: deaths++, respawn at half HP

### Mining
- 15% chance per wave to get mining event
- Asteroid has: mineral, depth (feet), stability (HP), stabilityLoss (per turn)
- Player mines `mining` stat feet per turn
- Reach depth before stability hits 0 = success (collect mineral)
- Failure = asteroid collapses, player takes damage

### Encounters/Shops
- 20% chance per wave for shop encounter
- 3 item slots per shop
- Items cost XP or minerals
- First encounter with named vendor unlocks its location as a destination
- The Forger uses mineral dropdown instead of fixed slots

### Leveling
- Spend XP = xpToLevel to upgrade ONE stat by +1
- Also: level++, maxHp++, xpToLevel *= 1.5
- Starting xpToLevel = 10

## File Naming Conventions
- `enemies_[zone].js` — ENEMIES_[ZONE] constant (e.g., ENEMIES_SCRAPYARD)
- `encounters_[zone].js` — ENCOUNTERS_[ZONE] constant
- `ambush_[zone].js` — AMBUSH_[ZONE] constant
- `mining_[zone].js` — MINING_[ZONE] constant

## Key Functions in index.html
- `purchaseItem(index)` — handles shop purchases (XP, minerals, scrap)
- `updateShopUI()` — renders shop slots with affordability checks
- `updateStats()` — recalculates all player stats from base + equipment
- `getForgerSlotsForMineral(name)` — maps mineral to equipment types
- `getForgerItem(mineral, slotType)` — finds forger item by mineral + type
- `updateForgeDropdown()` — populates forge mineral selector
- `onForgeMineralChange()` — handles forge dropdown selection
- `generateShopItems(encounter)` — creates shop inventory from encounter config
- `findShopItem(name)` — searches ITEMS, STORY_ITEMS, REFINED_MINERALS, FORGER_ITEMS
- `getMineralCount(mineral, category)` — counts minerals in inventory
- `removeMinerals(mineral, category, count)` — removes minerals from inventory
- `addMineral(name, category)` — adds mineral to inventory
