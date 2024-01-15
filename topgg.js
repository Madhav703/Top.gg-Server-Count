const Discord = require("discord.js");
const { Intents } = require("discord.js");
const Topgg = require("@top-gg/sdk");
const client = new Discord.Client({ intents: 46827 });
client.topggapi = new Topgg.Api("topgg api key here");
client.on("ready", async () => {
  setInterval(async () => {
    await client.topggapi.postStats({
      serverCount: client.guilds.cache.size,
    });
  }, 1000 * 5)

});
client.login("add your bot token here");
console.log("Posted Server Count to Top.gg")
