/**
 * STORY ITEMS
 *
 * Collectible items tied to story events, exploration, and lore.
 * These are NOT equipment, minerals, or consumables.
 *
 * Each item has:
 * - name: Display name
 * - desc: Flavour text / lore description
 * - category: "log", "key", "dna", "debris", "scrap", "map"
 * - image: Path to item image
 *
 * Categories:
 * - "log"    : System Logs (battle reports, experiments, world events)
 * - "key"    : Keys (access cards, fobs, unlock devices)
 * - "dna"    : DNA Tags (biological samples, genetic markers)
 * - "debris" : Mech Debris (random mech parts and wreckage)
 * - "scrap"  : Scrap (salvageable junk and miscellaneous finds)
 * - "map"    : Maps (zone navigation charts and location data)
 */

const STORY_ITEMS = [
    // Starter Items
    {
        name: "Mysterious Note",
        desc: "A crumpled note found in your cockpit on day one. The handwriting is yours, but you don't remember writing it.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Key",
        desc: "A tarnished key you've had as long as you can remember. Whatever it opens, you haven't found it yet.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Unreadable DNA Tag",
        desc: "A smudged genetic tag clipped to your pilot jacket. The data is too degraded to scan.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "Destroyed Mech Heart",
        desc: "The fused core reactor of a mech you once piloted. It's dead now, but it's warm when you hold it.",
        category: "debris",
        image: "images/IMAGE.gif"
    },

    // System Logs
    {
        name: "Battle Report: Sector 7 Collapse",
        desc: "A fragmented log detailing the fall of Sector 7. The defending unit was overwhelmed in under three minutes.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Experiment Log: Project Lazarus",
        desc: "Notes on a failed attempt to reboot a destroyed mech's AI core. The core rebooted — then refused to comply.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Distress Signal Transcript",
        desc: "A decoded transmission from an orbital station. The last line reads: 'They're inside the walls.'",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Incident Report: Dead Zone Breach",
        desc: "An official report on the first incursion into the Dead Zone. Casualty rate: 97%. Classification: BURIED.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Maintenance Log: Unit 00-4417",
        desc: "Routine service record for a mech that was decommissioned. The final entry just says 'IT MOVED'.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Encrypted Comms Fragment",
        desc: "A partial intercept between two unknown callsigns. They reference something called 'The Fold'.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Blackbox Audio Log",
        desc: "Recovered from wreckage. The audio is mostly static, but there are screams near the end.",
        category: "log",
        image: "images/IMAGE.gif"
    },

    // Keys
    {
        name: "Unmarked Keycard",
        desc: "A blank white keycard with no markings. It hums faintly when held near electrical panels.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Corroded Access Fob",
        desc: "An old security fob caked in grime. The LED still blinks red every few seconds.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Skeleton Key Module",
        desc: "A black-market bypass chip. It won't open everything, but it opens more than it should.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Unmarked Crate Key",
        desc: "A heavy iron key with no label. It doesn't match any standard lock pattern.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Docking Permit",
        desc: "An expired docking authorization for Bay 12. The station it references no longer exists on any map.",
        category: "key",
        image: "images/IMAGE.gif"
    },

    // DNA Tags
    {
        name: "DNA Tag: Unknown Pilot",
        desc: "A blood-smeared tag with a corrupted genetic profile. Species classification: PENDING.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Mech-Hybrid Sample",
        desc: "Biological tissue fused with synthetic fibre. The cell structure is still actively dividing.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Contaminated Sample",
        desc: "A sealed vial of irradiated blood from the Dead Zone. The cells glow faintly under UV light.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Cloned Signature",
        desc: "Two identical genetic profiles from two different bodies. Recovered six months apart.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Non-Human Marker",
        desc: "A genetic sequence that doesn't match any known terrestrial organism. Origin: CLASSIFIED.",
        category: "dna",
        image: "images/IMAGE.gif"
    },

    // Mech Debris
    {
        name: "Twisted Servo Arm",
        desc: "A mangled hydraulic arm ripped from a fallen mech. Still twitches when you touch the wiring.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Shattered Cockpit Glass",
        desc: "Reinforced glass from a mech canopy. The cracks form a spiderweb pattern around a single impact point.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Severed Mech Hand",
        desc: "A massive articulated hand, cleanly cut at the wrist. The fingers are still locked in a fist.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Burnt Circuit Board",
        desc: "Charred beyond recognition. Whatever data it held is gone, but the gold traces might be worth something.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Cracked Sensor Lens",
        desc: "A targeting optic shattered by impact. Light refracts through it in strange patterns.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dented Dog Tags",
        desc: "Military-issue pilot tags. The name has been scratched off. Only the serial number remains: 00-4417.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Fragment of Unknown Alloy",
        desc: "A shard of metal that doesn't match anything in the materials database. Cold to the touch. Always.",
        category: "debris",
        image: "images/IMAGE.gif"
    },

    // Location Maps (encounter discoveries — granted on first engage)
    {
        name: "Home: The Professor",
        desc: "The Professor's workshop coordinates, hardwired into your nav system. He's always there.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "The Ratpile: The Mapmaker",
        desc: "Coordinates to a hooded cartographer's position in the Ratpile tunnels. He never moves.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: The Mapmaker",
        desc: "Coordinates to the Mapmaker's outpost in the Scrap Yard. He watches from between the wreckage.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: The Mineral Trader",
        desc: "A marked route to the Mineral Trader's smelting rig in the Scrap Yard.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: The Mapmaker",
        desc: "Coordinates to the Mapmaker's foxhole on the Old Battlefield. He sells maps from a rusted bunker.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: The Mineral Trader",
        desc: "Directions to the Mineral Trader's mobile forge, parked between shell craters.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: The Mapmaker",
        desc: "An address scrawled on synth-paper. The Mapmaker operates from a back-alley kiosk Downtown.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: The Mineral Trader",
        desc: "GPS lock on the Mineral Trader's workshop hidden beneath a neon sign Downtown.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: The Mapmaker",
        desc: "Docking bay coordinates for the Mapmaker's berth on the Orbital Station.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: The Mineral Trader",
        desc: "Deck coordinates for the Mineral Trader's zero-g smelting bay on the station.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: The Mapmaker",
        desc: "A beacon frequency for the Mapmaker's camp in the irradiated Wasteland.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: The Mineral Trader",
        desc: "Coordinates to a rad-shielded smelter the Mineral Trader operates in the Wasteland.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: The Mapmaker",
        desc: "A tunnel junction number where the Mapmaker deals charts by lantern light.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: The Mineral Trader",
        desc: "Pipe junction coordinates for the Mineral Trader's underground forge in the Undercity.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: The Mapmaker",
        desc: "A factory bay number where the Mapmaker has set up shop between idle machines.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: The Mineral Trader",
        desc: "Assembly line coordinates for the Mineral Trader's smelter rig in the Industrial Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: The Mapmaker",
        desc: "Thermal coordinates for the Mapmaker's heated outpost on the Frozen Reach ice shelf.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: The Mineral Trader",
        desc: "A geothermal vent location where the Mineral Trader runs a forge in the Frozen Reach.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: The Mapmaker",
        desc: "A back-room address on the Neon Strip. The Mapmaker deals from behind a beaded curtain.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: The Mineral Trader",
        desc: "VIP coordinates for the Mineral Trader's private smelting lounge on the Neon Strip.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: The Mapmaker",
        desc: "Hazmat-sealed coordinates for the Mapmaker's contamination bunker in the Dead Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: The Mineral Trader",
        desc: "Radiation-shielded coordinates for the Mineral Trader's forge deep in the Dead Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Scrap Yard — Common Encounter Locations
    {
        name: "Scrap Yard: Mech Junker",
        desc: "GPS lock on a Junker vessel tethered to a rust-eaten gantry in the Scrap Yard. They never move far.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: Scrap Dealer",
        desc: "Coordinates to a Scrap Dealer's permanent berth among the wreckage piles. Their trade signal runs day and night.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: Field Mechanic",
        desc: "A marked position next to a decommissioned mech where a field mechanic has set up shop on a greasy tarp.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: Derelict Vending Array",
        desc: "Power signature of an ancient vending array still running in the Scrap Yard. The buttons are worn smooth.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Old Battlefield — Common Encounter Locations
    {
        name: "Old Battlefield: Salvage Auction Pod",
        desc: "Orbital coordinates for a drifting auction pod that circles the Old Battlefield. Bidding is automated.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Corporate Supply Cache",
        desc: "Beacon frequency for a corporate resupply buoy anchored above the trenches. Still honoring contracts.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Pilgrim Parts Caravan",
        desc: "Route data for a pilgrim caravan that loops through the Old Battlefield. They trade fair and move slow.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Experimental R&D Vendor",
        desc: "Landing coordinates for a research craft running field tests on the Old Battlefield. Waivers required.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Downtown — Common Encounter Locations
    {
        name: "Downtown: Black Market Trader",
        desc: "Encrypted channel frequency for a black market vessel that haunts Downtown's shadows. No names exchanged.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Smuggler's Docking Bay",
        desc: "Hidden dock ring coordinates in the Downtown district. The smugglers keep irregular hours but always have stock.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Scrap Dealer",
        desc: "Alley coordinates for a Scrap Dealer who operates from a cargo ship wedged between Downtown towers.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Neon Bazaar Kiosk",
        desc: "Street address for a Bazaar kiosk in the Downtown strip. The synthetic shopkeeper never closes.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Orbital Station — Common Encounter Locations
    {
        name: "Orbital Station: Station Quartermaster",
        desc: "Supply bay number for the station quartermaster. Military surplus at standard rates, no haggling.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Zero-G Peddler",
        desc: "Hull clamp coordinates for a peddler's craft magnetically attached to the station exterior. Weightless bargains.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Docking Ring Vendor",
        desc: "Kiosk terminal ID at the station docking ring. Automated inventory, verified permits only.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Void Smuggler",
        desc: "Scrambled transponder frequency for a blacked-out shuttle parked in the station's shadow. Discreet transactions.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Wasteland — Common Encounter Locations
    {
        name: "Wasteland: Nomad Trader",
        desc: "Dune ridge coordinates where a nomad convoy camps between trade runs. They flash beacons for friendlies.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Rad-Shielded Caravan",
        desc: "Formation point for a lead-lined hauler convoy in the Wasteland. Geiger counters tick, but the parts are clean.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Scavenger Camp",
        desc: "Position beneath a wrecked dropship where scavengers have set up a permanent camp. New salvage daily.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Buried Supply Cache",
        desc: "Nav marker for a pre-war supply cache buried in the Wasteland sand. Your access code is saved.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Undercity — Common Encounter Locations
    {
        name: "Undercity: Tunnel Fixer",
        desc: "Tunnel junction number for a fixer's workshop carved into the Undercity wall. Neon signs mark the entrance.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Pipe Market Stall",
        desc: "Junction coordinates for a cluster of makeshift stalls in the pipe network. Echoes carry the haggling.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Rogue Maintenance Drone",
        desc: "Patrol route marker for a reprogrammed maintenance drone in the Undercity. It beeps when it has stock.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Shadow Broker",
        desc: "Hidden door coordinates in the Undercity tunnel wall. The broker deals in silence. Don't linger.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Industrial Zone — Common Encounter Locations
    {
        name: "Industrial Zone: Factory Surplus Outlet",
        desc: "Loading dock number for a factory outlet in the Industrial Zone. The foreman always has overstock.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Union Supply Depot",
        desc: "Depot coordinates between the smokestacks where the workers' union trades parts to allies.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Automated Vending Rig",
        desc: "Route schedule for a mobile vending rig on the factory floor. It plays a jingle when it's nearby.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Shift Supervisor's Stash",
        desc: "Storage unit coordinates near the line. The shift supervisor keeps off-book inventory for trusted buyers.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Frozen Reach — Common Encounter Locations
    {
        name: "Frozen Reach: Outpost Trader",
        desc: "Heated outpost coordinates on the Frozen Reach snowfield. Warm lights visible from a kilometre out.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Ice Road Hauler",
        desc: "Ridge coordinates where a massive tracked hauler parks between coast runs. Engine never stops.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Research Station Surplus",
        desc: "Coordinates for an abandoned research station on the ice. The supply terminal still has power — barely.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Glacier Prospector",
        desc: "Drill rig coordinates atop a glacier shelf in the Frozen Reach. Pre-war hardware frozen in the ice.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Neon Strip — Common Encounter Locations
    {
        name: "Neon Strip: Back-Alley Dealer",
        desc: "Alley coordinates behind a flickering holographic ad on the Neon Strip. The dealer keeps odd hours.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Casino Prize Counter",
        desc: "Casino floor address on the Neon Strip. The prize counter has mech parts between the stuffed animals.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Syndicate Fence",
        desc: "Secure channel frequency for a syndicate contact on the Neon Strip. Pre-loaded and encrypted.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: High-Roller Lounge",
        desc: "VIP lounge coordinates on the Neon Strip. Premium parts displayed on velvet. Credits talk.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Dead Zone — Common Encounter Locations
    {
        name: "Dead Zone: Hazmat Trader",
        desc: "Perimeter coordinates for a sealed hazmat vehicle in the Dead Zone. The trader scrubs everything. Mostly.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Decontamination Drone",
        desc: "Patrol route for a decontamination drone in the Dead Zone. Cargo bay restocked after each sweep.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Desperate Scavenger",
        desc: "Position behind a crumbling wall in the Dead Zone. A lone scavenger who never seems to leave.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Sealed Bunker Terminal",
        desc: "Bunker hatch coordinates in the Dead Zone. Emergency terminal still online. Integrity dropping.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Maps
    {
        name: "Map: The Ratpile",
        desc: "A crude sketch of tunnel networks beneath the scrapyard. Rat nests are circled in red ink.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 0
    },
    {
        name: "Map: Scrap Yard",
        desc: "A salvager's chart marking safe paths through the wreckage. Some routes have been crossed out.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 20
    },
    {
        name: "Map: Old Battlefield",
        desc: "A faded military topographic map. Minefields and kill zones are marked in deteriorating ink.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 25
    },
    {
        name: "Map: Downtown",
        desc: "A street-level map of the urban core. Gang territories are colour-coded. Most overlap.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 30
    },
    {
        name: "Map: The Forge",
        desc: "Directions to a hidden workshop scrawled on heat-resistant foil. The ink smells like molten iron.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: Orbital Station",
        desc: "A schematic of the station's deck layout. Several sections are labelled DEPRESSURISED.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 40
    },
    {
        name: "Map: Wasteland",
        desc: "A radiation heatmap of the badlands. The safe corridors shift daily. This one is dated last week.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 50
    },
    {
        name: "Map: Undercity",
        desc: "A hand-drawn tunnel map on synthetic paper. Annotations warn of collapse zones and ambush points.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 65
    },
    {
        name: "Map: Industrial Zone",
        desc: "A factory floor plan with conveyor routes and power grid overlays. Someone marked the blind spots.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 80
    },
    {
        name: "Map: Frozen Reach",
        desc: "A thermal survey of the arctic zone. Heat signatures cluster around geothermal vents.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: Neon Strip",
        desc: "A nightlife district guide doubling as a tactical map. Back alleys and escape routes are highlighted.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 125
    },
    {
        name: "Map: Dead Zone",
        desc: "A contamination chart of the killing fields. The safe path is a single line through a sea of red.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 160
    },
    {
        name: "Map: Asteroid Belt",
        desc: "A navigation chart plotting orbital paths through the belt. Mining coordinates are encoded.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 200
    },
    // Asteroid Belt - discovered mining locations
    {
        name: "Asteroid Belt: Aetherite Asteroid",
        desc: "Logged coordinates to an Aetherite-rich asteroid. Shallow deposits, stable structure.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Duskquartz Asteroid",
        desc: "Logged coordinates to a Duskquartz asteroid. Faint violet shimmer visible on approach.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Gloomstone Asteroid",
        desc: "Logged coordinates to a Gloomstone asteroid. Dense rock with moderate depth deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Jetspinel Asteroid",
        desc: "Logged coordinates to a Jetspinel asteroid. Dark crystalline veins run deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Nightpyre Asteroid",
        desc: "Logged coordinates to a Nightpyre asteroid. Faint thermal readings from within.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Prismalune Asteroid",
        desc: "Logged coordinates to a Prismalune asteroid. Refracts starlight across its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Riftmarble Asteroid",
        desc: "Logged coordinates to a Riftmarble asteroid. Fracture lines suggest unstable geology.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Vortexium Asteroid",
        desc: "Logged coordinates to a Vortexium asteroid. Gravitational distortions detected nearby.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Xanthryx Asteroid",
        desc: "Logged coordinates to a Xanthryx asteroid. Amber-hued deposits deep beneath the crust.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Zephyrsalt Asteroid",
        desc: "Logged coordinates to a Zephyrsalt asteroid. Crystalline dust vents from surface fissures.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Thorncrystal Asteroid",
        desc: "Logged coordinates to a Thorncrystal asteroid. Jagged spires protrude from the surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Archive Shard Asteroid",
        desc: "Logged coordinates to an Archive Shard asteroid. Ancient data-encoded mineral buried impossibly deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Strata-Null Asteroid",
        desc: "Logged coordinates to a Strata-Null asteroid. Readings are erratic. Extreme depth required.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Scrap Yard - discovered mining locations
    {
        name: "Scrap Yard: Aetherite Asteroid",
        desc: "Logged coordinates to an Aetherite asteroid drifting near the Scrap Yard. Shallow deposits, easy extraction.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: Bronzewisp Asteroid",
        desc: "Logged coordinates to a Bronzewisp asteroid orbiting the Scrap Yard. Faint metallic shimmer on approach.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: Cindergem Asteroid",
        desc: "Logged coordinates to a Cindergem asteroid near the Scrap Yard. Warm to the touch, shallow veins.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Old Battlefield - discovered mining locations
    {
        name: "Old Battlefield: Duskquartz Asteroid",
        desc: "Logged coordinates to a Duskquartz asteroid above the Old Battlefield. Violet shimmer visible from No Man's Land.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Emberlith Asteroid",
        desc: "Logged coordinates to an Emberlith asteroid near the Old Battlefield. Smouldering veins run through its core.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Frostveil Asteroid",
        desc: "Logged coordinates to a Frostveil asteroid drifting over the Old Battlefield. Ice crystals coat its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Downtown - discovered mining locations
    {
        name: "Downtown: Gloomstone Asteroid",
        desc: "Logged coordinates to a Gloomstone asteroid lurking above the Downtown skyline. Dense and dark.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Hexsilica Asteroid",
        desc: "Logged coordinates to a Hexsilica asteroid near Downtown. Geometric crystal patterns line the surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Iridionite Asteroid",
        desc: "Logged coordinates to an Iridionite asteroid above the Downtown district. Rainbow-sheened mineral deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Orbital Station - discovered mining locations
    {
        name: "Orbital Station: Jetspinel Asteroid",
        desc: "Logged coordinates to a Jetspinel asteroid in the station's orbital debris field. Dark crystalline veins run deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Kryptoglass Asteroid",
        desc: "Logged coordinates to a Kryptoglass asteroid near the Orbital Station. Translucent surface hides deep deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Lumenore Asteroid",
        desc: "Logged coordinates to a Lumenore asteroid orbiting the station. Faint bioluminescence pulses from within.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Wasteland - discovered mining locations
    {
        name: "Wasteland: Moonshardite Asteroid",
        desc: "Logged coordinates to a Moonshardite asteroid above the Wasteland. Pale fragments orbit its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Nightpyre Asteroid",
        desc: "Logged coordinates to a Nightpyre asteroid drifting over the badlands. Faint thermal readings from within.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Obsidryl Asteroid",
        desc: "Logged coordinates to an Obsidryl asteroid near the Wasteland. Obsidian-black surface absorbs all light.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Undercity - discovered mining locations
    {
        name: "Undercity: Prismalune Asteroid",
        desc: "Logged coordinates to a Prismalune asteroid detected from the Undercity depths. Refracts starlight across its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Quellium Asteroid",
        desc: "Logged coordinates to a Quellium asteroid above the Undercity. Liquid mineral seeps from surface cracks.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Riftmarble Asteroid",
        desc: "Logged coordinates to a Riftmarble asteroid near the Undercity. Fracture lines suggest unstable geology.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Industrial Zone - discovered mining locations
    {
        name: "Industrial Zone: Starvitrine Asteroid",
        desc: "Logged coordinates to a Starvitrine asteroid near the Industrial Zone. Glassy surface reflects factory lights.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Thorncrystal Asteroid",
        desc: "Logged coordinates to a Thorncrystal asteroid above the factory district. Jagged spires protrude from its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Umbracite Asteroid",
        desc: "Logged coordinates to an Umbracite asteroid drifting over the Industrial Zone. Shadow-dark mineral deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Frozen Reach - discovered mining locations
    {
        name: "Frozen Reach: Vortexium Asteroid",
        desc: "Logged coordinates to a Vortexium asteroid above the Frozen Reach. Gravitational distortions detected nearby.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Wyrmstone Asteroid",
        desc: "Logged coordinates to a Wyrmstone asteroid in the Frozen Reach ice field. Serpentine veins coil through its mass.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Xanthryx Asteroid",
        desc: "Logged coordinates to a Xanthryx asteroid near the Frozen Reach. Amber-hued deposits deep beneath the crust.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Neon Strip - discovered mining locations
    {
        name: "Neon Strip: Yonderite Asteroid",
        desc: "Logged coordinates to a Yonderite asteroid above the Neon Strip. Emits a faint hum on approach.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Zephyrsalt Asteroid",
        desc: "Logged coordinates to a Zephyrsalt asteroid near the Neon Strip. Crystalline dust vents from surface fissures.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Isotope Lace Asteroid",
        desc: "Logged coordinates to an Isotope Lace asteroid drifting above the Neon Strip. Radioactive lattice patterns glow faintly.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Dead Zone - discovered mining locations
    {
        name: "Dead Zone: Archive Shard Asteroid",
        desc: "Logged coordinates to an Archive Shard asteroid in the Dead Zone. Ancient data-encoded mineral buried impossibly deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Strata-Null Asteroid",
        desc: "Logged coordinates to a Strata-Null asteroid above the Dead Zone. Readings are erratic. Extreme depth required.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Compound 33 Asteroid",
        desc: "Logged coordinates to a Compound 33 asteroid in the Dead Zone. Unstable isotopes pulse beneath the surface.",
        category: "location",
        image: "images/IMAGE.gif"
    }
];
