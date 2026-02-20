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
        itemSlot3: [],
        dialogue: [
            {
                question: "Who are you?",
                response: "He doesn't look up. 'Cartographer.' He rolls the chart shut."
            },
            {
                question: "How did you get down here?",
                response: "'The same way you did.' There are no footprints in the dust around him except yours."
            },
            {
                question: "What are you mapping?",
                response: "'Anything that's left.' He unfurls a chart dense with markings in a script you can't read. He rolls it back up before you can study it."
            },
            {
                question: "You don't seem afraid of me.",
                response: "'No.' He goes back to his charts."
            },
            {
                question: "Have we met before?",
                response: "His hand stops on the chart. '...No. But I know the model.' He taps the edge of the chart twice. Conversation over."
            }
        ]
    }
];
