const Discord = require ("discord.js")     
module.exports = {
    name: "cum",
    category: "acciones",
    description: "el nombre lo dice todo",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('ALTO AHI PAJERO, TENES QUE IR A UN CANAL NSFW PARA EJECUTAR ESTE COMANDO!') //Si el canal no es NSFW enviar mensaje
let gifembed = ["https://cdn.discordapp.com/attachments/722632362843832371/722905451670405120/unnamed_1.gif", "https://cdn.discordapp.com/attachments/722632362843832371/722905515784405022/unnamed.gif", "https://cdn.discordapp.com/attachments/722632362843832371/722905686194782368/16.gif", "https://cdn.discordapp.com/attachments/722632362843832371/722905696156516432/451_450.gif", "https://img.xbooru.com//images/488/c0697ca2bed016f7c6344a69b6dbba03.gif"]
        let textembed = ["se vino unu", "se vino, un poco precoz quizá(?", "se vino owo"]
        let resultgif = Math.floor((Math.random() * gifembed.length));
        let resulttext = Math.floor((Math.random() * textembed.length));
        
    
        const user = message.mentions.users.first() || message.author; 
        const author = message.author;
        const hugEmbed = new Discord.MessageEmbed()
        .setAuthor(`${author.username} ${textembed[resulttext]}`)
        .setColor('RANDOM')
        .setImage(gifembed[resultgif]);
        message.channel.send(hugEmbed);
    
    }
       
     }