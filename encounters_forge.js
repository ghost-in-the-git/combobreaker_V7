/**
 * THE FORGE - ENCOUNTER CONFIGURATION
 *
 * A hidden workshop where The Forger turns refined minerals into
 * powerful mech components. No enemies, no ambushes — just fire and steel.
 *
 * Uses a mineral dropdown instead of fixed item slots.
 * Player selects a mineral, then sees 3 forge slots based on mineral position.
 */

const ENCOUNTERS_FORGE = [
    {
        name: "The Forger",
        type: "shop",
        isForge: true,
        description: "A heavily augmented smith works at a glowing forge, shaping refined minerals into mech components.",
        engageText: "The Forger looks up from her anvil, sparks cascading from molten metal. 'Got refined materials? I can make something worth wearing.'",
        appearanceRate: 100,
        minLevel: 1
    }
];
