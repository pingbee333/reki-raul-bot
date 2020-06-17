const Discord = require ("discord.js")     
module.exports = {
    name: "kiss",
    category: "acciones",
    description: "dale besos a tus amigos",
    run: async (client, message, args) => {
        if (!message.mentions.users.first()) return message.channel.send('**Tienes que mencionar a alguien... Puedes mencionarme a mí >w<.**')
        let gifembed = ["https://cdn.weeb.sh/images/BkLQnT_PZ.gif", "https://cdn.weeb.sh/images/ry-r3TuD-.gif", "https://cdn.weeb.sh/images/Skc42pdv-.gif", "https://images-ext-1.discordapp.net/external/bVpCoCMrburBWo3u55QQhfLGEHo3sEdjvIaBIEEUUVM/https/cdn.weeb.sh/images/rkv_mRKF-.gif", "https://media.discordapp.net/attachments/399448944889036801/637062254314913816/original.gif"]
        let textembed = ["Besó a", "Te dio un beso muy cariñoso", "Le comió la boca a"]
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