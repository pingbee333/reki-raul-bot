const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderación",
  description: "Banea a un usuario que rompa las reglas",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, No tienes permisos para banear.`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, No tengo permisos para banear a esta persona.`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Por favor menciona al usuario que quieras banear.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, NO PODES AUTOBANEARTE PELOTUDO`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Por favor, pon una razón para banear a un suario.`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Sanción : Ban")
    .setDescription(`Baneado ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Baneado por ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }
}