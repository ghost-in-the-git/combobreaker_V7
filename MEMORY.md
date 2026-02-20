# COMBOBREAKER V5 - Codebase Summary

## What Is This?
A roguelike mech pilot browser game (single HTML + JS files). Turn-based combat, asteroid mining, mineral economy, equipment crafting. All client-side, saves to localStorage.

## Branch
- Working branch: `claude/repo-review-H0nTH`

## Recent Work (Session 1)
- Added `scrapCost` field to forged items (10x mineral count)
- Updated `purchaseItem()` and `updateShopUI()` in index.html to check/deduct scrap
- Renamed ALL 30 minerals to new fantasy names across 24 files
- Added tier 11 minerals: Reagent Arcadium, Catalyst MK-II, Anomaly 0x3A
- FORGER_ITEMS only has 3 items defined — needs 99 total (11 tiers × 3 minerals × 3 slots each)

## Key File Map
See [codebase-structure.md](codebase-structure.md) for full details.

| File | Purpose |
|------|---------|
| `index.html` (~4034 lines) | Main game: UI, combat, mining, shops, save/load |
| `items.js` | ~1150 equipment items across 9 slot types |
| `forger_items.js` | FORGER_TIERS, FORGER_SLOT_GROUPS, FORGER_ITEMS (only 3 defined) |
| `refined_minerals.js` | 33 refined mineral definitions (tier 1-11) |
| `storyitems.js` | 100+ story items, maps, collectibles |
| `enemies.js` | 7 base enemy types |
| `encounters.js` | 10 base shop encounter types |
| `encounters_forge.js` | The Forger encounter config |
| `encounters_home.js` | The Professor (starter shop) |
| `enemies_[zone].js` | Zone-specific enemies (10 zones) |
| `encounters_[zone].js` | Zone-specific shops + mineral traders |
| `ambush_[zone].js` | Zone-specific ambush encounters |
| `mining_[zone].js` | Zone mining data (10 zones + asteroid belt) |

## Mineral Pipeline
1. **Mine** raw minerals from asteroids (zone-specific)
2. **Refine** at Mineral Trader: 5 raw → 1 refined
3. **Forge** at The Forger: 3 refined + scrap → forged equipment

## Mineral Names (11 Tiers, 3 per tier)
| Tier | Pos 0 (body/legs/arms) | Pos 1 (weapon/chip/processor) | Pos 2 (pilot/implant/drill) |
|------|------------------------|-------------------------------|----------------------------|
| 1 | Aetherite | Bronzewisp | Cindergem |
| 2 | Duskquartz | Emberlith | Frostveil |
| 3 | Gloomstone | Hexsilica | Iridionite |
| 4 | Jetspinel | Kryptoglass | Lumenore |
| 5 | Moonshardite | Nightpyre | Obsidryl |
| 6 | Prismalune | Quellium | Riftmarble |
| 7 | Starvitrine | Thorncrystal | Umbracite |
| 8 | Vortexium | Wyrmstone | Xanthryx |
| 9 | Yonderite | Zephyrsalt | Isotope Lace |
| 10 | Archive Shard | Strata-Null | Compound 33 |
| 11 | Reagent Arcadium | Catalyst MK-II | Anomaly 0x3A |

## Equipment Slots (9 total)
body, legs, arms, weapon, chip, processor, pilot, drill, implant

## Game State
- `game.player` — level, xp, hp, stats, fuel
- `game.inventory` — array of item objects
- `game.equipment` — 9 named slots (body, legs, etc.)
- `game.minerals` — `{ tier1: [...], tier2: [...], refined: [...] }`
- `game.scrap` — integer scrap count
- `game.storyItems` — array of story item names
- 3 save slots via localStorage

## Forging System Details
- `FORGER_TIERS` maps tier → zone + 3 mineral names
- `FORGER_SLOT_GROUPS` maps mineral position → 3 equipment types
- Forge UI: dropdown selects mineral → shows 3 craftable slots
- Items without blueprints show "No Blueprint" placeholder
- Forged items cost: `mineralCost` (refined) + `scrapCost` (10x mineral count)
- Purchase logic in `purchaseItem()`, UI in `updateShopUI()` (index.html)

## Zones (13 total)
home, ratpile, scrapyard, oldbattlefield, downtown, orbitalstation, wasteland, undercity, industrialzone, frozenreach, neonstrip, deadzone, asteroidbelt, forge
- Tier 11 zone is "???" (no mining/encounter files yet)
