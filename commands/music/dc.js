const Discord = require("discord.js");
module.exports = {
  name: "leave",
  aliases: ["goaway", "disconnect", "dc"],
  category: "Music",
  description: "Leave The Voice Channel!",
  usage: "Leave",
  run: async (client, message, args) => {
    const Channel = message.member.voice.channel;

    if (!Channel) return message.channel.send("Please Join A Voice Channel!");

    if (!message.guild.me.voice)
      return message.channel.send("I Am Not In Any Voice Channel!");

    await Channel.leave();

    const Embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Success")
      .setDescription(`🎶 Left **${Channel}**`)
      .setTimestamp();

    return message.channel
      .send(Embed)
      .catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
  }
};
