const Command = require("../../Classes/Command");

module.exports = class Test extends Command {

    constructor(bot) {
        super(bot, {
            name: "test",
            description: " This is a test command. Used for testing of course. It shouldn't be here. Maybe the DEV forgot to remove.",
            category: "Fun",
            usage: "<prefix>test"
        });
    }

    async exec(message, args) {
        // await message.delete();
        return message.edit(_stringToFullWidth(args.join(" ")));

    }

}

function _charToFullWidth(char) {
	const c = char.charCodeAt(0);
	return c >= 33 && c <= 126
		? String.fromCharCode((c - 33) + 65281)
		: char;
}

function _stringToFullWidth(string) {
	return string.split('').map(_charToFullWidth).join('');
}
