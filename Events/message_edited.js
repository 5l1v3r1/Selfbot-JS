const giveaway = require ("../Features/GiveawayAccepter");

module.exports = ( bot ) => {
    bot.on("messageUpdate", (oldMsg, newMsg) => {
        if (newMsg.author.bot && oldMsg.content.toLowerCase().includes("generating")) return giveaway(bot, newMsg);
    });
}