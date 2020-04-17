const { RichEmbed } = require ("discord.js");

module.exports = function ( title, description, fields ) {
    return new RichEmbed({ fields: fields, title: title, description: description, color: 0x36393F});
}