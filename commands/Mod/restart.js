const discord = require("discord.js");
const bot = new discord.Client();
module.exports = {
  name: "reboot",
  run: async (client, message, args) => {
    if (message.author.id !== "433227453637328897")
      return; await message.channel.send("`⚠️ Restarting...`").then(message => message.delete(1))
    await message.channel.send("`✅ Restart complete.`");
    await process.exit()
  }
};
