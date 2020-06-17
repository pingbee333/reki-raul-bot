const Discord = require ("discord.js")     
module.exports = {
    name: "sex",
    category: "acciones",
    description: "el nombre lo dice todo",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('ALTO AHI PAJERO, TENES QUE IR A UN CANAL NSFW PARA EJECUTAR ESTE COMANDO!') //Si el canal no es NSFW enviar mensaje
let gifembed = ["https://cdn.discordapp.com/attachments/602747804418572289/688859209676095494/26.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858837553512553/7.gif", "https://cdn.discordapp.com/attachments/602747804418572289/688858751607898147/3.gif", "https://cdn.discordapp.com/attachments/587824646850740245/587825725961404427/classic_244.gif", "https://media.discordapp.net/attachments/602747804418572289/688859191452237838/29.gif"]
        let textembed = ["hace el amor con", "se empoma a", "se coge a"]
        let textembed2 = ["uwu", "owo", ">.<"] 
        let resultgif = Math.floor((Math.random() * gifembed.length));
        let resulttext = Math.floor((Math.random() * textembed.length));
        let resulttext2 = Math.floor((Math.random() * textembed2.length));
    
        const user = message.mentions.users.first() || message.author; 
        const author = message.author;
        const hugEmbed = new Discord.MessageEmbed()
        .setAuthor(`${author.username} ${textembed[resulttext]} ${user.username} ${textembed2[resulttext2]}`)
        .setColor('RANDOM')
        .setImage(gifembed[resultgif]);
        message.channel.send(hugEmbed);
    
    }
       
     }