// Utility functions and constants for Snib Tower Defense

const SnibUtils = {
    clamp: function(val, min, max) {
        return Math.max(min, Math.min(val, max));
    },
    lerp: function(a, b, t) {
        return a + (b - a) * t;
    },
    randomRange: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    randomInt: function(min, max) {
        return Math.floor(SnibUtils.randomRange(min, max + 1));
    },
    angleTo: function(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    },
    dist: function(x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    },
    pick: function(arr) {
        return arr[SnibUtils.randomInt(0, arr.length - 1)];
    }
};

// Tower Definitions (adjusted for first wave balance)
// All tower damages are doubled from original values
const SNIB_TOWERS = [
    {
        key: 'basic',
        name: 'SNIB SQUIRTER',
        cost: 50,
        desc: 'Basic pea shooter. Zaps enemies with Snib energy!',
        color: 'hsl(210, 85%, 60%)',
        radius: 120,
        fireRate: 1.0, // fires every second
        damage: 44,    // DOUBLED from 22 to 44
        aoe: false,
        slow: false,
        unlockLevel: 1
    },
    {
        key: 'slow',
        name: 'TIME JELLY',
        cost: 80,
        desc: 'Slimes enemies, slowing them down.',
        color: 'hsl(120, 80%, 65%)',
        radius: 100,
        fireRate: 0.7,
        damage: 16, // DOUBLED from 8 to 16
        aoe: false,
        slow: true,
        unlockLevel: 2
    },
    {
        key: 'aoe',
        name: 'SNIB BOMBARDER',
        cost: 110,
        desc: 'Fires explosive blobs. Damages all in radius.',
        color: 'hsl(44, 90%, 56%)',
        radius: 110,
        fireRate: 0.6,
        damage: 72, // DOUBLED from 36 to 72
        aoe: true,
        slow: false,
        unlockLevel: 3
    },
    {
        key: 'laser',
        name: 'BEAMER',
        cost: 150,
        desc: 'Constant laser damage. Melts foes!',
        color: 'hsl(300, 80%, 70%)',
        radius: 140,
        fireRate: 0.12,
        damage: 16, // DOUBLED from 8 to 16
        aoe: false,
        slow: false,
        unlockLevel: 4
    },
    {
        key: 'air',
        name: 'SKY SNIB',
        cost: 120,
        desc: 'Targets only flying units!',
        color: 'hsl(195, 100%, 70%)',
        radius: 150,
        fireRate: 0.9,
        damage: 56, // DOUBLED from 28 to 56
        aoe: false,
        slow: false,
        airOnly: true,
        unlockLevel: 6
    },
    {
        key: 'spawner',
        name: 'SNIB NEST',
        cost: 200,
        desc: 'Spawns sniblets to chase enemies!',
        color: 'hsl(29, 90%, 62%)',
        radius: 0,
        fireRate: 0.3,
        damage: 0,
        aoe: false,
        slow: false,
        spawner: true,
        unlockLevel: 8
    }
];

// Enemy Definitions
const SNIB_ENEMIES = [];
// Generate 500 enemies with fun names/types
(function() {
    const baseNames = [
        "Giggletroll", "Wobblebot", "Sniblet", "Quantum Frog", "Wyrmlet",
        "Fungicorn", "Zap Goblin", "Rocket Gnome", "Dracopillar", "Bloblin",
        "Punk Pixie", "Astro Slime", "Hover Bug", "Vortex Cat", "Plasma Yak",
        "Turbowisp", "Sprocket Ogre", "Slug Mage", "Snail Knight", "Wizzbat",
        "Thunderpup", "Mecha Dwarf", "Sasquib", "Mossling", "Gnome Chopper",
        "Mimiccube", "Snibwrangler", "Chompyron", "Crabonaut", "Fizzlebutt",
        "Moon Fairy", "Cybershade", "Whirlybird", "Zap Sphinx", "Snibberwock"
    ];
    const variants = [
        "of the Nebula", "the Wobbly", "from Snibula", "of Quantum Soup",
        "of the Spaghetti Void", "the Mirthful", "the Unzappable", "of Glitterfall",
        "the Unsnibbable", "of the Cosmic Snib", "the Bananacorn", "of the Glorb",
        "from Blorptown", "of Infinite Jest", "the Overcharged", "the Drowsy",
        "the Hyperactive", "of Many Legs", "of the Noisy Marsh", "the Sassy",
        "the Shimmery", "from Outer Space", "the Quantum", "the Unruly"
    ];
    for (let i = 0; i < 500; ++i) {
        const base = SnibUtils.pick(baseNames);
        const variant = SnibUtils.pick(variants);
        // --- ADJUSTED: Lower starting health for first wave enemies ---
        // First 10 enemies (i < 10) get 20 health, then ramp up as before
        let health;
        if (i < 10) {
            health = 20;
        } else {
            health = 35 + Math.floor(i * 3.7 + SnibUtils.randomRange(-7, 14));
        }
        const speed = 0.85 + (i % 7) * 0.03 + Math.random() * 0.04;
        const type = i % 15 === 0 ? "flying" : (i % 8 === 0 ? "boss" : "ground");
        const color = `hsl(${(i*17)%360},${60+Math.floor(Math.random()*30)}%,${55+Math.floor(Math.random()*25)}%)`;
        const reward = 5 + Math.floor(i * 0.58 + (type === "boss" ? 18 : 0));
        SNIB_ENEMIES.push({
            name: `${base} ${variant}`,
            health: health,
            speed: speed,
            type: type,
            color: color,
            reward: reward,
            index: i
        });
    }
})();

// Generate Level and Stage Names
const SNIB_LEVELS = [];
(function() {
    const adjectives = [
        "Quantum", "Snibby", "Wobbly", "Mirthful", "Cosmic", "Wizened", "Glittery", "Transdimensional",
        "Goofy", "Spaghetti", "Infinite", "Glorbulous", "Hyperactive", "Drowsy", "Unzappable"
    ];
    const nouns = [
        "Forest", "Swamp", "Citadel", "Valley", "Ziggurat", "Glade", "Factory", "Canyon", "Peak",
        "Falls", "Marsh", "Jungle", "Spire", "Cavern", "Asteroid", "Snibdome"
    ];
    for (let l = 1; l <= 100; ++l) {
        const adj = SnibUtils.pick(adjectives);
        const noun = SnibUtils.pick(nouns);
        const name = `Level ${l}: ${adj} ${noun}`;
        // 10 stages per level
        const stages = [];
        for (let s = 1; s <= 10; ++s) {
            stages.push({
                name: `Stage ${s}: ${SnibUtils.pick(adjectives)} ${SnibUtils.pick(nouns)}`
            });
        }
        SNIB_LEVELS.push({ name, stages });
    }
})();

window.SnibUtils = SnibUtils;
window.SNIB_TOWERS = SNIB_TOWERS;
window.SNIB_ENEMIES = SNIB_ENEMIES;
window.SNIB_LEVELS = SNIB_LEVELS;