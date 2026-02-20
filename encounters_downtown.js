/**
 * DOWNTOWN - ENCOUNTER CONFIGURATION
 *
 * Black market traders, smugglers, and shady dealers operating
 * in the neon-lit back alleys.
 */

const ENCOUNTERS_DOWNTOWN = [
    {
        name: "[COMMON] Black Market Trader",
        type: "shop",
        discoverable: true,
        description: "An unmarked vessel with no IFF signature is broadcasting on an encrypted channel. Black market goods available.",
        engageText: "A hooded figure appears on screen. 'No names, no questions - Just silicon for parts.'",
        discoveredDescription: "The unmarked vessel is in its usual shadow, running silent. The encrypted channel is already open for you.",
        discoveredEngageText: "The hooded figure nods. 'You know the rules. Same deal as before. Browse and go.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Smuggler's Docking Bay",
        type: "shop",
        discoverable: true,
        description: "A hidden dock ring pings your nav—smugglers offering 'off-ledger' upgrades with questionable warranties.",
        engageText: "A voice laughs over comms. 'You want power? You pay the risk. Don't ask where it came from.'",
        discoveredDescription: "The hidden dock ring pulses on your nav — you know the frequency now. The smugglers have fresh stock.",
        discoveredEngageText: "The voice over comms is almost friendly. 'Repeat customer! I like that. Come see what I've got.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Scrap Dealer",
        type: "shop",
        discoverable: true,
        description: "A Scrap Dealer's cargo ship is passing through. Their comms crackle with offers of rare components.",
        engageText: "The Scrap Dealer eyes your mech approvingly. 'Got some quality salvage here, pilot. Take a look.'",
        discoveredDescription: "The Scrap Dealer's cargo ship is docked in the alley, running lights dim. They're expecting you.",
        discoveredEngageText: "The Dealer taps the counter. 'Right on time. Got a new haul from the upper levels. Take a look.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Neon Bazaar Kiosk",
        type: "shop",
        discoverable: true,
        description: "A street-level kiosk flickers to life as your mech approaches. Holographic menus display available upgrades.",
        engageText: "A synthetic shopkeeper bows. 'Welcome to the Bazaar. Everything here is guaranteed. For at least ten minutes.'",
        discoveredDescription: "The Bazaar kiosk springs to life as your mech's signal hits the sensors. It remembers your last purchase.",
        discoveredEngageText: "The synthetic shopkeeper bows deeper this time. 'Welcome back, valued customer. New inventory loaded.'",
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
        itemSlot1: ["Map: Orbital Station"],
        itemSlot2: ["Map: The Forge"],
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
        itemSlot1: ["Refined Gloomstone"],
        itemSlot2: ["Refined Hexsilica"],
        itemSlot3: ["Refined Iridionite"]
    }
];
