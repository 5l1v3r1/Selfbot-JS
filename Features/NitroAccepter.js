const { default: { post } } = require("axios");

module.exports = async (bot, message) => {
    if (!bot.config.nitroSniper) return;
    let code = message.content.match(/(discord.gift|discordapp.com\/gifts)\/\w{16,24}/)[0].split("/")[1];

    let response = await post(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}/redeem`, { channel_id: null, payment_source_id: null }, { headers: { authorization: bot.token } }).catch(( ) => {})
    
    if (typeof response === "undefined") return console.log(`[LOGS] Invalid Nitro Code: ${code} from ${message.guild ? message.guild.name : " Some Dm Channel "}`);
    if (response.status === 200 || response.status === 204) return console.log(`[LOGS] Claimed Nitro Code: ${code} from ${message.guild.name}`);
}
