# Boss Key / Decrypter System — Squad Roster Plan

## Concept

The 11 boss keys are silicon keys holding the souls of mech pilots from your squad. All squad members were part of a tactical frontline unit with different roles. Each pilot had a different type of mech — attack, defense, mining, medic, etc.

The keys represent these personalities that were corrupted when trapped in boss form but are now pure and released from their silicon coffin (the corrupted mech they were piloting). Decrypting the keys gives your mech a power that relates to the squad member's personality and their role in the squad.

Powers use the **"breaker"** suffix representing their role.

**Combobreaker** and **Speedbreaker** are currently always-on in the game. They need to be removed from default and locked behind their respective boss keys.

## Squad Roster

| # | Zone | Boss Mech | Key Item | Pilot Name | Squad Role | Power | Effect |
|---|------|-----------|----------|------------|------------|-------|--------|
| 1 | Scrapyard | T1 Destroyer | Old Key | **Chunk** | Scrap Refiner | **Scrapbreaker** | Bonus scrap from battle victories |
| 2 | Old Battlefield | Siege Remnant | Unmarked Keycard | **Sarge** | Squad Defender | **Shieldbreaker** | Defence pool partially regenerates each round |
| 3 | Downtown | Corporate Warlord | Corroded Access Fob | **Ghost** | Infiltrator | **Lootbreaker** | Guaranteed item drop from battles |
| 4 | Orbital Station | Station Core Guardian | Skeleton Key Module | **Bolt** | Engineer | **Minebreaker** | Bonus mining yield |
| 5 | Wasteland | Feral War Engine | Unmarked Crate Key | **Fang** | Assault | **Strikebreaker** | Bonus flat damage on attacks |
| 6 | Undercity | Hive Overlord | Orbital Docking Permit | **Wire** | Scout | **Speedbreaker** | Double-attack chance (currently default — needs locking) |
| 7 | Industrial Zone | Smelter Titan | Rusted Bulkhead Key | **Anvil** | Heavy Gunner | **Combobreaker** | Double-damage chance (currently default — needs locking) |
| 8 | Frozen Reach | Avalanche Colossus | Biometric Override Chip | **Frost** | Medic | **Lifebreaker** | Enhanced end-of-round regen |
| 9 | Neon Strip | The House | Freight Elevator Token | **Ace** | Pilot / Gambler | **Luckbreaker** | Bonus Silicon from kills |
| 10 | Dead Zone | Abomination Core | Warden's Master Fob | **Null** | Specialist | **Voidbreaker** | Chance to negate enemy attacks |
| 11 | Frontline | Warlord Chassis | Encrypted Passphrase Drive | **Rex** | Commander | **Warbreaker** | All breaker effects slightly boosted |

## Open Questions

1. **Combo/Speed placement** — Speedbreaker on Wire (Undercity, zone 6) and Combobreaker on Anvil (Industrial Zone, zone 7). These are mid-late game unlocks. Earlier or later?

2. **The 11th key** — Player starts with "Old Key" (Chunk's key). Does the Scrapyard boss still drop it too? (i.e. you already have it from the start, so Scrapbreaker could be the first power you decrypt?) Or should the starter Old Key be a different item?

3. **Power scaling** — Some effects are flat (Scrapbreaker = +X scrap), others are percentage-based (Speedbreaker = uses speed stat). Keep the existing combo/speed stat-based proc system, just gated behind owning the protocol? Or change them?

4. **Rex's Warbreaker** — "All breakers boosted" is the most complex to implement. Alternatives: flat stat boost to all stats, reduced fuel costs, or something simpler?

5. **Pilot names** — Do Chunk and the other names work, or specific names in mind for any of them?

## Implementation Steps

- [ ] Rename all Protocol story items to use breaker names and squad member lore
- [ ] Update DECRYPTER_POWERUPS mapping in index.html
- [ ] Update key story item descriptions to reference the pilot trapped inside
- [ ] Gate combobreaker proc behind owning "Combobreaker" protocol (Anvil's key)
- [ ] Gate speedbreaker proc behind owning "Speedbreaker" protocol (Wire's key)
- [ ] Implement Scrapbreaker effect (bonus scrap on victory)
- [ ] Implement Shieldbreaker effect (defence regen per round)
- [ ] Implement Lootbreaker effect (guaranteed item drops)
- [ ] Implement Minebreaker effect (bonus mining yield)
- [ ] Implement Strikebreaker effect (bonus flat damage)
- [ ] Implement Lifebreaker effect (enhanced regen)
- [ ] Implement Luckbreaker effect (bonus Silicon)
- [ ] Implement Voidbreaker effect (dodge enemy attacks)
- [ ] Implement Warbreaker effect (boost all breakers)
- [ ] Update boss encounter dialogue/lore to reference the trapped pilot
- [ ] Update Decrypter dialogue to reference releasing the pilot's soul
