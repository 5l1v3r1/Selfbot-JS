let axios = require ("axios");

module.exports = (bot, message) => {

    if (!bot.config.dmAdvertise) return;
    
    if (message.channel.type !== "dm") return;
    if (message.author.id === bot.user.id) return;

    if (message.content.match(/(discord.gg|discordapp.com\/invites)\/\w+/gi)) {
        axios.default.put("https://discordapp.com/api/v6/users/@me/relationships/" + message.author.id, {type: 2}, {headers:{ authorization: bot.token}})
        .then ( () => console.log(`[LOGS] Succesfully blocked a user (${message.author.tag})`));
        return true;
    }

}