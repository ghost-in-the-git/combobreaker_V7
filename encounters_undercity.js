/**
 * UNDERCITY - ENCOUNTER CONFIGURATION
 *
 * Underground fixers, tunnel market stalls, and rogue
 * maintenance drones repurposed for trade.
 */

const ENCOUNTERS_UNDERCITY = [
    {
        name: "[COMMON] Tunnel Fixer",
        type: "shop",
        discoverable: true,
        description: "A fixer's workshop is carved into the tunnel wall. Neon signs flicker in the damp air.",
        engageText: "The fixer cracks their knuckles. 'I fix what's broke and sell what's not. Simple arrangement.'",
        discoveredDescription: "The fixer's workshop glows in the tunnel wall, neon signs reflecting off the damp stone. You know the way now.",
        discoveredEngageText: "The fixer nods as you walk in. 'The regular. Good. I've got some new pieces you'll want to see.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Pipe Market Stall",
        type: "shop",
        discoverable: true,
        description: "A cluster of makeshift stalls fills a junction in the pipe network. Traders haggle in the echo.",
        engageText: "A stall owner slaps a component on the counter. 'Best price in the pipes. Don't compare, just buy.'",
        discoveredDescription: "The junction market is busy as ever, voices echoing through the pipes. Your usual stall owner waves.",
        discoveredEngageText: "The stall owner grins. 'Hey, you're back! I put something aside. Best deal in the pipes, guaranteed.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Rogue Maintenance Drone",
        type: "shop",
        discoverable: true,
        description: "A reprogrammed city maintenance drone hovers nearby, cargo bay loaded with mismatched parts.",
        engageText: "The drone beeps twice and opens its bay. A speaker crackles: 'TRADE PROTOCOL ACTIVE.'",
        discoveredDescription: "The reprogrammed drone hovers at its usual junction, cargo bay loaded. It beeps twice when it spots you.",
        discoveredEngageText: "The drone plays a cheerful chime. 'RETURNING CUSTOMER PROTOCOL. PRIORITY ACCESS GRANTED.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Shadow Broker",
        type: "shop",
        discoverable: true,
        description: "A hidden door slides open in the tunnel wall. Inside, a broker deals in parts no one asks about.",
        engageText: "The broker doesn't look up. 'You weren't here. I wasn't here. Pick something and leave.'",
        discoveredDescription: "The hidden door in the tunnel wall slides open as you approach. The broker remembers your signal.",
        discoveredEngageText: "The broker glances up this time. 'You again. Fine. New stock, same rules. Don't linger.'",
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
        itemSlot1: ["Map: Industrial Zone"],
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
        itemSlot1: ["Refined Prismalune"],
        itemSlot2: ["Refined Quellium"],
        itemSlot3: ["Refined Riftmarble"]
    }
];
