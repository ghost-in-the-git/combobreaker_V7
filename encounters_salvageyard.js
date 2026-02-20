/**
 * THE SALVAGE YARD - ENCOUNTER CONFIGURATION
 *
 * A mech chop-shop where The Scrapper buys your unwanted installations
 * for scrap. No enemies — just a greasy mechanic and a pile of parts.
 *
 * Uses a custom salvage UI instead of fixed item slots.
 * Player selects unequipped installations to sell for scrap.
 */

const ENCOUNTERS_SALVAGEYARD = [
    {
        name: "The Scrapper",
        type: "shop",
        isSalvageYard: true,
        description: "A squat, heavily scarred mech sits in a clearing of crushed metal, its torso split open like a clamshell workshop. A woman in oil-black overalls leans against a hydraulic press.",
        engageText: "She sizes up your mech with a practiced eye. 'Got parts you don't need? I'll strip 'em down and give you scrap for the trouble. Fair rates — mostly.'",
        appearanceRate: 100,
        minLevel: 1
    }
];
