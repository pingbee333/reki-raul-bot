const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Resetea los warns del usuario mencionado",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Necesitas ser admin para ejecutar este comando")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Por favor, menciona a la persona a la que quieras resetearle los warns.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Los bots no pueden recibir warns tonti")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("No podes resetear tus warns.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} no tiene warns`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Tus warns fueron reseteado por ${message.author.username} de ${message.guild.name}`)
    await message.channel.send(`Warns de ${message.mentions.users.first().username} reseteados`)
    
  
    
}
}