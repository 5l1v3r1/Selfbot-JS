const Command = require("../../Classes/Command");
const TokenInformation = require("../../Features/TokenInformation");
module.exports = class Token extends Command {

    constructor(bot) {
        super(bot, {
            name: "token",
            description: "Shows the information of a token.",
            category: "Info",
            usage: "<prefix>token <token>",
        });
    }

    async exec(message, args) {
        await message.delete();
        if (!args.join(" ")) return;
        return TokenInformation(this.bot, message, args.join(" "));

    }

}