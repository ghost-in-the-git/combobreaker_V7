/**
 * WASTELAND - ENCOUNTER CONFIGURATION
 *
 * Nomad traders, rad-shielded caravans, and scavenger camps
 * scattered across the scorched badlands.
 */

const ENCOUNTERS_WASTELAND = [
    {
        name: "[COMMON] Nomad Trader",
        type: "shop",
        discoverable: true,
        description: "A dust-caked nomad convoy rolls into sensor range. They flash trade beacons from atop their rigs.",
        engageText: "A weathered nomad tips their goggles. 'Water's scarce, parts aren't. What do you need, traveler?'",
        discoveredDescription: "The nomad convoy is camped at the same dune ridge, dust-caked rigs idling. They flash your signal back.",
        discoveredEngageText: "The nomad tips their goggles. 'You made it back. That means you're tough. Let me show you the good gear.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Old Breaker Chassis [+50 HP]"],
        itemSlot2: ["Reflex Actuators [+5 SPD]"],
        itemSlot3: ["Armored Claws [+5 DEF]"]
    },
    {
        name: "[COMMON] Rad-Shielded Caravan",
        type: "shop",
        discoverable: true,
        description: "A lead-lined hauler convoy creeps across the dunes. Their geiger counters click rhythmically.",
        engageText: "The caravan master opens a shielded crate. 'Clean parts, tested and decontaminated. Mostly.'",
        discoveredDescription: "The lead-lined haulers are parked in formation, geiger counters ticking steadily. They've kept a spot clear for you.",
        discoveredEngageText: "The caravan master nods. 'Ah, the careful one. Good news — fresh stock, fresh decontamination.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Plasma Rifle [+5 ATK]"],
        itemSlot2: ["Strike Sequencer [+5 COMBO]"],
        itemSlot3: ["Battlefield Recorder [+5 XP]"]
    },
    {
        name: "[COMMON] Scavenger Camp",
        type: "shop",
        discoverable: true,
        description: "A makeshift camp sits in the shadow of a wrecked dropship. Salvaged goods are laid out on tarps.",
        engageText: "A scavenger beckons from behind a pile of parts. 'Dug these up this morning. Still warm.'",
        discoveredDescription: "The scavenger camp under the wrecked dropship has grown since your last visit. New tarps, new salvage.",
        discoveredEngageText: "The scavenger grins through cracked goggles. 'Saved you first pick this time. The good stuff's in the back.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Sonic Fracture Drill [+5 MINING]"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Buried Supply Cache",
        type: "shop",
        discoverable: true,
        description: "Your sensors detect a pre-war supply cache buried beneath the sand. The seal is still intact.",
        engageText: "The cache hisses open. Inside, vacuum-sealed components gleam under your mech's floodlights.",
        discoveredDescription: "The supply cache site is marked on your nav now. The seal has been broken, but new compartments have been accessed.",
        discoveredEngageText: "The cache interface recognizes your access code. Deeper storage compartments unlock with a hiss.",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Ace Pilot [+5 ALL]"],
        itemSlot2: ["Bio-Repair Matrix [+5 REGEN]"],
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
        itemSlot1: ["Map: Undercity"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "Cinder",
        type: "shop",
        discoverable: true,
        description: "A sun-blackened woman hunches over a smelter built from salvaged rad-scrubbers. Heat mirages bend the air around her rig.",
        engageText: "She wipes ash from her goggles. 'Everything out here wants to kill you. My forge just wants your ore. Fair trade.'",
        discoveredDescription: "Cinder's rad-shielded smelter throbs with heat, a bright spot in the bleached wasteland. She waves you over with a tong.",
        discoveredEngageText: "She cracks her neck. 'Forge doesn't sleep and neither do I. Let's see what you dragged in.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Moonshardite"],
        itemSlot2: ["Refined Nightpyre"],
        itemSlot3: ["Refined Obsidryl"]
    }
];
