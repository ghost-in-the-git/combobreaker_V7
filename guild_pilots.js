/**
 * THE GUILD - MERCENARY PILOT ITEMS
 *
 * Hired guns, contract runners, and black-list operators.
 * Pilots for sale — no loyalty, no questions.
 * Merged into ITEMS at load time.
 */

const GUILD_PILOTS = [
    {
        name: "Hired Gun [+3 ALL]",
        type: "pilot",
        desc: "A freelancer with a short resume and a shorter attention span. Syncs fast, fights sloppy, charges less than the rest.",
        image: "images/IMAGE.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 65,
        zone: "guild"
    },
    {
        name: "Contract Runner [+4 ALL]",
        type: "pilot",
        desc: "Works on retainer for three different outfits. Doesn't talk about any of them. Clean sync, no questions asked.",
        image: "images/IMAGE.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 35,
        droppedBy: [],
        cost: 90,
        zone: "guild"
    },
    {
        name: "Licensed Mercenary [+5 ALL]",
        type: "pilot",
        desc: "Guild-certified. Bonded and insured. Has a laminated card and everything. The sync calibration alone is worth the price.",
        image: "images/IMAGE.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 30,
        droppedBy: [],
        cost: 120,
        zone: "guild"
    },
    {
        name: "Bonded Operative [+6 ALL]",
        type: "pilot",
        desc: "Neural sync specialist. Interfaces with damaged rigs that would fry a normal operator. Charges by the hour and worth every second.",
        image: "images/IMAGE.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 25,
        droppedBy: [],
        cost: 155,
        zone: "guild"
    },
    {
        name: "Syndicate Ace [+7 ALL]",
        type: "pilot",
        desc: "Former corporate strike team. Burned every bridge on the way out and took the classified sync protocols with her. Your mech will feel like it's thinking ahead of you.",
        image: "images/IMAGE.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 20,
        droppedBy: [],
        cost: 195,
        zone: "guild"
    },
    {
        name: "Black List Pilot [+8 ALL]",
        type: "pilot",
        desc: "No name. No dossier. The Broker keeps this one in a locked drawer. Neural sync rate is military black-project grade. Whatever this pilot did before, it wasn't legal.",
        image: "images/IMAGE.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 15,
        droppedBy: [],
        cost: 240,
        zone: "guild"
    }
];
