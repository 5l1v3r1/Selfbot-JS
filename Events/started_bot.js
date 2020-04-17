module.exports = ( bot ) => {
    bot.on("ready", () => {
        console.clear();
        console.log(bot.startMsg)
    });
}