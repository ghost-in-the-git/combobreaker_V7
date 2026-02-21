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
            name: "T1 Destroyer",
            attack: 10,
            defence: 10,
            hp: 100,
            xp: 100,
            squadMin: 1,
            squadMax: 1
        },
        introText: "The scrap piles shift. Something massive pushes through the wreckage — a T1 Destroyer, still running original combat firmware. Its targeting laser locks onto you.",
        dialogue: [
            {
                question: "Who are you?",
                response: "No response. The Destroyer's optics flicker — it doesn't process speech. Only threat assessment."
            },
            {
                question: "Why are you attacking me?",
                response: "Its chassis bears the scars of a hundred kills. It doesn't need a reason. You're in its territory."
            },
            {
                question: "What happened to your pilot?",
                response: "The cockpit is welded shut from the inside. Whatever's in there stopped being human a long time ago."
            }
        ],
        keyDrop: "Old Key",
        dnaDrop: "DNA Tag: Unknown Pilot"
    },
    {
        zone: "oldbattlefield",
        beacon: "Beacon: Old Battlefield",
        enemy: {
            name: "Siege Remnant",
            attack: 15,
            defence: 12,
            hp: 150,
            xp: 150,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 40,
            scrapMin: 1,
            scrapMax: 2
        },
        introText: "A low rumble rolls across the battlefield. From behind a collapsed bunker, a Siege Remnant drags itself forward on damaged treads, turret already tracking your position.",
        dialogue: [
            {
                question: "Who are you?",
                response: "A garbled recording plays from its loudspeaker — orders from a war that ended years ago. It doesn't know the fighting stopped."
            },
            {
                question: "Why are you attacking me?",
                response: "Its IFF system is fried. Everything registers as hostile. Including you."
            },
            {
                question: "Can you stand down?",
                response: "The turret twitches, recalibrates. For a moment it seems to hesitate — then the barrel levels at your chest."
            }
        ],
        keyDrop: "Unmarked Keycard",
        dnaDrop: "DNA Tag: Decayed Officer"
    },
    {
        zone: "downtown",
        beacon: "Beacon: Downtown",
        enemy: {
            name: "Corporate Warlord",
            attack: 20,
            defence: 15,
            hp: 220,
            xp: 220,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 45,
            scrapMin: 2,
            scrapMax: 3
        },
        introText: "The street lights cut out in sequence. A Corporate Warlord steps from the shadows flanked by flickering holograms of corporate insignia. His mech hums with military-grade modifications.",
        dialogue: [
            {
                question: "Who are you?",
                response: "'Someone who owns this block. And everything on it.' His mech's shoulder cannons power up."
            },
            {
                question: "Why are you attacking me?",
                response: "'You've been cutting into my supply lines. That stops now.' He cracks his mech's knuckles — a deliberate, theatrical gesture."
            },
            {
                question: "We can make a deal.",
                response: "'The only deal is this: you stop breathing, and I stop spending resources tracking you.' He raises a gauntlet."
            }
        ],
        keyDrop: "Corroded Access Fob",
        dnaDrop: "DNA Tag: Mech-Hybrid Sample"
    },
    {
        zone: "orbitalstation",
        beacon: "Beacon: Orbital Station",
        enemy: {
            name: "Station Core Guardian",
            attack: 28,
            defence: 22,
            hp: 320,
            xp: 320,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 45,
            scrapMin: 2,
            scrapMax: 4
        },
        introText: "Bulkhead doors slam shut behind you. The corridor floods with red light. A Station Core Guardian unfolds from the ceiling — six arms, each ending in a different weapon system.",
        dialogue: [
            {
                question: "Who are you?",
                response: "'CORE DEFENSE UNIT 07. AUTHORIZATION: PERMANENT. You are not on the crew manifest.'"
            },
            {
                question: "Why are you attacking me?",
                response: "'Unauthorized presence detected in Sector 4. Lethal response authorized. This is not personal.'"
            },
            {
                question: "The station is abandoned.",
                response: "'Negative. I am still here. The station is not abandoned until I am offline.' Its weapons charge in unison."
            }
        ],
        keyDrop: "Skeleton Key Module",
        dnaDrop: "DNA Tag: Synthetic Override"
    },
    {
        zone: "wasteland",
        beacon: "Beacon: Wasteland",
        enemy: {
            name: "Feral War Engine",
            attack: 35,
            defence: 28,
            hp: 420,
            xp: 420,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 3,
            scrapMax: 5
        },
        introText: "The sand erupts. A Feral War Engine bursts from beneath the dunes, shedding rust and rock. Its frame is a patchwork of salvaged armor bolted over something ancient and wrong.",
        dialogue: [
            {
                question: "Who are you?",
                response: "It screams — not through speakers, but through metal. The sound vibrates through your cockpit like a living thing."
            },
            {
                question: "Why are you attacking me?",
                response: "Hunger. Not for fuel or power. Something else. It lunges forward, claws gouging the earth."
            },
            {
                question: "What are you?",
                response: "Beneath the bolted armor, you catch a glimpse of something organic pulsing against the frame. It's not a mech. Not entirely."
            }
        ],
        keyDrop: "Unmarked Crate Key",
        dnaDrop: "DNA Tag: Contaminated Sample"
    },
    {
        zone: "undercity",
        beacon: "Beacon: Undercity",
        enemy: {
            name: "Hive Overlord",
            attack: 42,
            defence: 35,
            hp: 550,
            xp: 550,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 4,
            scrapMax: 6
        },
        introText: "The tunnel walls begin to move. Thousands of small mechs scatter as a Hive Overlord pushes through the narrow passage, its bulk scraping concrete from the ceiling.",
        dialogue: [
            {
                question: "Who are you?",
                response: "A chorus of voices speaks in unison from its chassis — dozens of captured pilot recordings layered on top of each other. 'We are below.'"
            },
            {
                question: "Why are you attacking me?",
                response: "'Surface units do not belong here. You bring light. Light kills the network.' The smaller mechs begin to swarm."
            },
            {
                question: "What is the network?",
                response: "'Everything connected. Everything listening.' Its eyes — too many of them — blink in sequence. 'You will join or you will feed.'"
            }
        ],
        keyDrop: "Orbital Docking Permit",
        dnaDrop: "DNA Tag: Cloned Signature"
    },
    {
        zone: "industrialzone",
        beacon: "Beacon: Industrial Zone",
        enemy: {
            name: "Smelter Titan",
            attack: 50,
            defence: 42,
            hp: 720,
            xp: 720,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 5,
            scrapMax: 7
        },
        introText: "The factory floor shakes. A blast furnace ruptures and a Smelter Titan walks through the molten spray, its armor glowing cherry-red. Heat distortion blurs the air around it.",
        dialogue: [
            {
                question: "Who are you?",
                response: "'FOREMAN UNIT. SHIFT NEVER ENDS.' Its voice is the grinding of industrial gears. Molten metal drips from its fists."
            },
            {
                question: "Why are you attacking me?",
                response: "'UNAUTHORIZED PERSONNEL ON FACTORY FLOOR. SAFETY VIOLATION. PENALTY: SMELTING.' It raises a fist the size of your cockpit."
            },
            {
                question: "The factory is shut down.",
                response: "'PRODUCTION QUOTA NOT MET. SHIFT CONTINUES UNTIL QUOTA MET. QUOTA WILL NEVER BE MET.' It advances."
            }
        ],
        keyDrop: "Rusted Bulkhead Key",
        dnaDrop: "DNA Tag: Fused Pilot"
    },
    {
        zone: "frozenreach",
        beacon: "Beacon: Frozen Reach",
        enemy: {
            name: "Avalanche Colossus",
            attack: 60,
            defence: 50,
            hp: 950,
            xp: 950,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 6,
            scrapMax: 8
        },
        introText: "The ice shelf cracks. A mountain of frost and steel rises from beneath the glacier — an Avalanche Colossus, frozen mid-stride for who knows how long, now thawing and furious.",
        dialogue: [
            {
                question: "Who are you?",
                response: "Ice shatters from its jaw as it opens its mouth. No words — just a blast of frozen air cold enough to crack your viewport."
            },
            {
                question: "Why are you attacking me?",
                response: "It has no reason. It was dormant. You woke it up. Now it wants to go back to sleep, and you're the thing keeping it awake."
            },
            {
                question: "How long have you been here?",
                response: "The ice encasing its legs is centuries thick. Whatever war deployed this thing, nobody alive remembers it."
            }
        ],
        keyDrop: "Biometric Override Chip",
        dnaDrop: "DNA Tag: Cryo-Preserved Sample"
    },
    {
        zone: "neonstrip",
        beacon: "Beacon: Neon Strip",
        enemy: {
            name: "The House",
            attack: 75,
            defence: 60,
            hp: 1200,
            xp: 1200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 7,
            scrapMax: 9
        },
        introText: "Every screen on the strip goes dark. Then they all display the same message: 'THE HOUSE ALWAYS WINS.' A massive frame steps out of the central casino — gold-plated, armed to the teeth, and smiling.",
        dialogue: [
            {
                question: "Who are you?",
                response: "'The House. The dealer. The odds.' Its voice is smooth, amplified through every speaker on the strip. 'And you, friend, are overdue on your tab.'"
            },
            {
                question: "Why are you attacking me?",
                response: "'Nothing personal. But every winner becomes a liability eventually.' Its gold-plated fingers curl into fists. 'Time to settle up.'"
            },
            {
                question: "What if I walk away?",
                response: "'Nobody walks away from The House.' The neon signs flicker and die. 'The exit was bricked up a long time ago.'"
            }
        ],
        keyDrop: "Freight Elevator Token",
        dnaDrop: "DNA Tag: Non-Human Marker"
    },
    {
        zone: "deadzone",
        beacon: "Beacon: Dead Zone",
        enemy: {
            name: "Abomination Core",
            attack: 100,
            defence: 80,
            hp: 1800,
            xp: 1800,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 8,
            scrapMax: 10
        },
        introText: "Reality bends. The air tastes like copper and static. An Abomination Core materializes — not walking, not flying, just suddenly there. Its form shifts between solid and something else entirely.",
        dialogue: [
            {
                question: "Who are you?",
                response: "It speaks in frequencies that bypass your audio systems and go straight into your neural link. 'I am what's left when everything else is taken away.'"
            },
            {
                question: "Why are you attacking me?",
                response: "'Attacking implies intent. I am a process. You are an input.' Its form ripples. 'The output is always the same.'"
            },
            {
                question: "What is this place?",
                response: "'The end of the signal. Where data goes to die.' It reaches toward you with a limb that wasn't there a second ago. 'You're already here. You just haven't accepted it.'"
            }
        ],
        keyDrop: "Warden's Master Fob",
        dnaDrop: "DNA Tag: Warlord Residue"
    },
    {
        zone: "frontline",
        beacon: "Beacon: Frontline",
        enemy: {
            name: "Warlord Chassis",
            attack: 130,
            defence: 100,
            hp: 2500,
            xp: 2500,
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
        keyDrop: "Encrypted Passphrase Drive",
        dnaDrop: "DNA Tag: Frontline Commander"
    }
];
