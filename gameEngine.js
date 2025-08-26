(function() {
    // ========== DOOM SHROOM SPRITES ==========

    const DOOM_SHROOM_WALK_FRAMES = [
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_1_1754071862306.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_2_1754071938939.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_3_1754071948607.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_4_1754071964855.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_5_1754071993560.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_6_1754072004789.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Walk_7_1754072016048.png"
    ];
    const DOOM_SHROOM_HEAL_FRAME = "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/DoomShroom_Attack_3_1754074101633.png";

    const DoomShroomSpriteLoader = {
        walk: [],
        heal: null,
        loaded: false,
        load: function(cb) {
            let loadedCount = 0;
            let total = DOOM_SHROOM_WALK_FRAMES.length + 1;
            for (let i = 0; i < DOOM_SHROOM_WALK_FRAMES.length; ++i) {
                let img = new window.Image();
                img.src = DOOM_SHROOM_WALK_FRAMES[i];
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === total) {
                        DoomShroomSpriteLoader.loaded = true;
                        cb && cb();
                    }
                };
                DoomShroomSpriteLoader.walk[i] = img;
            }
            let healImg = new window.Image();
            healImg.src = DOOM_SHROOM_HEAL_FRAME;
            healImg.onload = () => {
                loadedCount++;
                if (loadedCount === total) {
                    DoomShroomSpriteLoader.loaded = true;
                    cb && cb();
                }
            };
            DoomShroomSpriteLoader.heal = healImg;
        }
    };
    DoomShroomSpriteLoader.load();

    // ========== COINBOY SPRITES ==========

    const COINBOY_WALK_FRAMES_URLS = [
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_1_1754116562035.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_2_1754116604685.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_3_1754116819604.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_4_1754116741490.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_5_1754116834512.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_6_1754116846387.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_7_1754116945785.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_8_1754116965533.png",
        "https://dcnmwoxzefwqmvvkpqap.supabase.co/storage/v1/object/public/sprite-studio-exports/0f84fe06-5c42-40c3-b563-1a28d18f37cc/library/Coin_boy_9_1754116983128.png"
    ];

    const CoinboySpriteLoader = {
        walk: [],
        loaded: false,
        load: function(cb) {
            let loadedCount = 0;
            let total = COINBOY_WALK_FRAMES_URLS.length;
            for (let i = 0; i < COINBOY_WALK_FRAMES_URLS.length; ++i) {
                let img = new window.Image();
                img.src = COINBOY_WALK_FRAMES_URLS[i];
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === total) {
                        CoinboySpriteLoader.loaded = true;
                        cb && cb();
                    }
                };
                CoinboySpriteLoader.walk[i] = img;
            }
        }
    };
    CoinboySpriteLoader.load();

    // ========== BASE CLASSES ==========

    class SnibEnemy {
        constructor(def, path, waveNum) {
            this.name = def.name;
            this.health = def.health + waveNum * 2.1; // scaling
            this.maxHealth = this.health;
            this.speed = def.speed + waveNum * 0.008;
            this.type = def.type;
            this.color = def.color;
            this.reward = def.reward;
            this.radius = 14 + ((def.type === 'boss') ? 10 : 0);
            this.path = path;
            this.pathIndex = 0;
            this.x = path[0].x;
            this.y = path[0].y;
            this.progress = 0; // progress to next point
            this.dead = false;
            this.slowTimer = 0;
            // Doom Shroom special
            this.isDoomShroom = def && def.isDoomShroom;
            // Coinboy special
            this.isCoinboy = def && def.isCoinboy;
        }
        update(dt) {
            let s = this.speed * (this.slowTimer > 0 ? 0.45 : 1.0);
            let cur = this.path[this.pathIndex];
            let next = this.path[this.pathIndex + 1];
            if (!next) return;
            let dx = next.x - cur.x, dy = next.y - cur.y;
            let dist = Math.hypot(dx, dy);
            let move = dt * s * 60;
            this.progress += move;
            if (this.progress >= dist) {
                this.pathIndex++;
                if (this.pathIndex >= this.path.length - 1) {
                    this.x = next.x; this.y = next.y;
                    return;
                }
                this.progress -= dist;
                cur = this.path[this.pathIndex];
                next = this.path[this.pathIndex + 1];
                dx = next.x - cur.x; dy = next.y - cur.y;
                dist = Math.hypot(dx, dy);
            }
            let t = this.progress / dist;
            this.x = SnibUtils.lerp(cur.x, next.x, t);
            this.y = SnibUtils.lerp(cur.y, next.y, t);
            if (this.slowTimer > 0) this.slowTimer = Math.max(0, this.slowTimer - dt);
        }
        isAtEnd() {
            return this.pathIndex >= this.path.length - 1;
        }
        takeDamage(dmg) {
            this.health -= dmg;
            if (this.health <= 0 && !this.dead) {
                this.dead = true;
                return true; // killed
            }
            return false;
        }
        applySlow() {
            this.slowTimer = 1.1; // slowed for 1.1 seconds
        }
    }

    // ========== DOOM SHROOM ENEMY CLASS ==========

    class DoomShroomEnemy extends SnibEnemy {
        constructor(def, path, waveNum) {
            super(def, path, waveNum);
            this.isDoomShroom = true;
            this.walkAnim = 0;
            this.healTimer = 0;
            this.healCooldown = 3.5 + Math.random(); // seconds between heals
            this.healing = false;
            this.healAnimTimer = 0;
            this.radius = 22;
        }
        update(dt, allEnemies) {
            // Movement
            super.update(dt);

            // Animation
            this.walkAnim += dt * 7 * (this.slowTimer > 0 ? 0.6 : 1.0);

            // Healing logic
            if (this.healing) {
                this.healAnimTimer += dt;
                if (this.healAnimTimer > 0.7) {
                    this.healing = false;
                    this.healAnimTimer = 0;
                }
            } else {
                this.healTimer += dt;
                if (this.healTimer >= this.healCooldown) {
                    this.healTimer = 0;
                    this.healing = true;
                    this.healAnimTimer = 0;
                    this.healCooldown = 3.5 + Math.random();
                    // Heal self and nearby enemies
                    let healed = false;
                    if (this.health < this.maxHealth) {
                        this.health = Math.min(this.maxHealth, this.health + 16 + Math.floor(this.maxHealth * 0.08));
                        healed = true;
                    }
                    if (allEnemies) {
                        for (let e of allEnemies) {
                            if (e !== this && !e.dead && SnibUtils.dist(this.x, this.y, e.x, e.y) < 80) {
                                if (e.health < e.maxHealth) {
                                    e.health = Math.min(e.maxHealth, e.health + 12 + Math.floor(e.maxHealth * 0.05));
                                    healed = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // ========== COINBOY ENEMY CLASS ==========

    class CoinboyEnemy extends SnibEnemy {
        constructor(def, path, waveNum, playerRef) {
            super(def, path, waveNum);
            this.isCoinboy = true;
            this.walkAnim = 0;
            this.radius = 20;
            this._walkDir = 1; // 1 = forward, -1 = backward
            this._walkTime = 0;
            this._walkSwitchTime = 1.2 + Math.random() * 1.5;
            this._rollTimer = 0;
            this._rolling = false;
            this._rollCooldown = 1.5 + Math.random() * 2.5;
            this._rollDir = 1;
            this._rollAnim = 0;
            this._rollTarget = null;
            this._rollAngle = 0;
            this._playerRef = playerRef; // not used, but can be for future
            this._lastPlayerPos = null;
            this._rollSpeed = 6.5 + waveNum * 0.08;
            this._normalSpeed = this.speed;
            this._rollStartX = this.x;
            this._rollStartY = this.y;
            this._rollDist = 0;
            this._rollMaxDist = 0;
        }
        update(dt, allEnemies, playerPos) {
            if (this.dead) return;
            // If rolling, rush toward player
            if (this._rolling) {
                // Rolling animation
                this._rollAnim += dt * 12;
                // Move toward last known player position
                if (!this._rollTarget && playerPos) {
                    this._rollTarget = { x: playerPos.x, y: playerPos.y };
                    this._rollAngle = Math.atan2(this._rollTarget.y - this.y, this._rollTarget.x - this.x);
                    this._rollStartX = this.x;
                    this._rollStartY = this.y;
                    this._rollDist = 0;
                    this._rollMaxDist = Math.min(220, SnibUtils.dist(this.x, this.y, this._rollTarget.x, this._rollTarget.y));
                }
                let move = this._rollSpeed * dt * 60;
                this.x += Math.cos(this._rollAngle) * move;
                this.y += Math.sin(this._rollAngle) * move;
                this._rollDist += move;
                // End roll if reached max distance or close to target
                if (this._rollDist >= this._rollMaxDist || (this._rollTarget && SnibUtils.dist(this.x, this.y, this._rollTarget.x, this._rollTarget.y) < 18)) {
                    this._rolling = false;
                    this._rollAnim = 0;
                    this._rollTarget = null;
                    this._rollTimer = 0;
                    this._rollCooldown = 1.5 + Math.random() * 2.5;
                }
            } else {
                // Walking: move back and forth along a short segment (simulate "patrol")
                this._walkAnim += dt * 7;
                this._walkTime += dt;
                let cur = this.path[this.pathIndex];
                let next = this.path[this.pathIndex + 1];
                if (!next) return;
                let dx = next.x - cur.x, dy = next.y - cur.y;
                let dist = Math.hypot(dx, dy);
                let move = dt * this._normalSpeed * 60 * this._walkDir;
                this.progress += move;
                if (this.progress >= dist) {
                    this.progress = dist;
                    this._walkDir = -1;
                } else if (this.progress <= 0) {
                    this.progress = 0;
                    this._walkDir = 1;
                }
                let t = this.progress / dist;
                this.x = SnibUtils.lerp(cur.x, next.x, t);
                this.y = SnibUtils.lerp(cur.y, next.y, t);

                // At random intervals, start rolling toward player
                this._rollTimer += dt;
                if (this._rollTimer > this._rollCooldown && playerPos) {
                    this._rolling = true;
                    this._rollAnim = 0;
                    this._rollTarget = null;
                    this._rollTimer = 0;
                }
            }
            if (this.slowTimer > 0) this.slowTimer = Math.max(0, this.slowTimer - dt);
        }
        isAtEnd() {
            // Coinboy never leaves the path, always patrols first segment
            return false;
        }
        takeDamage(dmg) {
            this.health -= dmg;
            if (this.health <= 0 && !this.dead) {
                this.dead = true;
                return true;
            }
            return false;
        }
        applySlow() {
            this.slowTimer = 1.1;
            this._rollSpeed *= 0.45;
            setTimeout(() => {
                this._rollSpeed = 6.5;
            }, 1100);
        }
    }

    // ========== TOWER, PROJECTILE, MINION, PATH CLASSES (unchanged) ==========

    class SnibTower {
        constructor(def, x, y) {
            this.def = def;
            this.x = x;
            this.y = y;
            this.cooldown = 0;
            this.radius = def.radius;
            this.target = null;
            this.projectiles = [];
            this.spawnTimer = 0;
            this.spawned = [];
            // --- ADDED: firing visual state ---
            this.firingVisualTimer = 0;
        }
        update(dt, enemies, addProjectile, game) {
            if (this.def.spawner) {
                this.spawnTimer -= dt;
                if (this.spawnTimer <= 0) {
                    this.spawned.push(new SnibMinion(this.x, this.y));
                    this.spawnTimer = 1.6;
                }
                for (let i = this.spawned.length - 1; i >= 0; --i) {
                    const minion = this.spawned[i];
                    minion.update(dt, enemies);
                    if (minion.dead) this.spawned.splice(i, 1);
                }
                return;
            }
            this.cooldown -= dt;
            if (this.cooldown <= 0) {
                // Find target
                let targets = enemies.filter(e => !e.dead);
                let nearest = null, dist = 99999;
                for (let e of targets) {
                    let d = SnibUtils.dist(this.x, this.y, e.x, e.y);
                    if (d < this.def.radius && d < dist) {
                        nearest = e;
                        dist = d;
                    }
                }
                if (nearest) {
                    this.target = nearest;
                    if (this.def.aoe) {
                        for (let e of enemies) {
                            if (!e.dead && SnibUtils.dist(this.x, this.y, e.x, e.y) <= 36)
                                e.takeDamage(this.def.damage);
                        }
                        addProjectile(this.x, this.y, nearest.x, nearest.y, this.def.color, true);
                    } else if (this.def.slow) {
                        nearest.applySlow();
                        addProjectile(this.x, this.y, nearest.x, nearest.y, this.def.color, false, true);
                    } else if (this.def.fireRate < 0.2) {
                        nearest.takeDamage(this.def.damage);
                        addProjectile(this.x, this.y, nearest.x, nearest.y, this.def.color, false, false, true);
                    } else {
                        nearest.takeDamage(this.def.damage);
                        addProjectile(this.x, this.y, nearest.x, nearest.y, this.def.color);
                    }
                    this.cooldown = 1.0 / this.def.fireRate;
                    this.firingVisualTimer = 0.18;
                }
            }
            if (this.firingVisualTimer > 0) {
                this.firingVisualTimer -= dt;
                if (this.firingVisualTimer < 0) this.firingVisualTimer = 0;
            }
            for (let i = this.projectiles.length - 1; i >= 0; --i) {
                const p = this.projectiles[i];
                p.update(dt);
                if (p.done) this.projectiles.splice(i, 1);
            }
        }
        render(ctx) {
            let baseColor = this.def.color;
            let firing = this.firingVisualTimer > 0;
            let drawColor = baseColor;
            if (firing) {
                let hslMatch = baseColor.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
                if (hslMatch) {
                    let h = (parseInt(hslMatch[1], 10) + 60) % 360;
                    let s = hslMatch[2];
                    let l = Math.min(96, parseInt(hslMatch[3], 10) + 18);
                    drawColor = `hsl(${h},${s}%,${l}%)`;
                } else {
                    drawColor = "#ffe066";
                }
            }
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.shadowColor = drawColor;
            ctx.shadowBlur = 9 + (firing ? 8 : 0);
            ctx.beginPath();
            ctx.arc(0, 0, 22, 0, 2 * Math.PI);
            ctx.fillStyle = drawColor;
            ctx.globalAlpha = firing ? 1 : 0.9;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#fff";
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, 15, 0, 2 * Math.PI);
            ctx.fillStyle = "#fff";
            ctx.globalAlpha = firing ? 0.7 : 0.5;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();

            for (let p of this.projectiles) p.render(ctx);
            if (this.def.spawner) {
                for (let m of this.spawned) m.render(ctx);
            }
        }
    }

    class SnibProjectile {
        constructor(x, y, tx, ty, color, aoe = false, slow = false, laser = false) {
            this.x = x; this.y = y;
            this.tx = tx; this.ty = ty;
            this.color = color;
            this.t = 0;
            this.aoe = aoe;
            this.slow = slow;
            this.laser = laser;
            this.done = false;
        }
        update(dt) {
            this.t += dt * (this.aoe ? 2.4 : this.slow ? 2.0 : this.laser ? 6.5 : 4.7);
            if (this.t >= 1) this.done = true;
        }
        render(ctx) {
            if (this.laser) {
                ctx.save();
                ctx.strokeStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 10;
                ctx.lineWidth = 4 + Math.sin(Date.now()/60)*1.5;
                ctx.globalAlpha = 0.76;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.tx, this.ty);
                ctx.stroke();
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
                ctx.restore();
                return;
            }
            ctx.save();
            ctx.beginPath();
            ctx.arc(
                SnibUtils.lerp(this.x, this.tx, this.t), 
                SnibUtils.lerp(this.y, this.ty, this.t), 
                this.aoe ? 20 : this.slow ? 12 : 9, 
                0, 2 * Math.PI
            );
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.aoe ? 0.3 : this.slow ? 0.5 : 0.8;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = this.aoe ? 25 : 10;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            ctx.restore();
        }
    }

    class SnibMinion {
        constructor(x, y) {
            this.x = x; this.y = y;
            this.target = null;
            this.speed = 2.6;
            this.radius = 7;
            this.dead = false;
            this.lifetime = 6.0;
        }
        update(dt, enemies) {
            if (this.dead) return;
            if (!this.target || this.target.dead || this.target.isAtEnd()) {
                let candidates = enemies.filter(e => !e.dead && !e.isAtEnd());
                if (candidates.length === 0) return;
                this.target = SnibUtils.pick(candidates);
            }
            if (this.target) {
                let dx = this.target.x - this.x;
                let dy = this.target.y - this.y;
                let dist = Math.hypot(dx, dy);
                if (dist < 12) {
                    this.target.takeDamage(7);
                    this.dead = true;
                    return;
                }
                let move = this.speed * dt * 60;
                this.x += (dx / dist) * move;
                this.y += (dy / dist) * move;
            }
            this.lifetime -= dt;
            if (this.lifetime <= 0) this.dead = true;
        }
        render(ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            ctx.fillStyle = "hsl(29, 90%, 62%)";
            ctx.shadowColor = "hsl(29, 90%, 62%)";
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 0.7;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3.5, 0, 2 * Math.PI);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();
        }
    }

    class SnibPath {
        constructor(points) {
            this.points = points;
        }
        draw(ctx) {
            ctx.save();
            ctx.lineWidth = 26;
            ctx.strokeStyle = "#c8e6e6";
            ctx.globalAlpha = 0.49;
            ctx.lineCap = "round";
            ctx.shadowColor = "#67b";
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 1; i < this.points.length; ++i) {
                ctx.lineTo(this.points[i].x, this.points[i].y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            ctx.lineWidth = 9;
            ctx.strokeStyle = "#ffd";
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 1; i < this.points.length; ++i) {
                ctx.lineTo(this.points[i].x, this.points[i].y);
            }
            ctx.stroke();
            ctx.restore();
        }
    }

    // ========== GAME ENGINE ==========

    class SnibGameEngine {
        constructor(canvas, ui) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.ui = ui;
            this.running = false;
            this.lastTime = 0;
            this.deltaTime = 0;
            this.width = canvas.width;
            this.height = canvas.height;

            this.level = 0;
            this.stage = 0;
            this.wave = 0;
            this.health = 20;
            this.snibglitter = 100;
            this.maxWaves = 10;
            this.waveEnemies = [];
            this.towers = [];
            this.projectiles = [];
            this.spawnTimer = 0;
            this.waveInProgress = false;
            this.bossSpawned = false;
            this.path = null;
            this.paused = false;
            this.placeMode = false;
            this.selectedTowerDef = null;
            this.snibGlitterParticles = [];
            this.unlockedTowers = [SNIB_TOWERS[0]];

            this.gridSize = 36;
            this.paths = this.generateAllPaths();
            this.initPath();

            this.setupInput();
        }

        startGame() {
            this.resetState();
            this.running = true;
            this.lastTime = performance.now();
            this.gameLoop(this.lastTime);
        }

        resetState() {
            this.level = 0;
            this.stage = 0;
            this.wave = 0;
            this.health = 20;
            this.snibglitter = 100;
            this.towers = [];
            this.unlockedTowers = [SNIB_TOWERS[0]];
            this.bossSpawned = false;
            this.snibGlitterParticles = [];
            this.initPath();
            this.waveEnemies = [];
            this.waveInProgress = false;
        }

        pause() {
            this.paused = true;
        }
        resume() {
            this.paused = false;
            this.lastTime = performance.now();
            this.gameLoop(this.lastTime);
        }

        advanceStage() {
            this.stage++;
            this.wave = 0;
            this.bossSpawned = false;
            this.towers.forEach(t => t.cooldown = 0);
            if (this.stage >= SNIB_LEVELS[this.level].stages.length) {
                this.advanceLevel();
            } else {
                this.initPath();
                this.waveEnemies = [];
                this.waveInProgress = false;
            }
        }

        advanceLevel() {
            this.level++;
            this.stage = 0;
            this.wave = 0;
            this.bossSpawned = false;
            for (let t of SNIB_TOWERS) {
                if (t.unlockLevel <= this.level + 1 && !this.unlockedTowers.includes(t)) {
                    this.unlockedTowers.push(t);
                }
            }
            this.towers = [];
            this.initPath();
            this.waveEnemies = [];
            this.waveInProgress = false;
            this.snibglitter += 80 + (this.level * 20);
        }

        generateAllPaths() {
            const w = this.width, h = this.height - 70;
            let paths = [];
            for (let i = 0; i < 10; ++i) {
                let points = [];
                let x = 60 + SnibUtils.randomRange(0, 40);
                let y = 90 + SnibUtils.randomRange(0, 30);
                points.push({ x, y });
                let count = 6 + SnibUtils.randomInt(0, 3);
                for (let j = 1; j < count; ++j) {
                    x += (w - 120) / count + SnibUtils.randomRange(-25, 25);
                    y = 90 + Math.sin(j / count * Math.PI * 1.2 + i * 0.7) * (h / 3) + SnibUtils.randomRange(-40, 40);
                    x = SnibUtils.clamp(x, 60, w - 60);
                    y = SnibUtils.clamp(y, 80, h - 36);
                    points.push({ x, y });
                }
                points.push({ x: w - 60, y: h - 30 });
                paths.push(new SnibPath(points));
            }
            return paths;
        }

        initPath() {
            this.path = this.paths[(this.stage + this.level) % this.paths.length];
        }

        setupInput() {
            this.canvas.addEventListener('mousedown', e => {
                if (this.placeMode && this.selectedTowerDef) {
                    const rect = this.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    if (!this.isNearPath(x, y, 40) && !this.isTowerAt(x, y, 38)) {
                        if (this.snibglitter >= this.selectedTowerDef.cost) {
                            this.snibglitter -= this.selectedTowerDef.cost;
                            this.towers.push(new SnibTower(this.selectedTowerDef, x, y));
                            this.placeMode = false;
                            this.selectedTowerDef = null;
                            this.ui.hideBuildMenu();
                        }
                    }
                }
            });
        }

        isNearPath(x, y, radius) {
            for (let i = 0; i < this.path.points.length - 1; ++i) {
                let a = this.path.points[i], b = this.path.points[i + 1];
                let px = a.x, py = a.y, qx = b.x, qy = b.y;
                let dx = qx - px, dy = qy - py;
                let l2 = dx*dx + dy*dy;
                let t = ((x - px) * dx + (y - py) * dy) / (l2 || 1);
                t = Math.max(0, Math.min(1, t));
                let nx = px + t * dx, ny = py + t * dy;
                let dist = Math.hypot(x - nx, y - ny);
                if (dist < radius) return true;
            }
            return false;
        }

        isTowerAt(x, y, minDist) {
            for (let t of this.towers) {
                if (SnibUtils.dist(x, y, t.x, t.y) < minDist) return true;
            }
            return false;
        }

        nextWave() {
            this.wave++;
            this.waveInProgress = true;
            this.bossSpawned = false;
            this.spawnTimer = 0;
        }

        spawnEnemies() {
            // Replace all colored bubbles with Coinboy
            const baseCount = 6 + Math.floor(this.wave * 1.4);
            for (let i = 0; i < baseCount; ++i) {
                let def = {
                    name: "Coinboy",
                    health: 60 + this.wave * 7,
                    speed: 1.1 + this.wave * 0.008,
                    type: "ground",
                    color: "#f6c94a",
                    reward: 15 + Math.floor(this.wave * 2.5),
                    isCoinboy: true
                };
                this.waveEnemies.push(new CoinboyEnemy(def, this.path.points, this.wave, null));
            }
            if (this.wave >= this.maxWaves && !this.bossSpawned) {
                // Boss is a big Coinboy
                let def = {
                    name: "Coinboy Boss",
                    health: 240 + this.wave * 14,
                    speed: 1.2 + this.wave * 0.012,
                    type: "boss",
                    color: "#e5b600",
                    reward: 60 + Math.floor(this.wave * 4.5),
                    isCoinboy: true
                };
                this.waveEnemies.push(new CoinboyEnemy(def, this.path.points, this.wave, null));
                this.bossSpawned = true;
            }
        }

        removeDeadEnemies() {
            this.waveEnemies = this.waveEnemies.filter(e => !e.dead && !e.isAtEnd());
        }

        update(dt) {
            if (!this.running || this.paused) return;

            if (this.waveInProgress && this.waveEnemies.length === 0) {
                if (this.wave === 0 || (this.bossSpawned && this.wave >= this.maxWaves)) {
                } else {
                    this.nextWave();
                    this.spawnEnemies();
                }
            }

            // "Player" position: use the last tower placed, or center if none
            let playerPos = null;
            if (this.towers.length > 0) {
                let lastTower = this.towers[this.towers.length - 1];
                playerPos = { x: lastTower.x, y: lastTower.y };
            } else {
                playerPos = { x: this.width / 2, y: this.height / 2 };
            }

            for (let e of this.waveEnemies) {
                if (e.isDoomShroom) {
                    e.update(dt, this.waveEnemies);
                } else if (e.isCoinboy) {
                    e.update(dt, this.waveEnemies, playerPos);
                } else {
                    e.update(dt);
                }
                if (e.isAtEnd() && !e.dead) {
                    e.dead = true;
                    this.health -= 1;
                }
            }

            if (!this._snibGlitterAwarded) this._snibGlitterAwarded = new WeakSet();
            for (let e of this.waveEnemies) {
                if (e.dead && !e.isAtEnd() && !this._snibGlitterAwarded.has(e)) {
                    this.snibglitter += e.reward;
                    this.addSnibGlitterExplosion(e.x, e.y, e.reward);
                    this._snibGlitterAwarded.add(e);
                }
            }

            this.removeDeadEnemies();

            for (let t of this.towers) {
                t.update(dt, this.waveEnemies, (...args) => this.addProjectile(...args), this);
            }

            for (let i = this.projectiles.length - 1; i >= 0; --i) {
                let p = this.projectiles[i];
                p.update(dt);
                if (p.done) this.projectiles.splice(i, 1);
            }

            for (let i = this.snibGlitterParticles.length - 1; i >= 0; --i) {
                let p = this.snibGlitterParticles[i];
                p.x += p.vx * dt * 60;
                p.y += p.vy * dt * 60 + 0.24;
                p.life -= dt;
                if (p.life <= 0) this.snibGlitterParticles.splice(i, 1);
            }

            if (this.health <= 0) {
                this.running = false;
                setTimeout(() => {
                    this.ui.showMainMenu('Game Over! You ran out of health.<br>Score: ' + this.snibglitter);
                }, 800);
            } else if (this.wave > this.maxWaves && this.waveEnemies.length === 0) {
                this.ui.showMessage('Stage Complete! 🎉');
                setTimeout(() => {
                    this.advanceStage();
                }, 1600);
            }
        }

        addProjectile(x, y, tx, ty, color, aoe, slow, laser) {
            this.projectiles.push(new SnibProjectile(x, y, tx, ty, color, aoe, slow, laser));
        }

        addSnibGlitterExplosion(x, y, amount) {
            for (let i = 0; i < Math.min(18, amount / 2); ++i) {
                let a = Math.random() * Math.PI * 2;
                let r = SnibUtils.randomRange(11, 36);
                this.snibGlitterParticles.push({
                    x: x, y: y,
                    vx: Math.cos(a) * r * 0.11,
                    vy: Math.sin(a) * r * 0.11,
                    life: 0.6 + Math.random() * 0.6,
                    color: 'hsl(44, 90%, 56%)',
                    size: 6 + Math.random() * 4
                });
            }
        }

        render() {
            const ctx = this.ctx;
            ctx.clearRect(0, 0, this.width, this.height);

            // --- BG clouds ---
            for (let i = 0; i < 12; ++i) {
                let t = Date.now() / 1200 + i * 2.1;
                let x = (this.width / 12) * i + Math.sin(t) * 30;
                let y = 60 + Math.sin(t * 0.6) * 11;
                ctx.save();
                ctx.globalAlpha = 0.10 + 0.09 * Math.sin(t);
                ctx.beginPath();
                ctx.ellipse(x, y, 40 + 14 * Math.sin(t), 20 + 5 * Math.cos(t), 0, 0, 2 * Math.PI);
                ctx.fillStyle = "#f5faff";
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 22;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.globalAlpha = 1;
                ctx.restore();
            }

            this.path.draw(ctx);

            for (let t of this.towers) t.render(ctx);

            for (let p of this.projectiles) p.render(ctx);

            for (let e of this.waveEnemies) {
                if (e.dead) continue;
                ctx.save();

                if (e.isDoomShroom && DoomShroomSpriteLoader.loaded) {
                    // Animation: walk or heal
                    if (e.healing) {
                        // Healing animation: flip left/right
                        let flip = Math.floor(e.healAnimTimer * 8) % 2 === 0;
                        ctx.save();
                        ctx.translate(e.x, e.y);
                        ctx.scale(flip ? 1 : -1, 1);
                        ctx.globalAlpha = 1;
                        ctx.drawImage(DoomShroomSpriteLoader.heal, -32, -38, 64, 76);
                        ctx.restore();

                        // Draw healing effect
                        ctx.save();
                        ctx.globalAlpha = 0.33 + 0.18 * Math.sin(Date.now()/90);
                        ctx.beginPath();
                        ctx.arc(e.x, e.y + 10, 36 + 9 * Math.sin(Date.now()/120), 0, 2 * Math.PI);
                        ctx.fillStyle = "#b2ffb2";
                        ctx.shadowColor = "#7fff7f";
                        ctx.shadowBlur = 18;
                        ctx.fill();
                        ctx.shadowBlur = 0;
                        ctx.restore();
                    } else {
                        // Walking animation
                        let frameIdx = Math.floor(e.walkAnim) % DoomShroomSpriteLoader.walk.length;
                        ctx.save();
                        ctx.translate(e.x, e.y);
                        ctx.drawImage(DoomShroomSpriteLoader.walk[frameIdx], -32, -38, 64, 76);
                        ctx.restore();
                    }
                    // Health bar
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(e.x - 18, e.y - 46, 36, 7);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                    ctx.beginPath();
                    ctx.rect(e.x - 18, e.y - 46, 36 * (e.health / e.maxHealth), 7);
                    ctx.fillStyle = "#2c2";
                    ctx.fill();
                    ctx.restore();
                } else if (e.isCoinboy && CoinboySpriteLoader.loaded) {
                    // Coinboy rendering
                    let frameIdx;
                    let angle = 0;
                    let scale = 1;
                    if (e._rolling) {
                        // Attack animation: rotate each frame by 45deg more
                        frameIdx = Math.floor(e._rollAnim) % CoinboySpriteLoader.walk.length;
                        angle = (frameIdx * Math.PI / 4); // 45deg per frame
                        scale = 1.13;
                    } else {
                        frameIdx = Math.floor(e.walkAnim) % CoinboySpriteLoader.walk.length;
                        angle = 0;
                        scale = 1.0;
                    }
                    ctx.save();
                    ctx.translate(e.x, e.y);
                    ctx.rotate(angle);
                    ctx.scale(e._walkDir < 0 ? -scale : scale, scale);
                    ctx.drawImage(CoinboySpriteLoader.walk[frameIdx], -32, -32, 64, 64);
                    ctx.restore();

                    // Health bar
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(e.x - 16, e.y - 38, 32, 6);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                    ctx.beginPath();
                    ctx.rect(e.x - 16, e.y - 38, 32 * (e.health / e.maxHealth), 6);
                    ctx.fillStyle = "#f6c94a";
                    ctx.fill();
                    ctx.restore();
                } else {
                    ctx.beginPath();
                    ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI);
                    ctx.fillStyle = e.color;
                    ctx.shadowColor = e.color;
                    ctx.shadowBlur = 15;
                    ctx.globalAlpha = 0.85;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = "#fff";
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    // Health bar
                    ctx.beginPath();
                    ctx.rect(e.x - 13, e.y - e.radius - 16, 26, 5);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                    ctx.beginPath();
                    ctx.rect(e.x - 13, e.y - e.radius - 16, 26 * (e.health / e.maxHealth), 5);
                    ctx.fillStyle = "#2c2";
                    ctx.fill();
                }
                ctx.restore();
            }

            // Snib Glitter particles
            for (let p of this.snibGlitterParticles) {
                ctx.save();
                ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 1.2));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 12;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.globalAlpha = 1;
                ctx.restore();
            }

            // Placement preview
            if (this.placeMode && this.selectedTowerDef) {
                let mx = this.ui.mouse.x, my = this.ui.mouse.y;
                let valid = !this.isNearPath(mx, my, 40) && !this.isTowerAt(mx, my, 38) && this.snibglitter >= this.selectedTowerDef.cost;
                ctx.save();
                ctx.globalAlpha = valid ? 0.7 : 0.3;
                ctx.beginPath();
                ctx.arc(mx, my, 22, 0, 2 * Math.PI);
                ctx.fillStyle = this.selectedTowerDef.color;
                ctx.shadowColor = this.selectedTowerDef.color;
                ctx.shadowBlur = 9;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.globalAlpha = 0.15;
                ctx.beginPath();
                ctx.arc(mx, my, this.selectedTowerDef.radius, 0, 2 * Math.PI);
                ctx.fillStyle = "#000";
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.restore();
            }
        }

        gameLoop(now) {
            if (!this.running) return;
            this.deltaTime = Math.min(0.045, (now - this.lastTime) / 1000);
            this.lastTime = now;
            this.update(this.deltaTime);
            this.render();
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    window.SnibGameEngine = SnibGameEngine;
})();