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
client.login("OTI5NzQyNzYzMDM2MTIzMTM4.Gc43S0.XoOuPF5MKjsEy66yyTaExe7m0ij3AgNT_kIKwI");
console.log("Posted Server Count to Top.gg")
