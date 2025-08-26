// Main entry for Snib Tower Defense

(function() {
    // UI Coordination
    class SnibUI {
        constructor(game) {
            this.game = game;
            this.hudHealth = document.getElementById('hud-health');
            this.hudSnibGlitter = document.getElementById('hud-snibglitter');
            this.hudStage = document.getElementById('hud-stage');
            this.hudWave = document.getElementById('hud-wave');
            this.mouse = { x: 0, y: 0 };
            this.buildMenu = document.getElementById('build-menu');
            this.messageTimeout = null;
        }

        updateHUD() {
            const lvlObj = SNIB_LEVELS[this.game.level] || { name: "End" };
            const stageObj = lvlObj.stages ? lvlObj.stages[this.game.stage] : { name: "" };
            this.hudHealth.innerHTML = `Health: <span style="color:#e33">${this.game.health}</span>`;
            this.hudSnibGlitter.innerHTML = `Snib Glitter: <span style="color:#eab70e">${this.game.snibglitter}</span>`;
            this.hudStage.innerHTML = `${lvlObj.name} <br><span style="font-size:0.97em">${stageObj.name}</span>`;
            this.hudWave.innerHTML = `Wave: ${Math.min(this.game.wave, this.game.maxWaves)}/${this.game.maxWaves}`;
        }

        showBuildMenu(unlockedTowers, snibglitter, selectCb) {
            this.buildMenu.innerHTML = `<div class="build-menu-title">Build Tower</div>`;
            for (let t of unlockedTowers) {
                this.buildMenu.innerHTML += `
                    <div class="build-menu-tower">
                        <div class="tower-info">
                            <span class="tower-name">${t.name}</span>
                            <span class="tower-cost">💰${t.cost}</span>
                            <span style="font-size:0.82em;color:#486;">${t.desc}</span>
                        </div>
                        <button class="tower-build-btn" data-key="${t.key}" ${snibglitter < t.cost ? "disabled" : ""}>Build</button>
                    </div>
                `;
            }
            this.buildMenu.classList.remove('hidden');
            // Add listeners
            Array.from(this.buildMenu.getElementsByClassName('tower-build-btn')).forEach(btn => {
                btn.onclick = () => {
                    const tower = SNIB_TOWERS.find(tt => tt.key === btn.getAttribute('data-key'));
                    selectCb(tower);
                };
            });
        }

        hideBuildMenu() {
            this.buildMenu.classList.add('hidden');
        }

        showMainMenu(msg) {
            document.getElementById('main-menu').classList.remove('hidden');
            if (msg) {
                document.getElementById('main-menu').innerHTML = `<h1>Snib Tower Defense Extravaganza</h1><div style="font-size:1.1em;margin:18px 0;">${msg}</div><button id="start-game-btn" class="menu-btn">Restart</button>`;
                document.getElementById('start-game-btn').onclick = () => {
                    document.getElementById('main-menu').classList.add('hidden');
                    this.game.resetState();
                    this.game.startGame();
                };
            }
        }

        showPauseMenu() {
            document.getElementById('pause-menu').classList.remove('hidden');
        }
        hidePauseMenu() {
            document.getElementById('pause-menu').classList.add('hidden');
        }

        showMessage(msg) {
            if (this.messageTimeout) clearTimeout(this.messageTimeout);
            let div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = '50%'; div.style.left = '50%';
            div.style.transform = 'translate(-50%, -50%)';
            div.style.background = 'rgba(255,255,230,0.95)';
            div.style.borderRadius = '18px';
            div.style.boxShadow = '0 2px 18px 0 #eee';
            div.style.padding = '30px 60px';
            div.style.fontSize = '2rem';
            div.style.fontWeight = 'bold';
            div.style.zIndex = 500;
            div.innerHTML = msg;
            document.body.appendChild(div);
            this.messageTimeout = setTimeout(() => {
                div.remove();
            }, 1250);
        }

        setupMouseTracking(canvas) {
            canvas.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                this.mouse.x = e.clientX - rect.left;
                this.mouse.y = e.clientY - rect.top;
            });
            canvas.addEventListener('mouseleave', () => {
                this.mouse.x = -10000; this.mouse.y = -10000;
            });
        }
    }

    // === Game Initialization ===

    let engine = null;
    let ui = null;

    window.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('game-canvas');
        ui = new SnibUI({});
        ui.setupMouseTracking(canvas);

        engine = new SnibGameEngine(canvas, ui);
        ui.game = engine;

        // Main menu interactions
        document.getElementById('start-game-btn').onclick = () => {
            document.getElementById('main-menu').classList.add('hidden');
            engine.startGame();
        };

        // HUD and build menu
        document.getElementById('open-build-menu').onclick = () => {
            if (!engine.placeMode) {
                ui.showBuildMenu(
                    engine.unlockedTowers,
                    engine.snibglitter,
                    tower => {
                        engine.placeMode = true;
                        engine.selectedTowerDef = tower;
                        ui.hideBuildMenu();
                    }
                );
            }
        };

        // --- START WAVE BUTTON HANDLER ---
        document.getElementById('start-wave-btn').onclick = () => {
            // Only start a new wave if one is not already in progress
            if (!engine.waveInProgress) {
                engine.nextWave();
                engine.spawnEnemies();
            }
        };

        // Pause/Resume handling
        document.getElementById('pause-btn').onclick = () => {
            if (engine.paused) return;
            engine.pause();
            ui.showPauseMenu();
        };
        document.getElementById('resume-game-btn').onclick = () => {
            ui.hidePauseMenu();
            engine.resume();
        };
        document.getElementById('quit-game-btn').onclick = () => {
            ui.hidePauseMenu();
            ui.showMainMenu('Quit to menu.');
        };

        // Keyboard controls
        window.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                if (engine.placeMode) {
                    engine.placeMode = false;
                    engine.selectedTowerDef = null;
                    ui.hideBuildMenu();
                } else if (!engine.paused) {
                    engine.pause();
                    ui.showPauseMenu();
                } else {
                    ui.hidePauseMenu();
                    engine.resume();
                }
            }
            if (e.key === "b") {
                document.getElementById('open-build-menu').click();
            }
        });

        // Main render loop for HUD/UI
        function uiLoop() {
            if (engine && engine.running) {
                ui.updateHUD();
            }
            requestAnimationFrame(uiLoop);
        }
        uiLoop();
    });
})();