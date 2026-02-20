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
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
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
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
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
        itemSlot1: [],
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
        itemSlot1: ["Map: Downtown"],
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
        itemSlot1: ["Refined Duskquartz"],
        itemSlot2: ["Refined Emberlith"],
        itemSlot3: ["Refined Frostveil"]
    }
];
