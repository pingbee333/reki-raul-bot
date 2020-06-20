const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "warn",
  category: "moderación",
  usage: "warn <@mencion> <razón>",
  description: "Warnea a cualquiera que no cumpla las relgas",
  run: async (client, message, args) => {
    const target = message.mentions.members.first();
   
      if(!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Necesitas permisos de **Staff** para ejecutar este comando")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Por favor, menciona a la persona que quieras warnear - warn @mención <razón>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("No puedes warnear bots.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("NO PODES WARNEARTE PELOTUDO")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("No podes warnear al downer.")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Por favor coloca la razón del warn - warn @mención <razón>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 20) {
      return message.channel.send(`${message.mentions.users.first().username} el usuario alcanzó el límite de warns.`)
    }
    if(warnings === null) {
      if(warnings === null) warnings = 1;
      db.set(`warnings_${message.guild.id}_${user.id}`, 2) 
      user.send(`Fuiste warneado en **${message.guild.name}** por ${reason}`) 
      let embed = new discord.MessageEmbed() 
      .setTitle("WARN") 
      .setDescription(`\n\n**Advertido**: ${message.mentions.users.first().username} \n\n**Razón**: ${reason}\n\n**Cantidad actual de Advertencias**: ${warnings} `) 
      .setColor("RANDOM") 
      .setThumbnail(target.avatarURL) 
      .setFooter(`Advertido por ${message.author.tag}`); 
      await message.channel.send(embed) 
    } else if(warnings !== null) { 
      db.add(`warnings_${message.guild.id}_${user.id}`, 1) 
      user.send(`Fuiste warneado en **${message.guild.name}** por ${reason}`) 
      let embed = new discord.MessageEmbed() 
      .setTitle("WARN") 
      .setDescription(`\n\n**Advertido**: ${message.mentions.users.first().username} \n\n**Razón**: ${reason}\n\nCantidad actual de **Advertencias**: ${warnings} `) 
      .setColor("RANDOM") 
      .setThumbnail(target.avatarURL) 
      .setFooter(`Advertido por ${message.author.tag}`); 
      await message.channel.send(embed)
    }
 
  }
}