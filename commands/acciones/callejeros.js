const Discord = require ("discord.js")     
module.exports = {
    name: "callejeros",
    category: "acciones",
    description: "AGAUNTE CALLEJEROS VIEJIIIII",
    run: async (client, message, args) => {
let gifembed = ["https://k60.kn3.net/taringa/A/1/D/1/D/2/RodolfoAmastar/97F.gif", "https://k32.kn3.net/taringa/1/1/3/4/8/1/03/vagonettas/BA6.gif", "https://2.bp.blogspot.com/-a6jxDj7qN00/VpErtI2UwEI/AAAAAAAAAHg/vvqkRMbms24/s1600/aguante-callejeros-vieja-esqueleto-gif-heisenberga09-pato-fontanet-taringa.gif", "https://k31.kn3.net/taringa/E/B/7/2/9/0/vagonettas/754.gif", "https://k33.kn3.net/taringa/2/5/5/9/2/7/70/mike-jack/806.gif", "https://k46.kn3.net/taringa/6/D/7/4/0/A/vagonettas/1B3.gif", "https://k33.kn3.net/B/3/B/E/7/4/00B.gif"]
        let textembed = ["AGUANTE CALLEJEROS VIEJA NO ME IMPORTA NADAAAAAA"]
        let resultgif = Math.floor((Math.random() * gifembed.length));
        let resulttext = Math.floor((Math.random() * textembed.length));

        const user = message.mentions.users.first() || message.author;
        const hugEmbed = new Discord.MessageEmbed()
        .setAuthor(`${textembed[resulttext]}`)
        .setColor('RANDOM')
        .setImage(gifembed[resultgif]);
        message.channel.send(hugEmbed);
    
    }
       
     }