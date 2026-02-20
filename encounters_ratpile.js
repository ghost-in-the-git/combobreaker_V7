/**
 * THE RATPILE - ENCOUNTER CONFIGURATION
 *
 * A festering tunnel network beneath the scrapyard. Not much down here but rats.
 */

const ENCOUNTERS_RATPILE = [
    {
        name: "The Mapmaker",
        type: "shop",
        discoverable: true,
        description: "A hooded figure stands motionless in the tunnel, a rolled chart clutched in one hand.",
        engageText: "He says nothing. His eyes flick to you, then to the map.",
        discoveredDescription: "The Mapmaker is where you left him, hood drawn, charts spread across a makeshift table.",
        discoveredEngageText: "He glances up as you approach. A faint nod — he's already reaching for his charts.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Scrap Fields"],
        itemSlot2: [],
        itemSlot3: []
    }
];
