module.exports = (bot) => {
    bot.on("channelCreate", (channel) => {
        if (bot.config.channelFirst) {
            if (channel.type === "text" && channel.memberPermissions(channel.guild.me).has("SEND_MESSAGES")) {

                console.log(`[LOGS] ${channel.name} was created in: ${channel.guild ? channel.guild.name : " Idk "} at: ${new Date().toLocaleTimeString() + ` ${new Date().toLocaleDateString()}`}`);

                channel.send("Hello. Its fweak :D").catch(() => { return console.log(`[LOGS] Couldn't send a message in: ${channel.name} located: ${channel.guild ? channel.guild.name : " Idk "} at ${new Date().toLocaleTimeString() + ` ${new Date().toLocaleDateString()}`} `) });

                console.log(`[LOGS] Sent a message in: ${channel.name} located: ${channel.guild ? channel.guild.name : " Idk "} at ${new Date().toLocaleTimeString() + ` ${new Date().toLocaleDateString()}`} `)
            }
        }
    });
}