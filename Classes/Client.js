const { Client, Collection } = require ("discord.js");
const { readdirSync } = require ('fs');

module.exports = class Self extends Client {
    constructor ( options = { token: toString(), whiteListed: [], prefix: toString(), ...arguments}) {
        super(options);
        this.token = options.token;
        this.whiteListed = options.whiteListed;
        this.prefix = options.prefix;
        this.nitroSniper = false;
        this.giveawaySniper = false;
        this.startMsg = "\n[LOGS] Succesfully started the Discord SelfBot.";
        this.config = require ("../config.json");
        this.chrome = undefined;
        this.commands = new Collection();
    }

    start(features = { nitroSniper: false, giveawaySniper: false}) {
        this.nitroSniper = features.nitroSniper;
        this.giveawaySniper = features.giveawaySniper;

        if (this.token === "" || this.token === "your-token-here") {
            console.log("[LOGS] Please add your token in config.json");
            return process.exit(1);
        }
        this.login(this.token)
        .catch( (err) => console.error(err) );
    }

    init() {
        for (let Cats of readdirSync("Commands")) {
            for (let command of readdirSync(`Commands/${Cats}`)) {
                let cmd = require (`../Commands/${Cats}/${command}`);
                this.commands.set(command.split(".js")[0], cmd);
            }
        };
        for (let Events of readdirSync("Events")) {
            require (`../Events/${Events}`)(this);
        }
    }
}