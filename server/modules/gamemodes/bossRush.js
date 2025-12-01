let calculatePoints = wave => 3 + wave * 2;
// Each wave has a certain amount of "points" that it can spend on bosses, calculated above.
// Each boss costs an amount of points.
// It will always buy as many bosses until it has no points or else can't spend them.
// It picks a boss to buy by filtering the list of boss choices by if they are affordable.
// Then it picks a boss at random, with all choices being equally likely.

let oldGroups = {
    elites: [ "eliteDestroyer", "eliteGunner", "eliteTrapGuard", "eliteBattleship", "eliteSpawner" ], // 2 points
    mysticals: [ "sorcerer", "summoner", "enchantress", "exorcistor" ], // 2 points
    strange: [ "shaman", "eliteSkimmer", "nestKeeper", "eliteSpinner" ], // 2-3 points
    nesters: [ "nestKeeper", "nestWarden", "nestGuardian" ], // 3 points
    ohhh: [ 'th', 'ze', 'ga', 'ha', 'de', 'the'], // 5 points
    terrestrials: [ "ares", "gersemi", "ezekiel", "eris", "selene", "rokna" ], // 15 points
    celestials: [ "paladin", "freyja", "zaphkiel", "nyx", "theia" ], // 35 points
    eternals: [ "legionaryCrasher", "kronos", "odin" ], // 100 points

    
};

class BossRush {
    constructor() {
        this.waveCodes = [
            ran.chooseN(oldGroups.elites, 1),
            ran.chooseN(oldGroups.elites, 1).concat(ran.chooseN(oldGroups.mysticals, 1)),
            ran.chooseN(oldGroups.elites, 3),
            ran.chooseN(oldGroups.mysticals, 4),
            ran.chooseN(oldGroups.elites, 2).concat(ran.chooseN(oldGroups.ohhh, 1)),
            ran.chooseN(oldGroups.terrestrials, 1).concat(ran.chooseN(oldGroups.ohhh, 1)),
            ran.chooseN(oldGroups.ohhh, 1).concat(ran.chooseN(oldGroups.nesters, 2)),
            ran.chooseN(oldGroups.terrestrials, 4),
            ran.chooseN(oldGroups.elites, 1).concat(ran.chooseN(oldGroups.strange, 4)),
            ran.chooseN(oldGroups.mysticals, 1).concat(ran.chooseN(oldGroups.ohhh, 2)),
            ran.chooseN(oldGroups.elites, 3).concat(ran.chooseN(oldGroups.ohhh, 1)),
            ran.chooseN(oldGroups.elites, 4).concat(ran.chooseN(oldGroups.strange, 4)),
            ran.chooseN(oldGroups.celestials, 1),
            ran.chooseN(oldGroups.celestials, 1).concat(ran.chooseN(oldGroups.ohhh, 2)),
            [ oldGroups.celestials[2] ],
            ran.chooseN(oldGroups.celestials, 2).concat(ran.chooseN(oldGroups.ohhh, 1)),
            [ oldGroups.celestials[4] ],
            ran.chooseN(oldGroups.elites, 1).concat(ran.chooseN(oldGroups.ohhh, 1)).concat(ran.chooseN(oldGroups.celestials, 1)),
            ran.chooseN(oldGroups.mysticals, 3).concat(ran.chooseN(oldGroups.strange, 1)).concat(ran.chooseN(oldGroups.celestials, 1)),
            ran.chooseN(oldGroups.mysticals, 3).concat(ran.chooseN(oldGroups.strange, 3)).concat(ran.chooseN(oldGroups.celestials, 1)),
            ran.chooseN(oldGroups.elites, 4).concat(ran.chooseN(oldGroups.strange, 4)).concat(ran.chooseN(oldGroups.celestials, 1)),
            ran.chooseN(oldGroups.celestials, 2),
            ran.chooseN(oldGroups.elites, 1).concat(ran.chooseN(oldGroups.ohhh, 2)).concat(ran.chooseN(oldGroups.celestials, 2)),
            ran.chooseN(oldGroups.mysticals, 3).concat(ran.chooseN(oldGroups.strange, 3)).concat(ran.chooseN(oldGroups.celestials, 2)),
            ran.chooseN(oldGroups.elites, 4).concat(ran.chooseN(oldGroups.strange, 4)).concat(ran.chooseN(oldGroups.celestials, 2)),
            ran.chooseN(oldGroups.celestials, 3),
            ran.chooseN(oldGroups.elites, 3).concat(ran.chooseN(oldGroups.ohhh, 3)).concat(ran.chooseN(oldGroups.celestials, 3)),
            ran.chooseN(oldGroups.elites, 2).concat(ran.chooseN(oldGroups.ohhh, 4)).concat(ran.chooseN(oldGroups.celestials, 3)),
            ran.chooseN(oldGroups.celestials, 4),
            ran.chooseN(oldGroups.elites, 2).concat(ran.chooseN(oldGroups.strange, 2)).concat(ran.chooseN(oldGroups.celestials, 4)),
            ran.chooseN(oldGroups.mysticals, 4).concat(ran.chooseN(oldGroups.strange, 4)).concat(ran.chooseN(oldGroups.celestials, 4)),
            ran.chooseN(oldGroups.celestials, 5),
            ran.chooseN(oldGroups.nesters, 4).concat(ran.chooseN(oldGroups.celestials, 3)),
            ran.chooseN(oldGroups.elites, 2),
            ran.chooseN(oldGroups.eternals, 1),
            /*
            ran.chooseN(oldGroups.mysticals, 3).concat(ran.chooseN(oldGroups.celestials, 2)),
            ran.chooseN(oldGroups.mysticals, 2).concat(ran.chooseN(oldGroups.strange, 1)).concat(ran.chooseN(oldGroups.ohhh, 3)),
            ran.chooseN(oldGroups.elite, 5).concat(ran.chooseN(oldGroups.celestials, 2)),
            ran.chooseN(oldGroups.eternals, 1),
            ran.chooseN(oldGroups.mysticals, 3).concat(ran.chooseN(oldGroups.strange, 2)),
            */
        ];
        this.bossChoices = [
            // [ cost , definition reference ],

            //mysticals
            [  2, "sorcerer"],
            [  2, "summoner"],
            [  2, "enchantress"],
            [  2, "exorcistor"],
            [  3, "shaman"],

            //shiny
            [  6, "shinysorcerer"],
            [  6, "shinysummoner"],
            [  6, "shinyenchantress"],

            //elites
            [  2, "eliteDestroyer"],
            [  2, "eliteGunner"],
            [  3, "eliteSprayer"],
            [  2, "eliteBattleship"],
            [  2, "eliteSpawner"],
            [  2, "eliteTrapGuard"],
            [  3, "eliteSpinner"], // higher cost bc of lag (sorry)
            [  2, "eliteSkimmer"],

            //nesters
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
        this.friendlyBossChoices = [ [9, "roguePalisade"], [8, "rogueArmada"], [1, "julius"], [1, "genghis"], [1, "napoleon"] ];
        this.bigFodderChoices = ["sentryGun", "sentryTrap", "sentinelCrossbow", "sentinelMinigun", "sentinelLauncher"];
        this.ShinyFodderChoices = ["shinySentryGun", "shinySentrySwarm", "shinySentryTrap"];
        this.smallFodderChoices = ["crasher", "sentrySwarm"];
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
                points = calculatePoints(i),
                choices = this.bossChoices;

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
        entity.SIZE = room.tileWidth / 7.5;
        entity.isDominator = true;
        entity.nameColor = "#ffffff";
        entity.define({ DANGER: 11 });
    }

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast(getTeamName(TEAM_BLUE) + ' has won the game!');
            setTimeout(closeArena, 1500);
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
            for (let i = 0; i < this.waveId / 5; i++) {
                this.spawnEnemyWrapper(getSpawnableArea(TEAM_ENEMIES), ran.choose(this.bigFodderChoices));
            }
            for (let i = 0; i < this.waveId / 2; i++) {
                this.spawnEnemyWrapper(getSpawnableArea(TEAM_ENEMIES), ran.choose(this.smallFodderChoices));
            }

            if (waveId % 15 == 14) {
                setTimeout(() => this.spawnFriendlyBoss(), 5000);
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
        Class.basic.UPGRADES_TIER_2.push("healer");
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
             if (this.waveId % 15 == 14) {
                setTimeout(() => this.spawnFriendlyBoss(), 5000);
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
