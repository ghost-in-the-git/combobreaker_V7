/**
 * MECH GRAVEYARD - ENCOUNTER CONFIGURATION
 *
 * A colossal mech sits motionless among the dead, slowly cannibalising
 * fallen machines to rebuild its shattered legs. It will trade scrap
 * for any parts you no longer need.
 *
 * Uses a custom salvage UI instead of fixed item slots.
 * Player selects unequipped installations to sell for scrap.
 */

const ENCOUNTERS_SALVAGEYARD = [
    {
        name: "Abandoned Monolith",
        type: "shop",
        isSalvageYard: true,
        autoEngage: true,
        description: "A towering mech looms above the graveyard, half-buried in wreckage. Its upper body still moves — one massive arm dragging scrap toward its shattered legs in an endless, patient repair cycle.",
        engageText: "A deep mechanical groan echoes across the field as the Monolith's sensors lock onto your mech. A cargo bay in its chest grinds open. It doesn't speak — but the message is clear: bring parts, receive scrap.",
        appearanceRate: 100,
        minLevel: 1
    }
];
