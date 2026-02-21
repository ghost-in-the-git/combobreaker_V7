/**
 * DEAD ZONE - ENCOUNTER CONFIGURATION
 *
 * Hazmat traders, contamination-proof drones, and desperate
 * scavengers working the most dangerous terrain.
 */

const ENCOUNTERS_DEADZONE = [
    {
        name: "[COMMON] Hazmat Trader",
        type: "shop",
        discoverable: true,
        description: "A sealed hazmat vehicle idles at the contamination perimeter. A trader in full gear waves you down.",
        engageText: "The trader's voice crackles through a respirator. 'Everything's been scrubbed. You can touch it. Probably.'",
        discoveredDescription: "The sealed hazmat vehicle idles at its usual spot on the contamination perimeter. The trader waves through the visor.",
        discoveredEngageText: "The trader's respirator crackles. 'Back again? Either you're brave or crazy. New stock, all scrubbed. Mostly.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["EVO4 Breaker Chassis [+100 HP]"],
        itemSlot2: ["Singularity Runners [+10 SPD]"],
        itemSlot3: ["Citadel Arms [+10 DEF]"]
    },
    {
        name: "[COMMON] Decontamination Drone",
        type: "shop",
        discoverable: true,
        description: "A roving decontamination drone has surplus supplies in its cargo bay. It beeps an offer.",
        engageText: "The drone projects a price list. 'DECON SURPLUS. CERTIFIED CLEAN. WARRANTY VOID IN DEAD ZONE.'",
        discoveredDescription: "The decontamination drone hovers at its usual patrol route, cargo bay restocked. It beeps in recognition.",
        discoveredEngageText: "The drone projects an updated list. 'RETURNING CUSTOMER. DECON SURPLUS REFRESHED. STAY SAFE OUT THERE.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Omega Rupture Cannon [+10 ATK]"],
        itemSlot2: ["Omega Protocol [+10 COMBO]"],
        itemSlot3: ["Omega Experience Engine [+10 Silicon]"]
    },
    {
        name: "[COMMON] Desperate Scavenger",
        type: "shop",
        discoverable: true,
        description: "A lone scavenger in a patched radiation suit flags you from behind a crumbling wall.",
        engageText: "The scavenger coughs. 'I need fuel more than parts. Take what you want, just get me out of here.'",
        discoveredDescription: "The scavenger is behind the same crumbling wall, radiation suit more patched than before. They still haven't left.",
        discoveredEngageText: "The scavenger manages a weak smile. 'You came back. Most don't. I found more stuff. Take what you need.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Quantum Excavator [+10 MINING]"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Sealed Bunker Terminal",
        type: "shop",
        discoverable: true,
        description: "A bunker hatch sits ajar. Inside, an emergency supply terminal still has power and stock.",
        engageText: "The terminal flickers on. 'EMERGENCY PROTOCOL. SUPPLIES AVAILABLE. BUNKER INTEGRITY: 12%.'",
        discoveredDescription: "The bunker hatch is still ajar, emergency lights still on. The supply terminal has restocked from deeper reserves.",
        discoveredEngageText: "The terminal flickers. 'RETURNING USER. DEEPER RESERVES UNLOCKED. BUNKER INTEGRITY: 9%.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Ghost Pilot [+10 ALL]"],
        itemSlot2: ["Omega Regeneration Core [+10 REGEN]"],
        itemSlot3: []
    },
    {
        name: "The Mapmaker",
        type: "shop",
        discoverable: true,
        description: "A hooded figure lies crumpled against a wall. The cloak is unmistakable. He isn't moving.",
        engageText: "The Mapmaker is dead. His charts are scattered around him, still clutched in cold hands. Two maps remain intact.",
        discoveredDescription: "The Mapmaker's body is where you found it. His hood has fallen back. He looks smaller than you remember.",
        discoveredEngageText: "You kneel beside him again. The maps are still here. He held onto them until the end.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Asteroid Belt"],
        itemSlot2: ["Map: Frontline"],
        itemSlot3: []
    },
    {
        name: "Ash",
        type: "shop",
        discoverable: true,
        description: "A gaunt figure in a sealed hazmat rig tends a smelter wrapped in lead sheeting. A Geiger counter clicks steadily nearby.",
        engageText: "A filtered voice crackles from the suit. 'Radiation makes most refiners sick. I was born in it. Hand over the ore.'",
        discoveredDescription: "Ash's lead-wrapped forge glows sickly green at the seams. The Geiger counter clicks faster as you approach, then steadies.",
        discoveredEngageText: "The hazmat visor turns toward you. 'Good. More ore for the fire. The rads make the bonds break cleaner — trust me.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Archive Shard"],
        itemSlot2: ["Refined Strata-Null"],
        itemSlot3: ["Refined Compound 33"]
    },
    {
        name: "The Herald",
        type: "shop",
        discoverable: true,
        description: "A woman in sealed hazmat gear crouches inside a bunker, the door barely ajar. Monitors behind her display corrupted data streams. She's been expecting you.",
        engageText: "'The Abomination Core isn't a machine.' She adjusts a dial on her suit. 'It's a process. Data in, destruction out. It materializes where corrupted signals converge.' She holds up a beacon. 'This broadcasts living code into the Dead Zone. It won't be able to resist.'",
        discoveredDescription: "The Herald waits in her bunker, hazmat visor reflecting the corrupted data on her screens. The air tastes like static.",
        discoveredEngageText: "'The signal's getting stronger. The Core is forming again. You know what to do.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Dead Zone"],
        itemSlot2: [],
        itemSlot3: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It mimics living code — the one thing the Dead Zone doesn't have. The Abomination Core will converge on the signal. It always does.'"
            },
            {
                question: "Who are you?",
                response: "'The last person who went in and came back out.' She taps her hazmat visor. 'I saw it form. I saw it take shape from nothing. I barely made it to this bunker.'"
            }
        ]
    }
];
