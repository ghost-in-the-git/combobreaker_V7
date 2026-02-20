/**
 * THE FORGER - CRAFTABLE EQUIPMENT
 *
 * The Forger offers equipment crafted from refined minerals.
 * Each mineral tier has 3 minerals, and each mineral covers 3 installation types:
 *   - Mineral 1 (pos 0): body, legs, arms
 *   - Mineral 2 (pos 1): weapon, chip, processor
 *   - Mineral 3 (pos 2): pilot, implant, drill
 *
 * This means each tier covers all 9 installation types across its 3 minerals.
 */

// Mineral groupings by tier (order matters: position determines slot types)
const FORGER_TIERS = [
    { tier: 1, zone: "Scrapyard", minerals: ["Aetherite", "Bronzewisp", "Cindergem"] },
    { tier: 2, zone: "Old Battlefield", minerals: ["Duskquartz", "Emberlith", "Frostveil"] },
    { tier: 3, zone: "Downtown", minerals: ["Gloomstone", "Hexsilica", "Iridionite"] },
    { tier: 4, zone: "Orbital Station", minerals: ["Jetspinel", "Kryptoglass", "Lumenore"] },
    { tier: 5, zone: "Wasteland", minerals: ["Moonshardite", "Nightpyre", "Obsidryl"] },
    { tier: 6, zone: "Undercity", minerals: ["Prismalune", "Quellium", "Riftmarble"] },
    { tier: 7, zone: "Industrial Zone", minerals: ["Starvitrine", "Thorncrystal", "Umbracite"] },
    { tier: 8, zone: "Frozen Reach", minerals: ["Vortexium", "Wyrmstone", "Xanthryx"] },
    { tier: 9, zone: "Neon Strip", minerals: ["Yonderite", "Zephyrsalt", "Isotope Lace"] },
    { tier: 10, zone: "Dead Zone", minerals: ["Archive Shard", "Strata-Null", "Compound 33"] },
    { tier: 11, zone: "???", minerals: ["Reagent Arcadium", "Catalyst MK-II", "Anomaly 0x3A"] }
];

// Installation types assigned to each mineral position within a tier
const FORGER_SLOT_GROUPS = [
    ["body", "legs", "arms"],
    ["weapon", "chip", "processor"],
    ["pilot", "implant", "drill"]
];

// Forger items - looked up by mineralCost.mineral + type
const FORGER_ITEMS = [
    {
        name: "Forged Alloy Plating [+50 HP][+5 DEF]",
        type: "body",
        desc: "Hand-forged chassis plating, hammered from refined stone. Heavier than standard issue, but impossibly tough.",
        image: "images/IMAGE.gif",
        stats: { hp: 50, defence: 5 },
        mineralCost: { mineral: "Refined Aetherite", category: "refined", count: 3 },
        scrapCost: 30,
        dropRate: 0,
        droppedBy: []
    },
    {
        name: "Tempered Combat Blade [+6 ATK][+4 COMBO]",
        type: "weapon",
        desc: "A blade forged from smelted hematite. The edge never dulls, and each strike flows into the next.",
        image: "images/IMAGE.gif",
        stats: { attack: 6, combo: 4 },
        mineralCost: { mineral: "Refined Jetspinel", category: "refined", count: 3 },
        scrapCost: 30,
        dropRate: 0,
        droppedBy: []
    },
    {
        name: "Resonance Core Implant [+8 REGEN]",
        type: "implant",
        desc: "A pulsing core of refined gold, wired directly into the mech's repair systems. Heals damage at an alarming rate.",
        image: "images/IMAGE.gif",
        stats: { regen: 8 },
        mineralCost: { mineral: "Refined Vortexium", category: "refined", count: 3 },
        scrapCost: 30,
        dropRate: 0,
        droppedBy: []
    }
];
