module.exports = class Command {
    constructor(bot, {
        name = "",
        description = "",
        category = "",
        usage = "",
    }) {
        this.bot = bot;
        this.name = name;
        this.description = description;
        this.category = category;
        this.usage = usage;
    }
    help() {
        return { name: this.name, description: this.description, usage: this.usage }
    }
}