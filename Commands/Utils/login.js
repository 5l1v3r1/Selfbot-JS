const Command = require("../../Classes/Command");
const Pupet = require("puppeteer")

module.exports = class Login extends Command {

    constructor(bot) {
        super(bot, {
            name: "login",
            description: " Login to a token.",
            category: "Utils",
            usage: "<prefix>login <token>",
        });
    }

    async exec(message, args) {
        await message.delete();
        let token = args.join(" ");
        if (!token) return console.log("Sorry. No token was provided. OOF.");
        if (this.bot.chrome) await this.bot.chrome.close();

        this.bot.chrome = await Pupet.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 } });
        let page = await this.bot.chrome.newPage();
        await page.goto("https://ptb.discordapp.com/login");
        await page.evaluate((token) => {
            function singin(user_token) {
                setInterval(() => {
                    document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"${user_token}"`
                }, 50);
                setTimeout(() => {
                    location.reload();
                }, 2500);
            }

            singin(token)
        }, token);
        console.log("[LOGS] Started the discord login")
    }

}