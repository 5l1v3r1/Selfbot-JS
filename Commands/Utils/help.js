const Command = require("../../Classes/Command");
const chalk = require("chalk");

module.exports = class Help extends Command {

    constructor(bot) {
        super(bot, {
            name : "help",
            description : " Show's you the help menu in console. ",
            category : "Utils",
            usage : "<prefix>help",
        });
    }

    async exec(message, args) {
        await message.delete();
        let description = chalk.bgRedBright('\nWelcome to the help menu.\n');
        for (let command of this.bot.commands.map(s => s)) {
            let cmd = new command();
            description += chalk.bold.blueBright(`${cmd.name}`) + chalk.bold.redBright(`  --  `) + `${cmd.description}\n`
        }
        console.log(description);

    }

}