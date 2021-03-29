const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  description: "Get the detailed information of bot",
  run: async (client, message, args) => {
    return message.channel.send({
      embed: {
        color: "BLUE",
        description: `**About Bot** \nSIMPLE AWESOME MUSIC BOT \n\n**DEVELOPER** \n**!    A$TRA </>  developer#6306** \n\n**SERVERS** \n**${client.guilds.cache.size}** \n\n**Members** \n**${client.users.cache.size}** \n\n**Channels** \n**${client.channels.cache.size}** \n\n**UPTIME** \n**Unlimited**`
      }
    });
  }
};
