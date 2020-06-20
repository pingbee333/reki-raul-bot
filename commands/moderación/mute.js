const { MessageEmbed } = require("discord.js");
const Discord = require ("discord.js")

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
      return message.channel.send("Por favor, menciona al salame que quieras mutear.")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("No te puedo mutear -_-.");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Por favor, pon la razón del mute.")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("este sv no tiene ningún rol llamado `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("El salame este ya esta muteado c;")
    }
    
  
    
    
    user.roles.add(muterole)
   
    let embed = new Discord.MessageEmbed() 
    .setTitle("MUTE") 
    .setDescription(`\n\n**Muteado**: ${message.mentions.users.first().username} \n\n**Razón**: ${reason}\n\n**Duración del mute**: Permanente (requiere unmute)`) 
    .setColor("RANDOM") 
    .setThumbnail(target.avatarURL) 
    .setFooter(`Muteado por ${message.author.tag}`); 
    await message.channel.send(embed)
    
    user.send(`Estas muteado de **${message.guild.name}** por \`${reason}\``)
    
    
//Terminamo negro
    
  }
};