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
        description: "A woman in battered combat armour crouches in a reinforced foxhole. No artillery here — just silence and the faint hum of a squad uplink broadcasting to no one. She watches the ridge where the Sovereign stands.",
        engageText: "'It's a command mech. A Sovereign.' She lowers the scope. 'It's been standing on that ridge since the war. Broadcasting orders on eleven channels. Formation changes, rally points, fire missions — all for a squad that's been dead for eighty years.' She holds up a beacon. 'This spoofs a hostile IFF inside its perimeter. A threat to the squad it thinks it still has.'",
        discoveredDescription: "The Herald hunkers in her foxhole. On the ridge, the Sovereign still stands. The uplink still broadcasts. Nothing has changed.",
        discoveredEngageText: "'Still up there. Still commanding. Eleven empty channels and it won't close a single one.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Frontline"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: null,
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a hostile IFF signature inside the Sovereign's tactical perimeter. A threat to the squad it's still protecting. Its command protocols will override everything — it will move to intercept. First time it's left that ridge in eighty years.'"
            },
            {
                question: "Who are you?",
                response: "'A forward observer.' She doesn't look away from the ridge. 'I've been watching it for months. Every morning, same thing — formation orders, target packages, rally coordinates. All for callsigns that never respond. It won't stop. It can't. A CO doesn't abandon their people.' She pauses. 'Even when there's no one left to abandon.'"
            }
        ]
    }
];
