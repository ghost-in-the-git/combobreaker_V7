# Boss Key / Decrypter System — Squad Roster Plan

## Lore

You ARE the Combobreaker. That's your identity — the game is named after you.

The squad was a tactical frontline mech unit. When the military decommissioned them, they hid each squad member's mech in a different zone. The pilots' souls were trapped inside silicon keys, locked within the corrupted mechs that became the zone bosses.

The **Old Key** is YOUR key — the Combobreaker's own soul. The Mapmaker secretly planted it inside your chassis when the military was scattering the squad. You start the game with it. It's why you're awake. It's why you move without a pilot.

The other 10 keys are your squadmates. Defeating each boss frees the pilot's soul from their silicon coffin. Taking the key to the Decrypter releases the personality within and hardwires their combat specialty into your systems as a **breaker** power.

## Key Structure

- **11 keys total** in the game
- **1 key** (Old Key) = yours = Combobreaker = always active, not decryptable
- **10 keys** dropped by bosses = 10 breaker powers unlocked via the Decrypter
- **Combobreaker** stays always-on (it's YOU) — no change needed
- **Speedbreaker** is currently always-on — needs to be **locked** behind Wire's key

## Squad Roster

| # | Zone | Boss Mech | Key Drop | Pilot | Squad Role | Power | Effect |
|---|------|-----------|----------|-------|------------|-------|--------|
| — | (starter) | — | Old Key | **You** | Combobreaker | **Combobreaker** | Double-damage chance (always active) |
| 1 | Scrapyard | T1 Destroyer | Chunk's Key | **Chunk** | Scrap Refiner | **Scrapbreaker** | Bonus scrap from battle victories |
| 2 | Old Battlefield | Siege Remnant | Sarge's Key | **Sarge** | Squad Defender | **Shieldbreaker** | Defence pool partially regenerates each round |
| 3 | Downtown | Corporate Warlord | Ghost's Key | **Ghost** | Infiltrator | **Lootbreaker** | Guaranteed item drop from battles |
| 4 | Orbital Station | Station Core Guardian | Bolt's Key | **Bolt** | Engineer | **Minebreaker** | Bonus mining yield |
| 5 | Wasteland | Feral War Engine | Fang's Key | **Fang** | Assault | **Strikebreaker** | Bonus flat damage on attacks |
| 6 | Undercity | Hive Overlord | Wire's Key | **Wire** | Scout | **Speedbreaker** | Double-attack chance (currently default — needs locking) |
| 7 | Industrial Zone | Smelter Titan | Anvil's Key | **Anvil** | Heavy Gunner | **Crushbreaker** | Attacks ignore a portion of enemy defence |
| 8 | Frozen Reach | Avalanche Colossus | Frost's Key | **Frost** | Medic | **Lifebreaker** | Enhanced end-of-round regen |
| 9 | Neon Strip | The House | Ace's Key | **Ace** | Pilot / Gambler | **Luckbreaker** | Bonus Silicon from kills |
| 10 | Dead Zone | Abomination Core | Null's Key | **Null** | Specialist | **Voidbreaker** | Chance to negate enemy attacks |
| 11 | Frontline | Warlord Chassis | Rex's Key | **Rex** | Commander | **Warbreaker** | All breaker effects slightly boosted |

## The Old Key

- Player starts with it (already in storyItems on new game)
- It is NOT a boss drop — the Scrapyard boss now drops "Chunk's Key" instead of "Old Key"
- It cannot be decrypted at the Decrypter (it's already you)
- The Decrypter dropdown should not list it
- The Mapmaker is the one who planted it in you — this connects to existing Mapmaker lore

## Code Changes Required

### Phase 1: Key renaming + Combobreaker/Speedbreaker gating
- [ ] Rename all 10 boss keyDrop values in boss_encounters.js to "[Name]'s Key"
- [ ] Add 10 new key story items to storyitems.js with pilot lore descriptions
- [ ] Rename all Protocol story items to breaker names with squad member lore
- [ ] Update DECRYPTER_POWERUPS mapping in index.html to use new key/protocol names
- [ ] Remove Old Key from DECRYPTER_POWERUPS (not decryptable)
- [ ] Gate speedbreaker proc in battleRound() behind owning Wire's decrypted protocol
- [ ] Gate speedbreaker proc in evadeAmbush() behind owning Wire's decrypted protocol
- [ ] Combobreaker stays always-on (no change)

### Phase 2: Implement all 10 breaker powers
- [ ] Scrapbreaker — bonus scrap on battle victory
- [ ] Shieldbreaker — defence pool partially regenerates each battle round
- [ ] Lootbreaker — guaranteed item drop from battles
- [ ] Minebreaker — bonus mining yield
- [ ] Strikebreaker — bonus flat damage on attacks
- [ ] Speedbreaker — double-attack chance (already exists, just needs gating)
- [ ] Crushbreaker — attacks ignore a portion of enemy defence
- [ ] Lifebreaker — enhanced end-of-round regen
- [ ] Luckbreaker — bonus Silicon from kills
- [ ] Voidbreaker — chance to negate enemy attacks
- [ ] Warbreaker — all breaker effects slightly boosted

### Phase 3: Lore updates
- [ ] Update boss encounter intro text / dialogue to hint at the trapped pilot
- [ ] Update Decrypter dialogue to reference releasing the pilot's soul
- [ ] Update Old Key description to hint at its true meaning
- [ ] Update key story item descriptions to reference squad member personality
