const sleep = (ms) => new Promise((res, rej) => setTimeout(res, ms));

module.exports = async (bot, message) => {
    if (!bot.config.giveawaySniper) return;
    if (!['Giveaway', 'Santa Wumpus', 'Giveaway Bot', 'GiveawayBot'].includes(message.author.username)) return;
    if (message.channel.type !== "text") return;

    if (message.content.toLowerCase().includes("congratulations") || message.content.toLowerCase().includes("won") || message.content.toLowerCase().includes("ended")) 
        return console.log(`[LOGS] Won A Giveaway in ${message.guild.name}`)
    

    if (message.embeds[0] && (simpleStringify(message.embeds[0]).toLowerCase().includes("giveaway") || message.content.toLowerCase().includes("giveaway"))) {
        await sleep(5000)
        await message.react("🎉");
        return console.log(`[LOGS] Reacted To A Giveaway in ${message.guild.name}`);
    }
}

function simpleStringify (object){ // Thanks Stackoverflow
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};