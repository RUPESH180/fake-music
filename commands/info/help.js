const discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  run: async (client, message, args) => {
    const help = new discord.MessageEmbed()

      .setTitle(`${client.user.username} HELP MENU`)

      .setThumbnail(
        message.author.displayAvatarURL({ dynamic: true, size: 1024 })
      )
      .addField("BOT PREFIX", "`!`")
      .addField(
        "MUSIC",
        "`play[p],search,pause,resume,stop,skip,skipall,skipto,nowplaying[np],queue,loop,remove,volume,24/7[24×7],join`"
      )
      .addField("Info", "help[h], botinfo")
    .addField("Developers",`stats, pfp`)

    message.channel.send(help);
  }
};
