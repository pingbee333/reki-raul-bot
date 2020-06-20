module.exports = {
    name: "unmute",
    category: "moderación",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Perdón, pero no tenes permiso de unmutear a nadie jaja."
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("No tengo los permisos para controlar los roles.");
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return message.channel.send(
          "Por favor, menciona al salame que quieras unmutear (pensalo 2 veces c;)"
        );
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("El pelotudo ese no está mute")
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`**${message.mentions.users.first().username}** está desmuteado.`)
      
      user.send(`Estas desmuteado de **${message.guild.name}**`)
        }
  };