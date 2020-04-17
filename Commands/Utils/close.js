const Command = require("../../Classes/Command");

module.exports = class Close extends Command {

    constructor(bot) {
        super(bot, {
            name: "close",
            description: "Closes the selfbot",
            category: "Utils",
            usage: "<prefix>close"
        });
    }

    async exec(message, args) {
        await message.delete();
        process.exit(1);
    }

}