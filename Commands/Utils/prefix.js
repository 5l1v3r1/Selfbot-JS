const Command = require("../../Classes/Command");

module.exports = class Prefix extends Command {

    constructor(bot) {
        super(bot, {
            name: "prefix",
            description: "Sets the prefix for the bot.",
            category: "Utils",
            usage: "<prefix>prefix <new_prefix>"
        });
    }

    async exec(message, args) {
        await message.delete();
        if (!args.join(" ")) return console.log("[LOGS] No New Prefix Was Set");
        this.bot.prefix = args.join(" ")

    }

}