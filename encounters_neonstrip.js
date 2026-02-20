/**
 * NEON STRIP - ENCOUNTER CONFIGURATION
 *
 * Back-alley dealers, casino prize counters, and syndicate
 * fences working the entertainment district.
 */

const ENCOUNTERS_NEONSTRIP = [
    {
        name: "[COMMON] Back-Alley Dealer",
        type: "shop",
        discoverable: true,
        description: "A dealer leans against a flickering holographic ad, a briefcase of components at their feet.",
        engageText: "The dealer flips open the case. 'Top shelf stuff. Fell off a corp transport. You didn't hear that.'",
        discoveredDescription: "The dealer is leaning against the same flickering ad, new briefcase at their feet. They nod as you approach.",
        discoveredEngageText: "The dealer grins. 'Word gets around. You're a good customer. Check out the new inventory.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Casino Prize Counter",
        type: "shop",
        discoverable: true,
        description: "A casino's prize redemption counter has mech parts on display between the stuffed animals.",
        engageText: "The attendant grins. 'You don't need tickets, just credits. Way easier than winning, trust me.'",
        discoveredDescription: "The casino prize counter is lit up and busy. The attendant spots your mech and waves you to the front.",
        discoveredEngageText: "The attendant winks. 'VIP treatment for repeat customers. Got some new prizes in the back.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Syndicate Fence",
        type: "shop",
        discoverable: true,
        description: "A syndicate contact pings your secure channel. They have goods that need to move fast.",
        engageText: "The fence slides a datapad across. 'No receipts, no records. Pick what you need and walk.'",
        discoveredDescription: "The syndicate contact's secure channel is pre-loaded in your comms now. The signal comes through clean.",
        discoveredEngageText: "The fence slides the datapad across. 'You're trusted now. That means better stock. Same rules apply.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] High-Roller Lounge",
        type: "shop",
        discoverable: true,
        description: "A VIP lounge door opens as your mech approaches. Inside, premium parts are displayed on velvet.",
        engageText: "A host bows slightly. 'Only the finest for our distinguished guests. Credits speak louder than names.'",
        discoveredDescription: "The VIP lounge door opens automatically as your mech approaches. They know you now.",
        discoveredEngageText: "The host smiles. 'Welcome back, distinguished guest. We've acquired some exceptional pieces since your last visit.'",
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
        itemSlot1: ["Map: Dead Zone"],
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
        itemSlot1: ["Refined Yonderite"],
        itemSlot2: ["Refined Zephyrsalt"],
        itemSlot3: ["Refined Isotope Lace"]
    }
];
