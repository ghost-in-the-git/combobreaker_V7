/**
 * ALL PILOT ITEMS
 *
 * Zone pilots and guild mercenary pilots.
 * Merged into ITEMS at load time.
 */

const ALL_PILOTS = [

    // ==================== ZONE PILOTS (All Stats) ====================
    {
        name: "Rat Wrangler [+1 HP][+1 SPD]",
        type: "pilot",
        desc: "A feral scavenger who's been living in the rat tunnels for years. Smells terrible. Knows every shortcut.",
        image: "images/IMAGE.gif",
        stats: { hp: 1, speed: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 10,
        zone: "ratpile"
    },
    {
        name: "Rookie Pilot [+1 ALL]",
        type: "pilot",
        desc: "A green recruit fresh from the simulator. Eager, clumsy, but better than an empty cockpit.",
        image: "images/IMAGE.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 20,
        zone: "scrapyard"
    },
    {
        name: "Trained Pilot [+2 ALL]",
        type: "pilot",
        desc: "A field-tested operator with enough scars to know when to push and when to pull back.",
        image: "images/IMAGE.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 45,
        droppedBy: [],
        cost: 40,
        zone: "oldbattlefield"
    },
    {
        name: "Veteran Pilot [+3 ALL]",
        type: "pilot",
        desc: "Hundreds of sorties logged. Reads the battlefield like a book and moves before the enemy thinks.",
        image: "images/IMAGE.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 60,
        zone: "downtown"
    },
    {
        name: "Elite Pilot [+4 ALL]",
        type: "pilot",
        desc: "Top 1% of mech operators. Neural sync rate is off the charts. The mech feels like a second skin.",
        image: "images/IMAGE.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 35,
        droppedBy: [],
        cost: 85,
        zone: "orbitalstation"
    },
    {
        name: "Ace Pilot [+5 ALL]",
        type: "pilot",
        desc: "A living legend on the battlefield. Enemies break formation at the sight of this callsign.",
        image: "images/IMAGE.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 30,
        droppedBy: [],
        cost: 110,
        zone: "wasteland"
    },
    {
        name: "Shadow Operator [+6 ALL]",
        type: "pilot",
        desc: "No service record exists. Moves through combat like smoke, striking from angles that shouldn't be possible.",
        image: "images/IMAGE.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 25,
        droppedBy: [],
        cost: 140,
        zone: "undercity"
    },
    {
        name: "War Mind [+7 ALL]",
        type: "pilot",
        desc: "More machine than human. Neural implants have fused pilot and mech into a single combat organism.",
        image: "images/IMAGE.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 20,
        droppedBy: [],
        cost: 175,
        zone: "industrialzone"
    },
    {
        name: "Revenant Pilot [+8 ALL]",
        type: "pilot",
        desc: "Died in the cockpit. Came back. The mech refused to let them go. They fight as one now.",
        image: "images/IMAGE.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 15,
        droppedBy: [],
        cost: 210,
        zone: "frozenreach"
    },
    {
        name: "Apex Predator [+9 ALL]",
        type: "pilot",
        desc: "The last pilot standing in every engagement they've ever entered. Kill count: classified.",
        image: "images/IMAGE.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 10,
        droppedBy: [],
        cost: 250,
        zone: "neonstrip"
    },
    {
        name: "Ghost Pilot [+10 ALL]",
        type: "pilot",
        desc: "Officially listed as KIA. Unofficially, the deadliest operator ever to interface with a Breaker frame.",
        image: "images/IMAGE.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 5,
        droppedBy: [],
        cost: 300,
        zone: "deadzone"
    },

    // ==================== GUILD MERCENARY PILOTS ====================
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
