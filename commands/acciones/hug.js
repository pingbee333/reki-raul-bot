const Discord = require ("discord.js")     
module.exports = {
    name: "hug",
    category: "acciones",
    description: "dale abrazos a tus amigos",
    run: async (client, message, args) => {
        if (!message.mentions.users.first()) return message.channel.send('**Tienes que mencionar a alguien... Puedes mencionarme a mí >w<.**') //Si el canal no es NSFW enviar mensaje
        let gifembed = ["https://cdn.weeb.sh/images/B10Tfknqf.gif", "https://cdn.discordapp.com/attachments/399448944889036801/586592026536181786/hug_13.gif", "https://cdn.weeb.sh/images/SyaAd_7vW.gif", "https://cdn.weeb.sh/images/BJ0UovdUM.gif", "https://cdn.weeb.sh/images/S1qX2OJ_Z.gif"]
        let textembed = [" Le da un abrazo a", "abrazá fuerte a", "le da un abrazo con mucho amor a"]
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