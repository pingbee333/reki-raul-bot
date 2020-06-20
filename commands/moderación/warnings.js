  
const db = require("quick.db")

module.exports = {
  name: "warnings",
  description: "Obten la cantidad de warns de un usuario",
  category: "moderación",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
  
    message.channel.send(`${user} tiene **${warnings}** warn(s)`)
  
  
  }
}