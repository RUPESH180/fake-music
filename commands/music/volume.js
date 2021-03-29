module.exports = {
  name: "volume",
  aliases: ["vol", "v"],
  run: async (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) return message.channel.send("JOIN VOICE CHANNEL!");
    if (message.guild.me.voice.channel !== message.member.voice.channel) {
      return message.channel.send(
        "You Have To Be In The Same Channel With The Bot!"
      );
    }
    const serverQueue = client.queue.get(message.guild.id);
    if (!serverQueue) {
      message.channel.send("There is nothing playing!");
    }
    if (!args[0])
      return message.channel.send(
        `The current volume is: **${serverQueue.volume}**`
      );
    if (isNaN(args[0]))
        return message.channel.send("Please Give A Valid Number!")
    
if (parseInt(serverQueue.volume) === parseInt(args[0]))
        return message.channel.send("Current Volume Is The Same!");

    if (parseInt(args[0]) > 500 || args[0] < 0)
      return message.channel
        .send(
          "You can't set the volume more than 500. or lower than 0",
          message.channel
        )
        .catch(err => console.log(err));

    try {
      serverQueue.volume = args[0];
      serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 300);
      return message.channel.send(`I have set the volume to **${args[0]}**`);
    } catch {
      return message.channel.send("TRY AGAIN!");
    }
  }
};
