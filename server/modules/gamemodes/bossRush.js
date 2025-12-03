let calculatePoints = wave => 2 + wave * 3;
// Each wave has a certain amount of "points" that it can spend on bosses, calculated above.
// Each boss costs an amount of points.
// It will always buy as many bosses until it has no points or else can't spend them.
// It picks a boss to buy by filtering the list of boss choices by if they are affordable.
// Then it picks a boss at random, with all choices being equally likely.

class BossRush {
    constructor() {
        this.b_normal = [
            //mysticals
            [  2, "sorcerer"],
            [  2, "summoner"],
            [  3, "enchantress"],
            [  4, "exorcistor"],
            [  5, "shaman"],
            //elites
            [  2, "eliteDestroyer"],
            [  2, "eliteGunner"],
            [  2, "eliteSpawner"],
            [  2, "eliteTrapGuard"],
            [  2, "eliteSkimmer"],
            [  3, "eliteBattleship"],
            [  4, "eliteSpinner"],
            [  4, "eliteSprayer"],
            //nesters
            [  4, "nestWatcher"],
            [  5, "nestKeeper"],
            [  5, "nestWarden"],
            [  5, "nestGuardian"],
            //entrestrials
            [ 10, "th"],
            [ 10, "ze"],
            [ 10, "ga"],
            [ 10, "ha"],
            [ 10, "de"],
            [ 10, "the"],
            //terrestrials
            [ 15, "ares"],
            [ 15, "gersemi"],
            [ 15, "ezekiel"],
            [ 15, "eris"],
            [ 15, "selene"],
            [ 15, "rokna"],
            //celestials
            [ 35, "paladin"],
            [ 35, "freyja"],
            [ 35, "zaphkiel"],
            [ 35, "nyx"],
            [ 35, "theia"],
            //eternals
            [100, "legionaryCrasher"],
            [100, "kronos"],
            [100, "odin"],
        ];
        this.b_mystical = [
            [  2, "sorcerer"],
            [  2, "summoner"],
            [  3, "enchantress"],
            [  4, "exorcistor"],
            [  5, "shaman"],
            [  6, "betaExorcistor"],
            [  8, "alphaExorcistor"],
        ];
        this.b_elite = [
            [  2, "eliteDestroyer"],
            [  2, "eliteGunner"],
            [  2, "eliteSpawner"],
            [  2, "eliteTrapGuard"],
            [  2, "eliteSkimmer"],
            [  3, "eliteBattleship"],
            [  4, "eliteSpinner"],
            [  4, "eliteSprayer"],
            [200, "legionaryCrasher"],
        ];
        this.b_nest = [
            [  4, "nestWatcher"],
            [  5, "nestKeeper"],
            [  5, "nestWarden"],
            [  5, "nestGuardian"],
        ];
        this.b_celestial = [
            //entrestrials
            [ 10, "th"],
            [ 10, "ze"],
            [ 10, "ga"],
            [ 10, "ha"],
            [ 10, "de"],
            [ 10, "the"],
            //terrestrials
            [ 15, "ares"],
            [ 15, "gersemi"],
            [ 15, "ezekiel"],
            [ 15, "eris"],
            [ 15, "selene"],
            [ 15, "rokna"],
            //celestials
            [ 35, "paladin"],
            [ 35, "freyja"],
            [ 35, "zaphkiel"],
            [ 35, "nyx"],
            [ 35, "theia"],
            //eternals
            [100, "legionaryCrasher"],
            [100, "kronos"],
            [100, "odin"],
        ];
        this.b_eternal = [
            [100, "legionaryCrasher"],
            [100, "kronos"],
            [100, "odin"],
        ];
        this.b_shiny= [
            [  1, "shinySentryGun"],
            [  1, "shinySentrySwarm"],
            [  1, "shinySentryTrap"],
            [ 10, "ga"],
            [ 15, "gersemi"],
            [ 35, "freyja"],
        ];
        this.b_sentry = [
            [  0.5, "sentryGun"],
            [  0.5, "sentrySwarm"],
            [  0.5, "sentryTrap"],
        ];
        this.b_shinySentry = [
            [  1, "shinySentryGun"],
            [  1, "shinySentrySwarm"],
            [  1, "shinySentryTrap"],
        ];
        this.b_crasher = [
            [  0.5, "crasher"],
            [  3, "sentryGun"],
            [  3, "sentrySwarm"],
            [  3, "sentryTrap"],
        ];
        this.friendlyBossChoices = [ [5, "roguePalisade"], [5, "rogueArmada"], [1, "julius"], [1, "genghis"], [1, "napoleon"] ];
        this.largeFodderChoices = [ "sentinelCrossbow", "sentinelLauncher", "sentinelMinigun" ];
        this.bigFodderChoices = [ "sentryGun", "sentrySwarm", "sentryTrap" ];
        this.smallFodderChoices = [ "crasher" ];
        this.length = Config.CLASSIC_SIEGE ? this.waveCodes.length : Config.WAVES;
        this.waves = this.generateWaves();
        this.waveId = -1;
        this.gameActive = true;
        this.timer = 0;
        this.remainingEnemies = 0;
        this.sanctuaryTier = 1;
        this.sanctuaries = [];
        this.leftSanctuaries = 0;
    }

    generateWaves() {
        let waves = [];
        for (let i = 0; i < this.length; i++) {
            let wave = [],
                points = calculatePoints(i)
                let choices = this.b_normal
                let r = Math.random()
                if(r<0.10 && i>39){choices = this.b_eternal;} //only eternals, idk odds lol
                if(r<0.025 && i>24){choices = this.b_celestial;} //celestial wave
                else if(r<0.05 && i>1){choices = this.b_crasher;} //crasher wave
                else if(r<0.075 && i>4){choices = this.b_sentry;} //sentry wave
                else if(r<0.1 && i>9){choices = this.b_nest;} //nest wave
                else if(r<0.15 && i>9){choices = this.b_elite;} //elite wave
                else if(r<0.25 && i>4){choices = this.b_mystical;} //mystical wave
                    //rareest waves
                else if(r<0.95 && i>9){choices = this.b_shinySentry;} // shiny sentry wave
                else if(r<0.99 && i>14){choices = this.b_shiny;} // rarest wave, all shiny color things
                else{choices = this.b_normal}

            while (points > 0 && choices.length) {
                choices = choices.filter(([ cost ]) => cost <= points);
                if (!choices.length) break;
                let [ cost, boss ] = ran.choose(choices);
                points -= cost;
                wave.push(boss);
            }

            waves.push(Config.CLASSIC_SIEGE ? this.waveCodes[i] : wave);
        }
        return waves;
    }

    spawnFriendlyBoss() {
        let o = new Entity(getSpawnableArea(TEAM_BLUE));
        let type = this.friendlyBossChoices[ran.chooseChance(...this.friendlyBossChoices.map((x) => x[0]))][1]
        o.define(type);
        o.define({ DANGER: 10 });
        o.team = TEAM_BLUE;
        o.controllers.push(new ioTypes.nearestDifferentMaster(o), new ioTypes.wanderAroundMap(0, { lookAtGoal: true }));
        o.name = ran.chooseBossName('castle');
        o.FOV = 10;
        o.settings.broadcastMessage = `${o.name} has fallen!`;
        sockets.broadcast(o.name + ' has arrived and joined your team!');
    }

    spawnSanctuary(tile, team, type = false) {
        type = type ? type : "sanctuaryTier3";
        let o = new Entity(tile.loc);
        this.defineSanctuary(o, team, type);
        this.sanctuaries.push(o);
        let spawnableArea = room.spawnable[Object.keys(room.spawnable).find((key) => room.spawnable[key].includes(tile))];
        o.on('dead', () => {
            if (o.team === TEAM_ENEMIES) {
                // Allow the player to spawn so we add it to the spawnable locations.
                room.spawnable[TEAM_BLUE].push(tile);

                this.spawnSanctuary(tile, TEAM_BLUE, `sanctuaryTier${this.sanctuaryTier}`);
                tile.color.interpret(getTeamColor(TEAM_BLUE));
                this.leftSanctuaries++;
                sockets.broadcast('A sanctuary has been repaired! ' + this.leftSanctuaries + ' sanctuaries remain.');
            } else {
                // Don't allow players to spawn at the destroyed sanctuary so we remove it from spawnable location.
                util.remove(spawnableArea, spawnableArea.indexOf(tile));

                this.spawnSanctuary(tile, TEAM_ENEMIES, "dominator");
                tile.color.interpret(getTeamColor(TEAM_ENEMIES));
                this.leftSanctuaries--;
                sockets.broadcast('A sanctuary has been destroyed! ' + this.leftSanctuaries + ' sanctuaries remain.');
            }
            sockets.broadcastRoom();
        });
    }

    defineSanctuary(entity, team, type) {
        entity.define(type);
        entity.team = team;
        entity.color.base = getTeamColor(team);
        entity.skill.score = 111069;
        entity.name = 'Sanctuary';
        entity.SIZE = room.tileWidth / 10;
        entity.isDominator = true;
        entity.nameColor = "#ffffff";
        entity.define({ DANGER: 11 });
    }

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast(getTeamName(TEAM_BLUE) + ' has won the game!');
            setTimeout(closeArena, 2500);
        }
    }

    spawnEnemyWrapper(loc, type) {
        let enemy = new Entity(loc);
        enemy.define(type);
        enemy.team = TEAM_ENEMIES;
        enemy.FOV = 10;
        enemy.refreshBodyAttributes();
        enemy.controllers.push(new ioTypes.bossRushAI(enemy));

        this.remainingEnemies++;
        enemy.on('dead', () => {
            //this enemy has been killed, decrease the remainingEnemies counter
            //if afterwards the counter happens to be 0, announce that the wave has been defeated
            if (!--this.remainingEnemies) {
                sockets.broadcast(`Wave ${this.waveId + 1} has been defeated!`);
                sockets.broadcast(`The next wave will start shortly.`);
            }
        });
        return enemy;
    }

    spawnWave(waveId) {
        //yell at everyone
        sockets.broadcast(`Wave ${waveId + 1} has started!`);

        //spawn bosses
        for (let boss of this.waves[waveId]) {
            let spot = null,
                attempts = 0;
            do {
                spot = getSpawnableArea(TEAM_ENEMIES);
            } while (dirtyCheck(spot, 500) && ++attempts < 30);

            let enemy = this.spawnEnemyWrapper(spot, boss);
            enemy.define({ DANGER: 25 + enemy.SIZE / 5 });
            enemy.isBoss = true;
        }

        if (!Config.CLASSIC_SIEGE) {
            //spawn fodder enemies
            if (waveId > 4) {
                for (let i = 0; i < this.waveId / 5; i++) {
                    this.spawnEnemyWrapper(getSpawnableArea(TEAM_ENEMIES), ran.choose(this.largeFodderChoices));
                }
            }
            for (let i = 0; i < this.waveId / 2; i++) {
                this.spawnEnemyWrapper(getSpawnableArea(TEAM_ENEMIES), ran.choose(this.bigFodderChoices));
            }
            for (let i = 0; i < this.waveId * 5; i++) {
                this.spawnEnemyWrapper(getSpawnableArea(TEAM_ENEMIES), ran.choose(this.smallFodderChoices));
            }
        }

        // Update sanctuary tiers
        let newSancTier = Math.min(Math.floor(this.waveId / 5) + 1, 6);
        if (newSancTier != this.sanctuaryTier) {
            for (let sanc of this.sanctuaries) {
                this.defineSanctuary(sanc, TEAM_BLUE, `sanctuaryTier${newSancTier}`);
            }
            sockets.broadcast(`The sanctuaries have upgraded to tier ${newSancTier}.`);
            this.sanctuaryTier = newSancTier;
        }
    }

    //runs once when the server starts
    init() {
        //Class.basic.UPGRADES_TIER_2.push("healer");
        //TODO: filter out tiles that are not of sanctuary type
        for (let tile of room.spawnable[TEAM_BLUE]) {
            this.leftSanctuaries += 1;
            this.spawnSanctuary(tile, TEAM_BLUE, "sanctuaryTier1");
        }
    }

    //runs every second
    loop() {
        //the timer has ran out? reset timer and spawn the next wave
        if (this.timer <= 0) {
            this.timer = 150; // 5 seconds
            this.waveId++;
            if (this.waves[this.waveId]) {
                this.spawnWave(this.waveId);

            // spawn a boss to help the team!
             if (this.waveId % 10 == 9) {
                //setTimeout(() => this.spawnFriendlyBoss(), 5000);
            }

            //if there is no next wave then simply let the players win
            } else {
                this.playerWin();
            }

        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (!this.remainingEnemies) {
            this.timer--;
        }
    }
}

module.exports = { BossRush };
