# Boss Key / Decrypter System — Squad Roster Plan

## Lore

You ARE the Combobreaker. That's your identity — the game is named after you.

The squad was a tactical frontline mech unit. When the military decommissioned them, they hid each squad member's mech in a different zone. The pilots' souls were trapped inside silicon keys, locked within the corrupted mechs that became the zone bosses.

The **Unknown Sealed Key** is YOUR key — the Combobreaker's own soul. The Mapmaker secretly planted it inside your chassis when the military was scattering the squad. You start the game with it. It's why you're awake. It's why you move without a pilot.

The other 10 keys are your squadmates. Defeating each boss frees the pilot's soul from their silicon coffin. Taking the key to the Decrypter releases the personality within and hardwires their combat specialty into your systems as a **breaker** power.

Powers use the **"breaker"** suffix representing their role.

## Key Naming Convention

### Sealed keys (dropped by bosses, before decryption)
Format: `[Boss Name]'s Sealed Key`
Examples:
- `T1 Destroyer's Sealed Key`
- `Hive Overlord's Sealed Key`
- `Warlord Chassis's Sealed Key`

The starter key: `Unknown Sealed Key` (was "Old Key")

### Decrypted keys (after the Decrypter processes them)
Format: `[Pilot Name]'s [Power]breaker Key`
Examples:
- `Chunk's Steelbreaker Key`
- `Wire's Speedbreaker Key`
- `Rex's Warbreaker Key`

## Key Structure

- **11 keys total** in the game
- **1 key** (Unknown Sealed Key) = yours = Combobreaker = always active, not decryptable
- **10 keys** dropped by bosses = sealed → decrypted → breaker power unlocked
- **Combobreaker** stays always-on (it's YOU) — no change needed
- **Speedbreaker** is currently always-on — needs to be **locked** behind Wire's key

## Squad Roster

| # | Zone | Boss Mech | Sealed Key | Decrypted Key | Pilot | Squad Role | Power | Effect |
|---|------|-----------|------------|---------------|-------|------------|-------|--------|
| — | (starter) | — | Unknown Sealed Key | *(not decryptable)* | **You** | Combobreaker | **Combobreaker** | Double-damage chance (always active) |
| 1 | Scrapyard | T1 Destroyer | T1 Destroyer's Sealed Key | Chunk's Steelbreaker Key | **Chunk** | Scrap Refiner | **Steelbreaker** | Bonus scrap from battle victories |
| 2 | Old Battlefield | Siege Remnant | Siege Remnant's Sealed Key | Sarge's Shieldbreaker Key | **Sarge** | Squad Defender | **Shieldbreaker** | Defence pool partially regenerates each round |
| 3 | Downtown | Corporate Warlord | Corporate Warlord's Sealed Key | Ghost's Lootbreaker Key | **Ghost** | Infiltrator | **Lootbreaker** | Guaranteed item drop from battles |
| 4 | Orbital Station | Station Core Guardian | Station Core Guardian's Sealed Key | Bolt's Stonebreaker Key | **Bolt** | Engineer | **Stonebreaker** | Bonus mining yield |
| 5 | Wasteland | Feral War Engine | Feral War Engine's Sealed Key | Fang's Strikebreaker Key | **Fang** | Assault | **Strikebreaker** | Bonus flat damage on attacks |
| 6 | Undercity | Hive Overlord | Hive Overlord's Sealed Key | Wire's Speedbreaker Key | **Wire** | Scout | **Speedbreaker** | Double-attack chance (currently default — needs locking) |
| 7 | Industrial Zone | Smelter Titan | Smelter Titan's Sealed Key | Anvil's Crushbreaker Key | **Anvil** | Heavy Gunner | **Crushbreaker** | Attacks ignore a portion of enemy defence |
| 8 | Frozen Reach | Avalanche Colossus | Avalanche Colossus's Sealed Key | Frost's Painbreaker Key | **Frost** | Medic | **Painbreaker** | Enhanced end-of-round regen |
| 9 | Neon Strip | The House | The House's Sealed Key | Ace's Mindbreaker Key | **Ace** | Pilot / Gambler | **Mindbreaker** | Bonus Silicon from kills |
| 10 | Dead Zone | Abomination Core | Abomination Core's Sealed Key | Null's Voidbreaker Key | **Null** | Specialist | **Voidbreaker** | Chance to negate enemy attacks |
| 11 | Frontline | Warlord Chassis | Warlord Chassis's Sealed Key | Rex's Warbreaker Key | **Rex** | Commander | **Warbreaker** | All breaker effects slightly boosted |

## The Unknown Sealed Key

- Replaces "Old Key" as the starter story item
- Player starts with it (already in storyItems on new game)
- It is NOT a boss drop
- It cannot be decrypted at the Decrypter (it's already you)
- The Decrypter dropdown should not list it
- The Mapmaker is the one who planted it in you — this connects to existing Mapmaker lore

## Code Changes Required

### Phase 1: Key renaming + Speedbreaker gating
- [ ] Rename starter "Old Key" to "Unknown Sealed Key" everywhere (game init, save/load, storyitems.js)
- [ ] Rename all 10 boss keyDrop values in boss_encounters.js to "[Boss]'s Sealed Key"
- [ ] Add 10 sealed key story items to storyitems.js with lore descriptions
- [ ] Rename all Protocol story items to "[Pilot]'s [Power]breaker Key" with squad member lore
- [ ] Update DECRYPTER_POWERUPS mapping in index.html (sealed key → decrypted key)
- [ ] Remove Unknown Sealed Key from DECRYPTER_POWERUPS (not decryptable)
- [ ] Gate speedbreaker proc in battleRound() behind owning Wire's Speedbreaker Key
- [ ] Gate speedbreaker proc in evadeAmbush() behind owning Wire's Speedbreaker Key
- [ ] Combobreaker stays always-on (no change)

### Phase 2: Implement all 10 breaker powers
- [ ] Steelbreaker — bonus scrap on battle victory
- [ ] Shieldbreaker — defence pool partially regenerates each battle round
- [ ] Lootbreaker — guaranteed item drop from battles
- [ ] Stonebreaker — bonus mining yield
- [ ] Strikebreaker — bonus flat damage on attacks
- [ ] Speedbreaker — double-attack chance (already exists, just needs gating)
- [ ] Crushbreaker — attacks ignore a portion of enemy defence
- [ ] Painbreaker — enhanced end-of-round regen
- [ ] Mindbreaker — bonus Silicon from kills
- [ ] Voidbreaker — chance to negate enemy attacks
- [ ] Warbreaker — all breaker effects slightly boosted

### Phase 3: Lore updates
- [ ] Update boss encounter intro text / dialogue to hint at the trapped pilot
- [ ] Update Decrypter dialogue to reference releasing the pilot's soul
- [ ] Update Unknown Sealed Key description to hint at its true meaning
- [ ] Update sealed key story item descriptions to reference the corrupted mech
- [ ] Update decrypted key descriptions to reference the freed pilot personality
