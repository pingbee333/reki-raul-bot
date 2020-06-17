const { Client, Collection, Discord } = require("discord.js");
const { config } = require("dotenv");
const {prefix, token } = require("./config.json")

const client = new Client({
    disableEveryone: true
})

// Colecciones
client.commands = new Collection();
client.aliases = new Collection();


// Arranca el command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

client.on("ready", () => {
    console.log(`hola, ${client.user.username} esta on owo!`);

    client.user.setActivity('!help, en desarrollo.', { type: 'PLAYING' });
})

client.on("message", async message => {
  
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Si el mensaje no tiene cache, lo cachea.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Busca el comando o algo así
    let command = client.commands.get(cmd);
    // Si no lo encuentra, lo busca por el alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // Si encuentra el comando, lo arranca
    if (command) 
        command.run(client, message, args);
});

client.login(token);
