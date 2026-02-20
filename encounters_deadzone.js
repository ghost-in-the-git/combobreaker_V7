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
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
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
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
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
        itemSlot1: [],
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
        itemSlot1: ["Map: Asteroid Belt"],
        itemSlot2: [],
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
    }
];
