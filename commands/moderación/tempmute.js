const Discord = require('discord.js');
const ms = require("ms");
const PREFIX = '!!';
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "tempmute",
    category: "moderación",
    description: "mutea temporalmente a alguien",
    run: async (bot, message) => {
        let args = message.content.substring(PREFIX.length).split(" ");
 
        switch (args[0]) {
            case 'tempmute':
                var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
                if(!person) return  message.reply("NO PUEDO ENCONTRAR A ESE USUARIO SALAME")
                
                if (!message.member.hasPermission("MANAGE_ROLES")) 
                    return message.channel.send(
                      "Perdón, pero no tenes permiso de mutear a nadie jaja.")

                let mainrole = message.guild.roles.cache.find(role => role.name === "Newbie");
                let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
               
     
                if(!muterole) return message.reply("No puedo encontrar el rol de mute")
     
                const reason = args.slice(3).join(" ") 
                const target = message.mentions.members.first();

                let time = args[2];
                if(!time){
                    return message.reply("No especificaste el tiempo!");
                }
     
                person.roles.remove(muterole)
                person.roles.add(muterole);
               
                let embed = new Discord.MessageEmbed() 
                .setTitle("MUTE") 
                .setDescription(`\n\n**Muteado**: ${message.mentions.users.first().username} \n\n**Razón**: ${reason}\n\n**Duración del mute**: ${ms(ms(time))}`) 
                .setColor("RANDOM") 
                .setThumbnail(target.avatarURL) 
                .setFooter(`Muteado por ${message.author.tag}`); 
                await message.channel.send(embed)
               
     
                setTimeout(function(){
                   
                    person.roles.add(mainrole);
                    person.roles.remove(muterole)
                    console.log(muterole)
                    message.channel.send(`${message.mentions.users.first().username} esta desmuteado.`)
                }, ms(time));
     
     
       
            break;
        }
     }
      }
       
