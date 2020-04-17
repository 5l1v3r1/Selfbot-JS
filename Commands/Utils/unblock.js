const Command = require("../../Classes/Command");

module.exports = class UnBlock extends Command {

    constructor(bot) {
        super(bot, {
            name : "unblock",
            description : "Unblocks the user.",
            category : "Utils",
            usage : "<prefix>unblock <id>",
        });
    }

    async exec(message, args) {
        await message.delete();
        console.log(message.content);

    }

}