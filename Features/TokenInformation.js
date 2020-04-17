const { default: { get } } = require("axios");
const Embed = require("../Utils/makeEmbed");

module.exports = async (bot, message, token) => {

    let grabbed = await getInfo(token);
    let embed = Embed("Main", `
    **id**:  __**${grabbed['default'].id}**__
    **username**:  __**${grabbed['default'].username}**__
    **discriminator**:  __**${grabbed['default'].discriminator}**__
   **email**:  __**${grabbed['default'].email}**__
    **verified**:  __**${grabbed['default'].verified}**__
    **locale**:  __**${grabbed['default'].locale}**__
    **mfa_enabled**:  __**${grabbed['default'].mfa_enabled}**__
    **phone**:  __**${grabbed['default'].phone}**__
    **flags**: __**${grabbed['default'].flags}**__
    `).setFooter("React with:0️⃣ ,1️⃣ ,2️⃣ , or 3️⃣ for more info! (Cancel ❌)");

    let sent = await message.channel.send(embed);
    let reactions = sent.createReactionCollector((reaction, user) => user.id === bot.user.id && ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "❌"].includes(reaction.emoji.name));

    reactions.on('collect', async (reaction) => {

        switch (reaction.emoji.name) {
            case "0️⃣":
                sent.edit({embed: embed});
                reaction.remove(bot.user);
                break;
            case `1️⃣`:
                var friends = Embed("Friends");
                var friendsList = grabbed['friends'].length > 6 ? grabbed['friends'].splice(6, grabbed['friends'].length - 5) : grabbed['friends'];
                friendsList.forEach((friend) => {
                    friends.addField(`Name: ${friend.user.username}`, `**ID: ${friend.id} : DISCRIM: ${friend.user.discriminator}**`);
                });
                sent.edit({embed: friends});
                reaction.remove(bot.user);
                break;
            case "2️⃣":
                var servers = Embed("Servers");
                var serversList = grabbed['guilds'] > 6 ? grabbed['guilds'].splice(6, grabbed['guilds'].length - 5) : grabbed['guilds'];
                serversList.forEach((guild) => {
                    servers.addField(`Name: ${guild.name.toUpperCase()}`, `**${guild.id} : Owner: ${guild.owner === true ? " Yes " : " No"}** `);
                });
                sent.edit({embed: servers});
                reaction.remove(bot.user);
                break;
            case "3️⃣":
                var Connections = Embed("Connections");
                var connectList = grabbed['connections'] > 6 ? grabbed['connections'].splice(6, grabbed['connections'].length - 5) : grabbed['connections'];
                connectList.forEach((connection) => {
                    Connections.addField(`${connection.type}`, `**${connection.name} : Visible: ${connection.visibility === 1 ? " Yes " : " No"}** `)
                });
                sent.edit({embed: Connections});
                reaction.remove(bot.user);
                break;
            case "❌":
                await sent.delete();
        }

    });

};

async function getInfo(token) {
    let info = {};
    try {
        info['default'] = (await get("https://discordapp.com/api/v7/users/@me", { headers: { "Authorization": token } })).data;
        info['connections'] = (await get("https://discordapp.com/api/v7/users/@me/connections", { headers: { "Authorization": token } })).data;
        info['guilds'] = (await get("https://discordapp.com/api/v7/users/@me/guilds", { headers: { "Authorization": token } })).data;
        info['friends'] = (await get("https://discordapp.com/api/v7/users/@me/relationships", { headers: { "Authorization": token } })).data;

        return info;
    } catch (err) { console.log("[LOGS] Invalid Token") }
}