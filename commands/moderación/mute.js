const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mutea a algun usuario que rompa las reglas",
  category: "moderación",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Perdón, pero no tenes permiso de mutear a nadie jaja."
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("No tengo el permiso de controlar los roles :/.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Por favor, menciona al salame que quierasm mutear")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("No te puedo mutear -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Por favor, pon la razón del mute.")
    }
    

    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("este sv no tiene ningún rol llamado `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("El salame este ya esta muteado c;")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`Muteaste a **${message.mentions.users.first().username}** por \`${reason}\``)
    
    user.send(`Estas muteado de **${message.guild.name}** por \`${reason}\``)
    
    

    
  }
};
