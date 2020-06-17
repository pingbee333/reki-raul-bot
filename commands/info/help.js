const discord = require ("discord.js")     
module.exports = {
    name: "help",
    category: "info",
    description: "lista de comandos",
    run: async (client, message, args) => {
let embed = new discord.MessageEmbed()
    .setTitle("Comandos")
    .setDescription("\n\n**!hug:**\nabrazos gratis. \n\n**!ping:**\npong! \n\n**!raul:**\naverigualo por tí mismo. \n\n**!mute/unmute:**\nMutea y desmutea a un miembro siendo Staff. \n\n**!ban/kick**:\nBanea o kickea a un miembro siendo Staff.\n\n**!say:**\n dí algo atravez del bot.\n\n**!kiss:** besa a alguien owo.\n\n**!sex:** el nombre lo dice todo (solo funciona en canales nsfw).\n\n**!cum:**el nombre lo dice todo (solo funciona en canales nsfw).")
    .setColor("#ff2050")
    .setThumbnail()
    .setFooter(`Bot hecho por Pato#7612`);
    
    message.channel.send(embed)
  
    }
   }