const Command = require("../../Classes/Command");
const { version } = require("discord.js");
const Embed = require("../../Utils/makeEmbed")
module.exports = class Info extends Command {

    constructor(bot) {
        super(bot, {
            name: "info",
            description: "Shows the sb info",
            category: "Info",
            usage: "<prefix>info",
        });
    }

    async exec(message, args) {
        await message.delete();
        const embed = Embed("Fwizzy", "", [{ 'name': "Version", "value": "2.0", "inline": true }, { "name": "Discord.js", "value": version, "inline": true }, { "name": "Nodejs", 'value': process.version }])
            .setURL("https://discordapp.com/users/486743617973649408")
            .setTimestamp()
            .setFooter("Created by: fweak#1337", "https://cdn.discordapp.com/avatars/486743617973649408/a_3379d0f89c4f9aea0195b98bd5bd15a7.png?size=256")
        message.channel.send(embed)
            .then(async (mess) => await mess.delete(5000))
    }

}