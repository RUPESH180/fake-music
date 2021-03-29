const Discord = require("discord.js");
module.exports = {
  name: "stats",
  run: async (client, message, args) => {
    if (message.author.id !== "433227453637328897") return;
    if (args.join(" ").length > 100)
      message.channel.send("`That is too long of a message to set.`");

    if (!args[0]) return message.channel.send("please enter text");
    client.user.setActivity(`${args.join(" ")}`, { type: "WATCHING" });
    message.channel.send(`Status Seted To \n\n**${args.join(" ")}**`);
  }
};
