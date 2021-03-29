const discord = require("discord.js");
const bot = new discord.Client();

module.exports = {
  name: "pfp",
    run: async (client, message, args) => {

    if (message.author.id !== "433227453637328897") return;

    let user = message.mentions.users.first();
    bot.user.setAvatar(user.displayAvatarURL);
    await message.react("✅");
    return;
    message.channel.send("done");
  }
};
