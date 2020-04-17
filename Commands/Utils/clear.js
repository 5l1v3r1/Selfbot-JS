const Command = require("../../Classes/Command");

module.exports = class Clear extends Command {

    constructor(bot) {
        super(bot, {
            name : "clear",
            description : " Clears console so it shows logged in message ",
            category : "Utils",
            usage : "<prefix>clear",
        });
    }

    async exec(message, args) {
        await message.delete();
        console.clear();
        console.log(this.bot.startMsg);

    }

}