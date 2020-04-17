const Self = require ("./Classes/Client");
const config = require ("./config.json");
const client = new Self({token: config.TOKEN, prefix: "+"});

client.init();
client.start({nitroSniper: config.nitroSniper, giveawaySniper: config.giveawaySniper});