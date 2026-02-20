/**
 * ORBITAL STATION - ENCOUNTER CONFIGURATION
 *
 * Zero-g traders, station quartermasters, and smugglers
 * docked in the station's commercial ring.
 */

const ENCOUNTERS_ORBITALSTATION = [
    {
        name: "[COMMON] Station Quartermaster",
        type: "shop",
        discoverable: true,
        description: "A logistics officer flags your mech from the station's supply bay. Surplus military stock available.",
        engageText: "The quartermaster checks a manifest. 'Standard rates, standard gear. Nothing fancy, nothing broken.'",
        discoveredDescription: "The quartermaster's supply bay is open as usual. Your requisition code is already in the system.",
        discoveredEngageText: "The quartermaster checks the manifest. 'Ah, you're back. I pulled some new stock from the last shipment.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Zero-G Peddler",
        type: "shop",
        discoverable: true,
        description: "A small craft is magnetically clamped to the station hull. A trader waves from the airlock.",
        engageText: "The peddler floats out with a crate. 'Catch! Everything's weightless up here, including the prices.'",
        discoveredDescription: "The peddler's craft is clamped to its usual spot on the hull. A hand waves from the airlock as you approach.",
        discoveredEngageText: "The peddler floats out grinning. 'My favourite customer! I've been saving the good crates for you.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Docking Ring Vendor",
        type: "shop",
        discoverable: true,
        description: "An automated kiosk at the docking ring displays rotating inventory on a holographic shelf.",
        engageText: "The kiosk chimes. 'Welcome, docking permit verified. Browse at your leisure, pilot.'",
        discoveredDescription: "The docking ring kiosk lights up as your mech enters range. Your profile is already loaded.",
        discoveredEngageText: "The kiosk chimes warmly. 'Welcome back, pilot. Inventory has been refreshed since your last visit.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Void Smuggler",
        type: "shop",
        discoverable: true,
        description: "A blacked-out shuttle with scrambled transponders drifts alongside. A hailing frequency opens.",
        engageText: "A masked figure whispers. 'I move things between stations that stations don't want moved. Interested?'",
        discoveredDescription: "The blacked-out shuttle is parked in the station's shadow. The scrambled transponder pings your secure channel.",
        discoveredEngageText: "The masked figure tilts their head. 'You again. Good. I've got something special this run.'",
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
        itemSlot1: ["Map: Wasteland"],
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
        itemSlot1: ["Refined Jetspinel"],
        itemSlot2: ["Refined Kryptoglass"],
        itemSlot3: ["Refined Lumenore"]
    }
];
