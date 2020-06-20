const discord = require ("discord.js")     
module.exports = {
    name: "help",
    category: "info",
    description: "lista de comandos",
    run: async (client, message, args) => {
let embed = new discord.MessageEmbed()
    .setTitle("Comandos")
    .setDescription("\n\n**!hug: <mención>**\nabraza a alguien. \n\n**!ping:**\npong! \n\n**!corona <país o all para ver todo el mundo>:** Muestra las estadísticias (no exactas) del COVID-19**\n\n!raul:**\naverigualo por tí mismo. \n\n**!mute/unmute:<mención>**\nMutea y desmutea a un miembro siendo Staff. \n\n**!ban/kick**:<mención>\nBanea o kickea a un miembro siendo Staff.\n\n**!say:**\n dí algo atravez del bot.\n\n**!kiss:** besa a alguien owo.\n\n**!sex:** el nombre lo dice todo (solo funciona en canales nsfw).\n\n**!cum:**el nombre lo dice todo (solo funciona en canales nsfw).\n")
    .setColor("RANDOM")
    .setThumbnail()
    .setFooter(`Bot hecho por Pato#7612`);
    
    message.channel.send(embed)
  
    }
   }