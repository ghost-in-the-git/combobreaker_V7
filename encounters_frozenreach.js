/**
 * FROZEN REACH - ENCOUNTER CONFIGURATION
 *
 * Outpost traders, ice-road truckers, and research station
 * surplus dealers braving the arctic wastes.
 */

const ENCOUNTERS_FROZENREACH = [
    {
        name: "[COMMON] Outpost Trader",
        type: "shop",
        discoverable: true,
        description: "A heated outpost glows against the snowfield. A trader stamps their boots and waves you over.",
        engageText: "The trader pours hot oil on a frozen bolt. 'Everything works. Just needs warming up first.'",
        discoveredDescription: "The heated outpost glows on the snowfield, a trail of boot prints leading to the door. The trader is expecting you.",
        discoveredEngageText: "The trader pours you something warm. 'Good to see you made it through the ice. New shipment just arrived.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Ice Road Hauler",
        type: "shop",
        discoverable: true,
        description: "A massive tracked hauler grinds to a stop. The driver opens the cargo hold to passing mechs.",
        engageText: "The hauler driver taps the dash. 'Long run from the coast. Got room to offload. Take a look.'",
        discoveredDescription: "The massive tracked hauler is parked at the same ridge, engine rumbling against the cold. The cargo hold is open.",
        discoveredEngageText: "The hauler driver grins. 'Came back through the pass. Picked up some good stuff on the coast this time.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Research Station Surplus",
        type: "shop",
        discoverable: true,
        description: "An abandoned research station still has its supply terminal online. Power flickers but holds.",
        engageText: "The terminal boots up. 'RESEARCH GRANT EXPIRED. LIQUIDATING ASSETS. ALL SALES FINAL.'",
        discoveredDescription: "The abandoned research station's lights still flicker. The supply terminal remembers your last transaction.",
        discoveredEngageText: "The terminal boots faster this time. 'RETURNING USER. DISPLAYING UPDATED LIQUIDATION INVENTORY.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Glacier Prospector",
        type: "shop",
        discoverable: true,
        description: "A prospector's drill rig sits atop a glacier. They've uncovered pre-war components in the ice.",
        engageText: "The prospector chisels ice off a component. 'Frozen solid for decades. Still works. That's quality.'",
        discoveredDescription: "The prospector's drill rig sits on the same glacier shelf, steam rising from the bore hole. New finds are laid out on a tarp.",
        discoveredEngageText: "The prospector waves a frozen component. 'Drilled deeper this time. Found some real ancient hardware.'",
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
        itemSlot1: ["Map: Neon Strip"],
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
        itemSlot1: ["Refined Vortexium"],
        itemSlot2: ["Refined Wyrmstone"],
        itemSlot3: ["Refined Xanthryx"]
    }
];
