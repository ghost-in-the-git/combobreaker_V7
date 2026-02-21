/**
 * INDUSTRIAL ZONE - ENCOUNTER CONFIGURATION
 *
 * Factory surplus outlets, union supply depots, and automated
 * vending rigs along the production lines.
 */

const ENCOUNTERS_INDUSTRIALZONE = [
    {
        name: "[COMMON] Factory Surplus Outlet",
        type: "shop",
        discoverable: true,
        description: "A factory loading dock is open. Surplus components from the latest production run are stacked high.",
        engageText: "A foreman waves you in. 'Overstock from the line. Corporate says sell it cheap, so here we are.'",
        discoveredDescription: "The factory loading dock is open, the same foreman leaning against a stack of crates. Surplus keeps piling up.",
        discoveredEngageText: "The foreman waves a clipboard. 'Another run off the line. You've got first pick this time, pilot.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["EVO1 Breaker Chassis [+70 HP]"],
        itemSlot2: ["Phase Shift Legs [+7 SPD]"],
        itemSlot3: ["Bulwark Arms [+7 DEF]"],
        itemSlot4: null
    },
    {
        name: "[COMMON] Union Supply Depot",
        type: "shop",
        discoverable: true,
        description: "A workers' union depot sits between the smokestacks. Mechanics share tools and trade parts.",
        engageText: "A union rep slides open a locker. 'We look out for our own. You fight the bots, you're one of us.'",
        discoveredDescription: "The workers' depot between the smokestacks is bustling. Your union card is on file now.",
        discoveredEngageText: "The union rep opens the locker. 'You're practically one of us now. New gear came in overnight.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Railgun [+7 ATK]"],
        itemSlot2: ["Neural Sequencer [+7 COMBO]"],
        itemSlot3: ["Quantum Learning Core [+7 Silicon]"],
        itemSlot4: null
    },
    {
        name: "[COMMON] Automated Vending Rig",
        type: "shop",
        discoverable: true,
        description: "A mobile vending rig trundles along the factory floor, dispensing parts from its rotating shelves.",
        engageText: "The rig stops and plays a jingle. 'INSERT CREDITS. RECEIVE PARTS. HAVE A PRODUCTIVE DAY.'",
        discoveredDescription: "The vending rig trundles along its usual route, jingle playing. It slows down when it detects your mech.",
        discoveredEngageText: "The rig plays a happy chime. 'LOYAL CUSTOMER DETECTED. DISPENSING PREMIUM INVENTORY.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Tectonic Shatterer [+7 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: null
    },
    {
        name: "[COMMON] Shift Supervisor's Stash",
        type: "shop",
        discoverable: true,
        description: "A shift supervisor flags you down near a locked storage unit. They glance around nervously.",
        engageText: "The supervisor unlocks the crate. 'These fell off the line. Officially they don't exist.'",
        discoveredDescription: "The shift supervisor is near the same locked storage unit, glancing around. They relax when they see it's you.",
        discoveredEngageText: "The supervisor unlocks the crate quickly. 'Got a fresh batch. Same deal — they don't exist, you weren't here.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["War Mind [+7 ALL]"],
        itemSlot2: ["Adaptive Hull Implant [+7 REGEN]"],
        itemSlot3: [],
        itemSlot4: null
    },
    {
        name: "The Mapmaker",
        type: "shop",
        discoverable: true,
        description: "A hooded figure stands motionless nearby, a rolled chart clutched in one hand.",
        engageText: "He says nothing. His eyes flick to you, then to the map.",
        discoveredDescription: "The Mapmaker is where you left him, hood drawn, charts spread across a makeshift table.",
        discoveredEngageText: "He glances up as you approach. A faint nod — he's already reaching for his charts.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Frozen Reach"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: null,
        dialogue: [
            {
                question: "The frontline is close.",
                response: "He stops charting. His hand is steady but his breathing isn't. 'Yes.'"
            }
        ]
    },
    {
        name: "Anvil",
        type: "shop",
        discoverable: true,
        description: "A broad-shouldered woman runs a repurposed assembly-line smelter. Robotic arms assist her with mechanical precision.",
        engageText: "She punches a sequence into the control panel. 'Industrial-grade refining. Consistent output, every time. Load the intake.'",
        discoveredDescription: "Anvil's assembly-line forge clanks rhythmically, robotic arms cycling through their routines. She monitors a bank of gauges.",
        discoveredEngageText: "She taps the intake chute. 'Line's warmed up. Drop your minerals and I'll run the batch.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Starvitrine"],
        itemSlot2: ["Refined Thorncrystal"],
        itemSlot3: ["Refined Umbracite"],
        itemSlot4: null
    },
    {
        name: "The Herald",
        type: "shop",
        discoverable: true,
        description: "A woman watches from a catwalk high above the factory floor. Below her, machines stamp and grind on endless loops. She hasn't blinked since you arrived.",
        engageText: "'The Smelter Titan thinks it's still the foreman.' She descends a ladder without looking at the rungs. 'It responds to alarms — safety violations, unauthorized access, production faults.' She holds up a beacon. 'This triggers all of them at once.'",
        discoveredDescription: "The Herald stands on her catwalk, silhouetted against the foundry glow. Sparks reflect in her unblinking eyes.",
        discoveredEngageText: "'The production line never stops. Neither does the Titan. Unless someone stops it.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Industrial Zone"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: null,
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It overrides every alarm on the factory floor simultaneously. The Titan interprets that as a catastrophic safety violation. It will come to enforce order.'"
            },
            {
                question: "Who are you?",
                response: "'Former line worker.' She flexes a hand — the fingers move wrong, slightly mechanical. 'I got out before the Titan decided I was part of the equipment.'"
            }
        ]
    }
];
