const { MessageEmbed } = require ("discord.js")
   
module.exports = {
    name: "suggest",
    category: "info",
    description: "comando para hacer sugerencias, requiere de canal",
    run: async (client, message, args) => {

    if(!args.length) { 
        return message.channel.send("Por favor, pone una sugerencía en el comando.")
    }

   
         let embed = new MessageEmbed()
         .setAuthor("SUGERENCIA " + message.author.tag, message.author.avatarURL ())
         .setThumbnail(message.author.avatarURL())
         .setColor("RANDOM")
         .setDescription(args.join(" "))
         .setTimestamp()

         message.channel.send(embed).then(m => {
             m.react("👍")
             m.react("👎")
              })

            }
         }