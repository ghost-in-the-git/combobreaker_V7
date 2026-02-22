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

- **12 keys total** in the game
- **1 key** (Unknown Sealed Key) = yours = Combobreaker = you start with it sealed, must decrypt it
- **10 keys** dropped by bosses = sealed → decrypted → breaker power unlocked
- **1 key** found sealed on the Mapmaker's body in the Dead Zone = Skybreaker (still needs decryption)
- **All breaker powers** require decryption at the Decrypter — including yours
- **Speedbreaker** is currently always-on — needs to be **locked** behind Wire's key
- **Combobreaker** is currently always-on — needs to be **locked** behind decrypting the Unknown Sealed Key

## Squad Roster

| # | Zone | Boss Mech | Sealed Key | Decrypted Key | Pilot | Squad Role | Power | Effect |
|---|------|-----------|------------|---------------|-------|------------|-------|--------|
| — | (starter) | — | Unknown Sealed Key | Your Combobreaker Key | **You** | Combobreaker | **Combobreaker** | Chance to deal double damage (combo proc) |
| 1 | Scrapyard | T1 Destroyer | T1 Destroyer's Sealed Key | Chunk's Steelbreaker Key | **Riley 'Chunk' Kowalski** | Scrap Refiner | **Steelbreaker** | Chance to gain double scrap (mining proc) |
| 2 | Old Battlefield | Siege Remnant | Siege Remnant's Sealed Key | Sarge's Shieldbreaker Key | **Marcus 'Sarge' Oduya** | Squad Defender | **Shieldbreaker** | Chance to double defence at start of round (def proc) |
| 3 | Downtown | Corporate Warlord | Corporate Warlord's Sealed Key | Ghost's Visionbreaker Key | **Yuki 'Ghost' Tanaka** | Infiltrator | **Visionbreaker** | Chance to disappear and avoid attack (combo proc) |
| 4 | Orbital Station | Station Core Guardian | Station Core Guardian's Sealed Key | Bolt's Stonebreaker Key | **Petra 'Bolt' Lindgren** | Miner | **Stonebreaker** | Chance to add mining stat to asteroid stability (mining proc) |
| 5 | Wasteland | Feral War Engine | Feral War Engine's Sealed Key | Fang's Strikebreaker Key | **Diego 'Fang' Reyes** | Assault | **Strikebreaker** | Chance to ignore enemy defence stat (attack proc) |
| 6 | Undercity | Hive Overlord | Hive Overlord's Sealed Key | Wire's Speedbreaker Key | **Jess 'Wire' Nakamura** | Scout | **Speedbreaker** | Chance to attack twice (speed proc) — needs gating |
| 7 | Industrial Zone | Smelter Titan | Smelter Titan's Sealed Key | Anvil's Crushbreaker Key | **Dmitri 'Anvil' Volkov** | Heavy Gunner | **Crushbreaker** | Chance for damage to hit entire enemy group (attack proc) |
| 8 | Frozen Reach | Avalanche Colossus | Avalanche Colossus's Sealed Key | Frost's Painbreaker Key | **Elise 'Frost' Calloway** | Medic | **Painbreaker** | Chance to regain HP equal to regen stat (regen proc) |
| 9 | Neon Strip | The House | The House's Sealed Key | Ace's Powerbreaker Key | **Tariq 'Ace' Hassan** | Mechanic | **Powerbreaker** | Chance to double silicon gain (level proc) |
| 10 | Dead Zone | Abomination Core | Abomination Core's Sealed Key | Null's Soulbreaker Key | **Zara 'Null' Okonkwo** | Specialist | **Soulbreaker** | Chance to parry attack when hit (proc TBD) |
| 11 | Frontline | Warlord Chassis | Warlord Chassis's Sealed Key | Rex's Warbreaker Key | **Kane 'Rex' Hargrove** | Commander | **Warbreaker** | Chance for Combo/Speedbreaker to escalate to 4X (combo proc) |
| 12 | Dead Zone | *(Mapmaker's body)* | Mapmaker's Sealed Key | Mapmaker's Skybreaker Key | **Oren 'Mapmaker' Vasquez** | Navigator | **Skybreaker** | Adds speed stat to all breaker proc rates (passive) |

### Breaker Powers

Every breaker is a **proc** — a percentage chance to trigger each round (or per-hit, per-event). The proc rate scales off a specific player stat. This makes stat investment meaningful: levelling combo makes Combobreaker fire more often, levelling speed makes Speedbreaker fire more often, etc.

| Breaker | Proc Stat | Effect | Notes |
|---------|-----------|--------|-------|
| **Combobreaker** | Combo | Chance to deal **double damage** on hit | Your signature. The one the game is named after. |
| **Steelbreaker** | Mining | Chance to gain **double scrap** from a battle | Chunk's salvage instinct kicking in. |
| **Shieldbreaker** | Defence | Chance to **double defence** at the start of a round | Sarge's wall. Defence stat feeds its own proc. |
| **Visionbreaker** | Combo | Chance to **disappear and completely avoid an attack** | Ghost's vanishing act. Combo-driven evasion. |
| **Stonebreaker** | Mining | Chance to **add mining stat to asteroid stability** each round | Bolt reinforcing the rock. More mining = more stable ground. |
| **Strikebreaker** | Attack | Chance to **ignore enemy defence stat entirely** | Fang hits like the armour isn't there. |
| **Speedbreaker** | Speed | Chance to **attack twice** in one round | Wire's fast hands. Already exists, needs gating. |
| **Crushbreaker** | Attack | Chance for damage to **hit the entire enemy group** | Anvil's area denial. One swing, everything feels it. |
| **Painbreaker** | Regen | Chance to **regain HP equal to regen stat** at end of round | Frost patching you up between blows. |
| **Powerbreaker** | Level | Chance to **double silicon gain** from a kill | Ace squeezing more out of every wreck. Scales with level number. |
| **Soulbreaker** | ??? | Chance to trigger a **parry attack** when hit | Null's counter-play. Proc stat TBD. |
| **Warbreaker** | Combo | Chance for Combobreaker & Speedbreaker to **escalate to 4X** | Rex amplifying the squad. When this fires, doubles become quads. |
| **Skybreaker** | Speed *(passive)* | **Adds speed stat to ALL breaker proc rates** | Mapmaker's final gift. Not a proc itself — a global accelerator. |

**Design notes:**
- Most breakers are combat procs that roll each round or per-hit
- Steelbreaker and Stonebreaker are the mining/economy breakers (both keyed off Mining)
- Visionbreaker and Combobreaker both key off Combo — investing in combo gives both offensive and defensive payoff
- Warbreaker is a multiplier on existing procs, not a standalone effect
- Skybreaker is the only passive — it doesn't proc, it permanently boosts everything else
- Soulbreaker's proc stat is undecided — could be defence (parry = defensive), combo (counter-play), or a unique stat

### Pilot Identities

The squad only knew each other by callsigns in the field. Real names surface when the Decrypter cracks a sealed key — the pilot's full identity floods back as their soul is released. This is the moment the player learns who they just saved.

| Callsign | Full Name | Mech Model | Mech Description | Notes |
|----------|-----------|------------|------------------|-------|
| **Chunk** | Riley Kowalski | KV-8 Grinder | Heavyweight salvage frame with industrial claws and a compactor bay | Built like a salvage crane. Could strip a mech to parts blindfolded. |
| **Sarge** | Marcus Oduya | MK-IV Bulwark | Reinforced defensive chassis, built to absorb punishment and hold the line | Kept the squad alive longer than anyone had a right to expect. |
| **Ghost** | Yuki Tanaka | S-12 Wraith | Low-signature stealth frame with sensor-dampened hull plating | Never seen entering or leaving. Just already there. |
| **Bolt** | Petra Lindgren | DR-7 Prospector | Hardened mining rig with seismic drill arms and ore detection array | Could crack open a rock face and tell you what's inside by the sound. |
| **Fang** | Diego Reyes | AX-3 Ravager | Stripped-down assault frame, all engine and teeth | First one in, last one standing. Preferred it that way. |
| **Wire** | Jess Nakamura | SC-1 Flicker | Ultralight recon frame, fastest chassis in the fleet | Fastest hands in the unit. Rewired a mech mid-combat once — on a dare. |
| **Anvil** | Dmitri Volkov | HG-6 Devastator | Walking gun platform with triple-braced weapon mounts | If it had armour, he treated it as a suggestion. |
| **Frost** | Elise Calloway | MD-5 Lifeline | Field medical unit with cryo-stabilization pods and triage suite | Kept a cool head while putting people back together under fire. |
| **Ace** | Tariq Hassan | EN-9 Tinker | Mobile workshop frame with modular tool arms and fab printer | Could fix anything. Engines, guns, morale. |
| **Null** | Zara Okonkwo | EW-0 Phantom | Electronic warfare chassis with signal-black coating | Specialized in making problems disappear. Quietly. |
| **Rex** | Kane Hargrove | CM-1 Sovereign | Command-class mech with full tactical array and squad uplink | The CO. Made the calls nobody else wanted to make. |
| **Mapmaker** | Oren Vasquez | NV-X Pathfinder | Exoskeleton-class lightweight navigation frame with long-range scanner | Charted every route the squad ever ran. Planted your key before the end. |

## The Unknown Sealed Key

- Replaces "Old Key" as the starter story item
- Player starts with it sealed (already in storyItems on new game)
- It is NOT a boss drop — the Mapmaker planted it in you before the squad was scattered
- Must be taken to the Decrypter like any other sealed key
- Decrypts into "Your Combobreaker Key" and unlocks the Combobreaker power
- Early game hint: the Decrypter can process it right away, giving the player their first breaker

## The Mapmaker's Skybreaker Key

- Found sealed on the Mapmaker's body in the Dead Zone (existing lore: "He didn't make it.")
- NOT a boss drop — looted from the body, but still sealed like any other key
- Must be taken to the Decrypter to unlock Skybreaker
- The Mapmaker was the squad's Navigator — the one who planted your key in you
- Skybreaker effect: adds speed stat to all breaker proc rates (passive global accelerator)
- This is the 12th and final breaker, completing the squad — and the most powerful

## Code Changes Required

### Phase 1: Key renaming + Speedbreaker gating
- [ ] Rename starter "Old Key" to "Unknown Sealed Key" everywhere (game init, save/load, storyitems.js)
- [ ] Rename all 10 boss keyDrop values in boss_encounters.js to "[Boss]'s Sealed Key"
- [ ] Add 10 sealed key story items to storyitems.js with lore descriptions
- [ ] Rename all Protocol story items to "[Pilot]'s [Power]breaker Key" with squad member lore
- [ ] Update DECRYPTER_POWERUPS mapping in index.html (sealed key → decrypted key)
- [ ] Add Unknown Sealed Key → Your Combobreaker Key to DECRYPTER_POWERUPS
- [ ] Gate combobreaker proc in battleRound() behind owning Your Combobreaker Key
- [ ] Gate speedbreaker proc in battleRound() behind owning Wire's Speedbreaker Key
- [ ] Gate speedbreaker proc in evadeAmbush() behind owning Wire's Speedbreaker Key

### Phase 2: Implement all breaker powers (proc system)
- [ ] Combobreaker — chance to deal double damage (combo proc) — gate behind Unknown Key decryption
- [ ] Steelbreaker — chance to gain double scrap (mining proc)
- [ ] Shieldbreaker — chance to double defence at start of round (def proc)
- [ ] Visionbreaker — chance to disappear and avoid attack completely (combo proc)
- [ ] Stonebreaker — chance to add mining stat to asteroid stability each round (mining proc)
- [ ] Strikebreaker — chance to ignore enemy defence stat (attack proc)
- [ ] Speedbreaker — chance to attack twice (speed proc) — already exists, just needs gating
- [ ] Crushbreaker — chance for damage to hit entire enemy group (attack proc)
- [ ] Painbreaker — chance to regain HP equal to regen stat at end of round (regen proc)
- [ ] Powerbreaker — chance to double silicon gain (level number proc)
- [ ] Soulbreaker — chance to trigger parry attack when hit (proc stat TBD)
- [ ] Warbreaker — chance for Combobreaker & Speedbreaker to escalate to 4X (combo proc)
- [ ] Skybreaker — adds speed stat to all breaker proc rates (passive, not a proc itself)

### Phase 3: Lore updates
- [ ] Update boss encounter intro text / dialogue to hint at the trapped pilot
- [ ] Update Decrypter dialogue to reference releasing the pilot's soul
- [ ] Update Unknown Sealed Key description to hint at its true meaning
- [ ] Update sealed key story item descriptions to reference the corrupted mech
- [ ] Update decrypted key descriptions to reference the freed pilot personality
