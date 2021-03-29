const { readdirSync } = require("fs");

const ascii = require("ascii-table");

let astra = new ascii("Commands");
astra.setHeading("Command", "Load status");

module.exports = client => {
  readdirSync("./commands/").forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file =>
      file.endsWith(".js")
    );

    for (let file of commands) {
      let pull = require(`../commands/${dir}/${file}`);

      if (pull.name) {
        client.commands.set(pull.name, pull);
        astra.addRow(file, "✅");
      } else {
        astra.addRow(
          file,
          `❌  -> missing a help.name, or help.name is not a string.`
        );
        continue;
      }

      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
  });
  console.log(astra.toString());
};
