/**
 * HOME - ENCOUNTER CONFIGURATION
 *
 * A quiet place. The Professor is always here, waiting.
 */

const ENCOUNTERS_HOME = [
    {
        name: "The Professor",
        type: "shop",
        discoverable: true,
        autoEngage: true,
        description: "A cluttered workshop hums with activity. An old man in welding goggles is hunched over a disassembled servo unit, muttering to himself.",
        engageText: "The old man looks up, startled, then breaks into a grin. 'Well now — a new pilot. Haven't seen a fresh face in a long time. I'm the Professor. Let me see what I can dig up for you.'",
        discoveredDescription: "The Professor's workshop is warm and familiar. He's at his bench, tinkering with something that sparks.",
        discoveredEngageText: "The Professor looks up and adjusts his goggles. 'Ah, you're back. Let me see what I've got for you.'",
        appearanceRate: 100,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: ["Professor's Lesson [+10 XP]"],
        itemSlot3: [],
        dialogue: [
            {
                question: "Who am I?",
                response: "The Professor sets down his tools and studies you for a long moment. 'You're Pilot 72632. That's what the tags say, anyway. You came in on a breaker — a combat mech, military-grade. But your neural sync was scrambled. Memory's gone, I'd wager. Happens sometimes with the older sync rigs.' He taps his temple. 'The machine remembers even when the pilot doesn't. Keep fighting — it'll come back to you.'"
            },
            {
                question: "What is this place?",
                response: "He gestures around the cluttered workshop. 'This? This is Home. Or what's left of it. Used to be a forward operating base — refueling station for breaker squads pushing into deep space. Now it's just me and whatever drifts in.' He pauses. 'The war moved on. We didn't.'"
            },
            {
                question: "Who are you?",
                response: "'Me? I'm nobody important. Used to be an engineer — kept the breakers running during the war. When things fell apart, I stayed behind. Someone had to keep the lights on.' He adjusts his goggles with a faint smile. 'The pilots call me the Professor. I suppose it stuck.'"
            },
            {
                question: "What happened here?",
                response: "The Professor's expression darkens. 'War happened. The kind that doesn't end clean. One day the comms went silent. No more orders, no more supply drops. Just static.' He picks up a charred circuit board and turns it over in his hands. 'Whatever hit the network hit it hard. Most of the breaker squads went dark. The ones that survived... well, you've seen what's out there. It's not friendly.'"
            },
            {
                question: "Any advice?",
                response: "'Advice? Sure. Don't die.' He chuckles, then gets serious. 'Scavenge everything. The junk floating around out there — minerals, scrap, old parts — that's currency now. Bring me materials and I'll see what I can cobble together for you. And watch your fuel. Getting stranded out there is a death sentence.'"
            },
            {
                question: "What should I do next?",
                response: "The Professor scratches his chin. 'Well, you're not going to learn much sitting around here. Head out to The Ratpile — I marked it on your map. It's crawling with vermin, but it's good practice for a pilot shaking off the rust.' He leans in. 'Once you've got your bearings, push further out. There's more to this sector than rats and rocks.'"
            },
            {
                question: "Tell me about combat.",
                response: "'Combat in a breaker is simple — you hit them, they hit you, and whoever's still standing wins.' He holds up a finger. 'But the smart pilot doesn't just swing harder. Gear matters. A good weapon, solid armor, maybe a shield module — that's the difference between walking away and becoming scrap.' He nods toward his workbench. 'Bring me the right materials and I'll make sure you're not going out there naked.'"
            },
            {
                question: "What's worth collecting?",
                response: "'Everything.' He says it without hesitation. 'Minerals are the backbone — you need them to forge gear at the right stations. Scrap is good for trade. And keep an eye out for anything unusual — old tech, strange signals, data fragments. This sector's got secrets buried in it.' He winks. 'I may be old, but I still know a thing or two about what's valuable.'"
            }
        ]
    }
];
