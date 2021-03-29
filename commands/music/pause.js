module.exports = {
  name: "pause",
  run: async (client, message, args) => {
    const serverQueue = client.queue.get(message.guild.id);
    const { channel } = message.member.voice;
    try {
      if (!channel)
        return message.channel.send(
          "YOU NEED TO JOIN VOICE CHANNEL FIRST!"
        );
      if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send(
          "YOU HAVE TO BE IN SAME VOICE CHANNEL"
        );
      }
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause(true);
        return message.channel.send({
          embed: {
            color: "BLUE",
            description: `**⏸ SONG PAUSED BY ${message.author}**`
          }
        });
      }
      return message.channel.send("**There is Nothing Playing!**");
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
    }
  }
};
