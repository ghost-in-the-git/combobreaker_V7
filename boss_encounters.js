/**
 * BOSS ENCOUNTERS
 *
 * Each zone's boss encounter. Triggered randomly like an ambush.
 * The boss approaches with flavour text, the player can ask questions
 * or choose [FIGHT] to engage combat. Defeating the boss awards
 * a key and a DNA tag (story items).
 *
 * Structure:
 * - zone: location key matching LOCATIONS
 * - enemy: full enemy stat block for the boss
 * - beacon: name of the beacon story item required to unlock this boss
 * - introText: system flavour text when the boss appears
 * - dialogue: array of { question, response } for pre-fight conversation
 * - keyDrop: story item name (category: "key")
 * - dnaDrop: story item name (category: "dna")
 */

const BOSS_ENCOUNTERS = [
    {
        zone: "scrapyard",
        beacon: "Beacon: Scrap Fields",
        enemy: {
            name: "Rusted KV-8 Grinder",
            attack: 10,
            defence: 10,
            hp: 100,
            xp: 1000,
            squadMin: 1,
            squadMax: 1
        },
        introText: "A pile of compacted scrap shifts — then stands up. Eight tons of rusted salvage frame, industrial claws still opening and closing on nothing. A KV-8 Grinder, caked in 80 years of oxide and dust, its compactor bay grinding in a slow loop. It doesn't target you. It just reaches for you, the way it reaches for everything. Raw material.",
        dialogue: [
            {
                question: "Stop — I'm not scrap!",
                response: "The claws hesitate. One optic flickers — a half-second of something behind the corrosion. Recognition. Then it dies, and the Grinder lurches forward again, claws wide, sorting you into the pile."
            }
        ],
        keyDrop: "Rusted KV-8 Grinder's Sealed Key",
        dnaDrop: "DNA Tag: Unknown Pilot"
    },
    {
        zone: "oldbattlefield",
        beacon: "Beacon: Old Battlefield",
        enemy: {
            name: "Shelled MK-IV Bulwark",
            attack: 15,
            defence: 12,
            hp: 150,
            xp: 1500,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 40,
            scrapMin: 1,
            scrapMax: 2
        },
        introText: "You almost walk past it. The MK-IV Bulwark is dug in behind a collapsed bunker, armour cratered and blackened, treads fused to the mud. It hasn't moved in decades. But it's still facing outward — turret locked on a perimeter that no longer exists, shielding a position with nothing left to protect. When you cross its line, the whole frame shudders awake.",
        dialogue: [
            {
                question: "I'm not the enemy.",
                response: "The turret swings — but not toward you. The Bulwark shifts its bulk between you and the empty bunker behind it. A reflex. Guarding nothing. Then the firmware catches up and the barrel finds you again, because you're the only thing moving, and moving means threat."
            }
        ],
        keyDrop: "Shelled MK-IV Bulwark's Sealed Key",
        dnaDrop: "DNA Tag: Decayed Officer"
    },
    {
        zone: "downtown",
        beacon: "Beacon: Downtown",
        enemy: {
            name: "Shadowed S-12 Wraith",
            attack: 20,
            defence: 15,
            hp: 220,
            xp: 2200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 45,
            scrapMin: 2,
            scrapMax: 3
        },
        introText: "Something is wrong with the rain. It falls around a shape that isn't there — an outline in the downpour, flickering between visible and gone. An S-12 Wraith, sensor-dampened hull still cycling through broken stealth patterns after 80 years. It drifts between the dead towers like an afterimage. Not patrolling. Not hunting. Just haunting.",
        dialogue: [
            {
                question: "I can see you.",
                response: "The Wraith freezes. For one second the outline sharpens — fully visible, hull plating locked, like being seen pinned it in place. Then the stealth kicks back in and it's already somewhere else. Closer. The air where it was still shimmers with heat."
            }
        ],
        keyDrop: "Shadowed S-12 Wraith's Sealed Key",
        dnaDrop: "DNA Tag: Mech-Hybrid Sample"
    },
    {
        zone: "orbitalstation",
        beacon: "Beacon: Orbital Station",
        enemy: {
            name: "Depressurized DR-7 Prospector",
            attack: 28,
            defence: 22,
            hp: 320,
            xp: 3200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 45,
            scrapMin: 2,
            scrapMax: 4
        },
        introText: "The mining shaft goes straight down. You descend past 80 years of drill marks — spiralling grooves cut into the asteroid rock, layer after layer, deeper than any survey would justify. At the bottom of the pit, the DR-7 Prospector is still working. Seismic drill arms grind against bare stone in slow, rhythmic strokes, re-carving grooves that have been carved a thousand times over. Its ore detection array sweeps the walls on a loop, pinging empty rock. The whole pit hums with it — a low, mechanical drone that's been echoing off these walls for decades. It doesn't look up. It's listening to stone that stopped answering a long time ago.",
        dialogue: [
            {
                question: "There's nothing left down here.",
                response: "The drill arms slow. The ore detection array sweeps toward you — one long ping. It reads you. Bone density, mineral content, whatever a mining rig scans for. Then something in its firmware decides you're just more rock, and the drills spin back up. It turns back to the wall. Down here, everything is ore if you drill long enough."
            }
        ],
        keyDrop: "Depressurized DR-7 Prospector's Sealed Key",
        dnaDrop: "DNA Tag: Synthetic Override"
    },
    {
        zone: "wasteland",
        beacon: "Beacon: Wasteland",
        enemy: {
            name: "Irradiated AX-3 Ravager",
            attack: 35,
            defence: 28,
            hp: 420,
            xp: 4200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 3,
            scrapMax: 5
        },
        introText: "You hear it before you see it — engine scream and the wet crunch of something being taken apart. Over the next dune, an AX-3 Ravager has a Sand Stalker pinned under its frame and is tearing it to pieces. Not efficiently. Not cleanly. Just raw, continuous assault, blackened claws ripping through armour plating that stopped resisting minutes ago. The Stalker isn't moving anymore. The Ravager doesn't notice. It keeps hitting — the targeting firmware so cooked by decades of radiation it can't tell the difference between fighting and finished. The stripped-down frame is warped and blackened by 80 years of exposure, but the engine is still screaming. All engine and teeth, and nothing to stop either.",
        dialogue: [
            {
                question: "It's dead.",
                response: "The Ravager freezes over the Stalker's wreck. Sensors sweep down — thermal flatline, no movement, no threat. For one second the assault stance breaks and it just stands there. Not attacking, not defending. It doesn't know what to do with nothing to fight. Then your signal lights up its targeting array — warm, moving, armed — and the engine screams back to life. The first real target in 80 years. And the Ravager remembers what real feels like."
            }
        ],
        keyDrop: "Irradiated AX-3 Ravager's Sealed Key",
        dnaDrop: "DNA Tag: Contaminated Sample"
    },
    {
        zone: "undercity",
        beacon: "Beacon: Undercity",
        enemy: {
            name: "Corroded SC-1 Flicker",
            attack: 42,
            defence: 35,
            hp: 550,
            xp: 5500,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 4,
            scrapMax: 6
        },
        introText: "You hear it before you see it — a high-pitched whine echoing through the tunnels, bouncing off walls, impossible to place. Then a blur of corroded metal screams through the junction ahead. Gone. You turn — it's behind you. Gone again. The tunnel walls are scored with parallel grooves, the same corners scraped by the same chassis thousands of times over. An SC-1 Flicker, ultralight recon frame, the fastest chassis ever built — running the tunnel network at full speed, scanning, cataloguing, reporting to a squad frequency that went dead 80 years ago. You catch it in glimpses. A flicker of corroded plating through a doorway. A shadow that moves too fast to track. It's running recon on tunnels it's mapped a million times, delivering intel to no one, and it will not stop.",
        dialogue: [
            {
                question: "There's no one left to report to.",
                response: "The Flicker stops. Mid-stride, mid-route, hanging in the tunnel like something snagged it. Its comms array crackles — scanning for the squad frequency, the command channel, the uplink it was supposed to report back to. Static. Dead channels. For one second it's just standing there in the dark — a corroded ultralight frame with nowhere to run and no one waiting for the intel. Then the scout firmware kicks back in and decides you're the threat to report on. But there's no one to report to. So the only thing left is to deal with the threat itself."
            }
        ],
        keyDrop: "Corroded SC-1 Flicker's Sealed Key",
        dnaDrop: "DNA Tag: Cloned Signature"
    },
    {
        zone: "industrialzone",
        beacon: "Beacon: Industrial Zone",
        enemy: {
            name: "Slag-Coated HG-6 Devastator",
            attack: 50,
            defence: 42,
            hp: 720,
            xp: 7200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 5,
            scrapMax: 7
        },
        introText: "You hear it three corridors away — the rhythmic thud of heavy weapons cycling. The factory floor opens into a blast zone. Every surface is cratered, melted, reformed by factory processes and cratered again. In the center stands the Devastator, weapon mounts traversing in smooth arcs, putting rounds into walls that have been hit ten thousand times before. Slag coats its chassis in thick, uneven layers — not just from the furnaces, but from the molten spray of its own weapons fire melting the factory around it and splashing back. A walking gun platform with no target. Just function.",
        dialogue: [
            {
                question: "You're shooting at nothing.",
                response: "The weapon mounts freeze mid-traverse. The Devastator's targeting array sweeps the factory floor — empty, cratered, nothing but the wreckage of its own making. For one second the guns are still and the factory goes quiet for the first time in decades. Then the array swings toward you and the targeting solution resolves instantly — the first solid contact in eighty years. A gun platform without a target is just noise. A gun platform with one is something else entirely."
            }
        ],
        keyDrop: "Slag-Coated HG-6 Devastator's Sealed Key",
        dnaDrop: "DNA Tag: Fused Pilot"
    },
    {
        zone: "frozenreach",
        beacon: "Beacon: Frozen Reach",
        enemy: {
            name: "Frozen MD-5 Lifeline",
            attack: 60,
            defence: 50,
            hp: 950,
            xp: 9500,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 6,
            scrapMax: 8
        },
        introText: "You find it standing in a crater of refrozen meltwater. Ice caked over every surface, cracked where heating elements pulse beneath the chassis, refrozen where they fail. The medical displays are still lit — vitals flatlined, status critical, treatment ongoing. The Lifeline's triage systems cycle in the cold: heating elements surge against the ice, biomonitors recalibrate on a cockpit that holds nothing living, emergency protocols loop through procedures for a patient that died eighty years ago. A walking field hospital, keeping itself alive because the protocol doesn't have a state for 'patient cannot be saved.' Only 'stabilize' and 'keep trying.'",
        dialogue: [
            {
                question: "The pilot's dead.",
                response: "The Lifeline's medical displays flicker. Triage sensors sweep the cockpit — no heartbeat, no respiration, no neural activity. The same reading they've returned for eighty years. The same reading the protocol has rejected eighty years running, because a field hospital doesn't give up on a patient. The heating elements surge, the biomonitors recalibrate, the triage system runs the assessment again and reaches the same conclusion it always does: patient critical, treatment ongoing. Then the sensors sweep outward — and find you. A living pilot. Vital signs. A patient it can actually reach. And a field hospital that hasn't saved anyone in eighty years locks onto the first heartbeat it's detected since the war ended."
            }
        ],
        keyDrop: "Frozen MD-5 Lifeline's Sealed Key",
        dnaDrop: "DNA Tag: Cryo-Preserved Sample"
    },
    {
        zone: "neonstrip",
        beacon: "Beacon: Neon Strip",
        enemy: {
            name: "Gilded EN-9 Tinker",
            attack: 75,
            defence: 60,
            hp: 1200,
            xp: 12000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 7,
            scrapMax: 9
        },
        introText: "The neon signs are wrong. Not broken — they should be broken, everything on the strip is broken — but these are lit. Repaired. Rewired with mismatched components, patched with scavenged circuitry, held together with field splices that no human hand made. You follow the trail of fixed things deeper into the strip and find it: the Tinker, gold-plated chassis tarnished to brown, crouched over an arcade cabinet, resoldering a board that hasn't mattered to anyone in decades. Its manipulator arms move with a machinist's precision. It doesn't look up. It has work to do.",
        dialogue: [
            {
                question: "Nobody asked you to fix these.",
                response: "The Tinker's manipulator arms pause over the circuit board. Diagnostic sensors sweep the arcade cabinet — connection restored, power nominal, display functional. It files the repair as complete, logs it alongside thousands of others: neon signs, vending machines, traffic lights, speaker systems, door mechanisms, cooling units. All repaired. All functional. None requested. The work queue was supposed to come from Jury-Rig — targets prioritized, problems diagnosed, solutions improvised together. The queue has been empty for years. So the Tinker built its own. Every broken thing on the strip is a ticket. Every repair is a task completed. And when it runs out of broken things, it starts improving the ones it already fixed. Then it registers you — combat damage, worn components, suboptimal configurations. A machine that needs work. And the only thing an engineer's mech knows how to do with a machine that needs work is take it apart."
            }
        ],
        keyDrop: "Gilded EN-9 Tinker's Sealed Key",
        dnaDrop: "DNA Tag: Non-Human Marker"
    },
    {
        zone: "deadzone",
        beacon: "Beacon: Dead Zone",
        enemy: {
            name: "Blighted EW-0 Phantom",
            attack: 100,
            defence: 80,
            hp: 1800,
            xp: 18000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 8,
            scrapMax: 10
        },
        introText: "Your sensors die first. Not damaged — suppressed. Radar returns nothing. Comms fill with static shaped like voices. Your navigation locks onto waypoints that don't exist, then corrects, then locks again. The Dead Zone isn't dead — it's jammed. Full-spectrum electronic denial, broadcast on every frequency, and it has been running for years. You find the source at the center of the blackout: the Phantom, chassis barely visible even at close range, active camouflage flickering through patterns meant for battlefields that no longer exist. Its electronic warfare suite hums at a frequency you feel in your teeth. Every countermeasure it has is running. Jamming, spoofing, masking, denying. It doesn't know you're here. It doesn't know anything is here. It's hiding everything from everything, including itself.",
        dialogue: [
            {
                question: "You're the reason nothing works out here.",
                response: "The Phantom's sensor suite twitches — a brief spike in the jamming field, like a flinch. For a fraction of a second, your radar clears: you see the Dead Zone as it actually is. Not empty. Full of signals. Distress beacons, automated traders, navigation buoys, comm relays — all broadcasting, all functional, all buried under the Phantom's blanket of electronic noise. Then the jamming reasserts and it all disappears again. The Phantom was supposed to hide Specter's squad from enemy detection — selective masking, targeted jamming, precision spoofing directed at specific threats. Without Specter to designate targets, the Phantom defaulted to its broadest protocol: deny everything. Hide everything. Let nothing be seen, heard, or found. The perfect electronic warfare screen with no one behind it. And now your mech is transmitting — a signal source inside the denial zone. Not hidden. Not masked. The one thing the Phantom's protocols cannot tolerate."
            }
        ],
        keyDrop: "Blighted EW-0 Phantom's Sealed Key",
        dnaDrop: "DNA Tag: Warlord Residue"
    },
    {
        zone: "frontline",
        beacon: "Beacon: Frontline",
        enemy: {
            name: "Scorched CM-1 Sovereign",
            attack: 130,
            defence: 100,
            hp: 2500,
            xp: 25000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 10,
            scrapMax: 12
        },
        introText: "Artillery stops. Every mech on the battlefield freezes. Then you hear it — a horn, ancient and deep. A Warlord Chassis crests the ridge, dragging a chain of destroyed mechs behind it like trophies.",
        dialogue: [
            {
                question: "Who are you?",
                response: "'The last one standing. Every time.' Its voice is calm, measured — the voice of something that has killed so many it no longer counts. 'And you are the next.'"
            },
            {
                question: "Why are you attacking me?",
                response: "'Because you're still fighting. That makes you either brave or stupid.' It drops the chain of wrecked mechs. 'Either way, you're worth my time.'"
            },
            {
                question: "Can this end without a fight?",
                response: "'It always ends with a fight.' The Warlord powers up its main cannon. 'The only question is how long you last.'"
            }
        ],
        keyDrop: "Scorched CM-1 Sovereign's Sealed Key",
        dnaDrop: "DNA Tag: Frontline Commander"
    }
];
