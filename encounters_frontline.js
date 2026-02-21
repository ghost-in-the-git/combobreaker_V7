/**
 * THE FRONTLINE - ENCOUNTER CONFIGURATION
 *
 * Active military staging ground. The Herald operates from a
 * fortified foxhole, offering a beacon to draw out the Warlord Chassis.
 */

const ENCOUNTERS_FRONTLINE = [
    {
        name: "The Herald",
        type: "shop",
        discoverable: true,
        description: "A woman in battered combat armour crouches in a reinforced foxhole. Artillery thuds in the distance. She watches the ridgeline through a cracked scope.",
        engageText: "'The Warlord Chassis.' She pulls the scope away from her eye. 'It crests that ridge every cycle, dragging kills behind it like trophies. Every squadron that's gone after it hasn't come back.' She pulls a beacon from her vest. 'This IFF tag marks you as a priority target. It will come straight for you.'",
        discoveredDescription: "The Herald hunkers in her foxhole. The ridgeline is quiet for now. She checks the scope again anyway.",
        discoveredEngageText: "'It's still out there. They're all still out there. You ready to end this?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Frontline"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: null,
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a stolen military IFF tag set to priority target. Every chassis on the Frontline will converge on your position. The Warlord will lead them.'"
            },
            {
                question: "Who are you?",
                response: "'Last of my squad.' She doesn't look away from the ridgeline. 'I watched the Warlord kill them one by one. Dragged them behind it like flags.' Her voice is flat. 'I've been waiting for someone strong enough.'"
            }
        ]
    }
];
