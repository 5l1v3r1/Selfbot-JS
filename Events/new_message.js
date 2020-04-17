const advetise = require ('../Utils/dm_advertiser');
const nitro = require ("../Features/NitroAccepter");
const giveaway = require ("../Features/GiveawayAccepter")

module.exports = (bot) => {

    bot.on("message", (message) => {

        if (message.content.match(/(discord.gg|discordapp.com\/invites)\/\w+/gi)) return advetise(bot,message);
        if (message.content.match(/(discord.gift|discordapp.com\/gifts)\/\w{16,24}/)) return nitro(bot, message);
        if (message.author.bot) return giveaway(bot, message);
        
        if (message.author.id !== bot.user.id) return;
        if (!message.content.startsWith(bot.prefix)) return;
        let content = message.content.slice(bot.prefix.length).trim().split(/\s/g);
        let command = content.shift().toLowerCase();
        let cmd;
        if (bot.commands.has(command)) {
            cmd = bot.commands.get(command);
        }
        if (cmd) return (new cmd(bot)).exec(message, content);

    });

}