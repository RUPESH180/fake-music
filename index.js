const { config } = require("dotenv");
const { Client, Collection } = require("discord.js");
const { prefix } = require("./config.json");

const client = new Client({
  disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(`${client.user.username} is now online!`);

  setInterval(() => {
    const statuses = [
      `${client.users.cache.size} Members`,

      `${client.guilds.cache.size} Servers`,

      `!help | !play`
    ];

    const status = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(status, { type: "WATCHING" }); 
  }, 2000); 
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.login(process.env.TOKEN);
