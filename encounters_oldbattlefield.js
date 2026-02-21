/**
 * OLD BATTLEFIELD - ENCOUNTER CONFIGURATION
 *
 * Military supply caches, salvage auctions, and pilgrim caravans
 * moving through the scarred terrain.
 */

const ENCOUNTERS_OLDBATTLEFIELD = [
    {
        name: "[COMMON] Salvage Auction Pod",
        type: "shop",
        discoverable: true,
        description: "A drifting auction pod broadcasts rotating lots of recovered mech gear—first come, first served.",
        engageText: "A synthetic voice lists items at high speed. A timer starts. 'BID CONFIRMED' flashes across your HUD.",
        discoveredDescription: "The auction pod drifts in its usual orbit, broadcasting lot numbers. Your bidding credentials are already cached.",
        discoveredEngageText: "'RETURNING BIDDER DETECTED' flashes across your HUD. The auction feed jumps straight to premium lots.",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Standard Chassis [+20 HP]"],
        itemSlot2: ["Enhanced Servos [+2 SPD]"],
        itemSlot3: ["Shield Bracers [+2 DEF]"]
    },
    {
        name: "[COMMON] Corporate Supply Cache",
        type: "shop",
        discoverable: true,
        description: "A corporate resupply buoy is active in this sector. Access requires credits and a clean transaction.",
        engageText: "The kiosk chirps politely. 'Welcome, valued contractor. Please select from approved inventory.'",
        discoveredDescription: "The corporate resupply buoy blinks at the same coordinates. Your transaction history is already on file.",
        discoveredEngageText: "The kiosk chirps. 'Welcome back, valued contractor. Your clearance level has been noted.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Energy Blade [+2 ATK]"],
        itemSlot2: ["Combo Link Chip [+2 COMBO]"],
        itemSlot3: ["Enhanced Data Processor [+2 Silicon]"]
    },
    {
        name: "[COMMON] Pilgrim Parts Caravan",
        type: "shop",
        discoverable: true,
        description: "A convoy of civilian haulers moves in formation, offering parts in exchange for fuel, ammo, or coin.",
        engageText: "A tired caravan captain nods. 'We don't fight, we survive. Trade fair and we'll both make it home.'",
        discoveredDescription: "The pilgrim caravan has circled back to familiar ground. The captain recognizes your mech on approach.",
        discoveredEngageText: "The caravan captain smiles. 'The honest one returns. I set aside some things for you.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Pneumatic Drill [+2 MINING]"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Experimental R&D Vendor",
        type: "shop",
        discoverable: true,
        description: "A research craft requests a brief rendezvous. Prototype components available for combat testing.",
        engageText: "A scientist peers at your mech telemetry. 'Sign the waiver. If it glows, that's normal. Mostly.'",
        discoveredDescription: "The research craft is parked at the same coordinates, instruments whirring. They've been expecting test data.",
        discoveredEngageText: "The scientist's eyes light up. 'You survived! Excellent. I have new prototypes. Same waiver applies.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Trained Pilot [+2 ALL]"],
        itemSlot2: ["Basic Nano Injector [+2 REGEN]"],
        itemSlot3: []
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
        itemSlot1: ["Map: Downtown"],
        itemSlot2: ["Map: The Forge"],
        itemSlot3: [],
        dialogue: [
            {
                question: "You were here before me.",
                response: "'Long before.' He doesn't look up."
            },
            {
                question: "What do you get out of this?",
                response: "A long silence. He folds a chart carefully along its creases. 'I'll know where I am.'"
            }
        ]
    },
    {
        name: "Crucible",
        type: "shop",
        discoverable: true,
        description: "A scarred woman operates a field forge from inside a bombed-out tank hull. Shell casings litter the ground around her.",
        engageText: "She racks a glowing ingot. 'War's over, but the forge isn't. You need refining, I'm your only option out here.'",
        discoveredDescription: "Crucible's tank-hull forge belches black smoke between the craters. She's already pulling on her blast gloves as you approach.",
        discoveredEngageText: "She nods once. 'Forge is primed. Let's not waste daylight — things still patrol at night.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Duskquartz"],
        itemSlot2: ["Refined Emberlith"],
        itemSlot3: ["Refined Frostveil"]
    },
    {
        name: "The Herald",
        type: "shop",
        discoverable: true,
        description: "A cloaked figure sits atop a burnt-out tank, scanning the horizon with a cracked monocular. A signal device blinks on her belt.",
        engageText: "'The battlefield remembers its dead.' She climbs down slowly. 'But there's one that never died. It's still out there, running on orders from a war that ended years ago.' She produces a beacon. 'This will bring it to you.'",
        discoveredDescription: "The Herald watches from her tank perch, cloak whipping in the wind. She's already reaching for the beacon before you arrive.",
        discoveredEngageText: "She drops down. 'The Remnant is patient. But patience has limits.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Old Battlefield"],
        itemSlot2: [],
        itemSlot3: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts on the old military frequencies. The Siege Remnant still listens to those channels. It will come.'"
            },
            {
                question: "Who are you?",
                response: "'Someone who's seen what happens when these things go unchallenged.' She looks out at the battlefield. 'I'd rather someone else handled it.'"
            }
        ]
    }
];
