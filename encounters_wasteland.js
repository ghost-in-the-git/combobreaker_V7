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
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
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
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
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
        itemSlot1: [],
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
        itemSlot1: [],
        itemSlot2: [],
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
        name: "The Mineral Trader",
        type: "shop",
        discoverable: true,
        description: "A woman with a portable smelter strapped to her mech offers to refine raw ore.",
        engageText: "She fires up the smelter. 'Got raw minerals? I'll turn them into something useful.'",
        discoveredDescription: "The Mineral Trader's smelter is already fired up, heat shimmering off the forge. She sees your mech and waves.",
        discoveredEngageText: "She grins as you pull up. 'Back again? Good. Forge is hot. Show me what you've got.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Moonshardite"],
        itemSlot2: ["Refined Nightpyre"],
        itemSlot3: ["Refined Obsidryl"]
    }
];
