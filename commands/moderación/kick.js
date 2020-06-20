const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderación",
  description: "kickea a un usuario que incumpla las normas",
  usage: "kick <@usuario> <razón>",
  run: (client, message, args) => {
   
     
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}** no tenes los permisos para usar este comando.`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}** no tengo los permisos para usar este comando.`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, por favor menciona al usuario que quieras kickear.`)
    }
    
    if(target.hasPermission("BAN_MEMBERS")) { 
      return message.channel.send(`**${message.author.username}** no puedes banear a miembros del staff.`)
    }

    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}** NO PODES KICKEARTE MOGOLICO, AAAAA ME SACAS`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}** por favor coloca la razón del kick.`)
  }
    
    let embed = new discord.MessageEmbed()
    .setTitle("KICK")
    .setDescription(`**Kickeado**: ${target} (${target.id}) \n\n**Razón**: ${reason}`)
    .setColor("RANDOM")
    .setFooter(`Kickeado por ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    
    
    
  }
}