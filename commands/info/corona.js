const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "corona",
  category: "info",
  description: "Muestra las stats del corona",
  usage: "corona all o corona <país>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Por favor, pon el nombre del país o all para ver los casos globales")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //te dara los casos globales
      
      let embed = new discord.MessageEmbed()
      .setTitle("Casos Globales")
      .setColor("RANDOM")
      .setDescription("Aveces el número de casos puede diferir.")
      .addField("Casos Totales", corona.cases, true)
      .addField("Muertes Totales", corona.deaths, true)
      .addField("Recuperados Totales", corona.recovered, true)
      .addField("Casos Hoy", corona.todayCases, true)
      .addField("Muertes Hoy", corona.todayDeaths, true)
      .addField("Casos Activos", corona.active, true);
      
      return message.channel.send(embed)
      
      
      
    } else {
      let corona = await track.countries(args.join(" ")) //Cambiarlo a países
      
      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("RANDOM")
      .setDescription("Aveces el número de casos puede diferir... (los numeros pueden no ser exactos)")
      .addField("Casos Totales", corona.cases, true)
      .addField("Muertes Totales", corona.deaths, true)
      .addField("Recuperados Totales", corona.recovered, true)
      .addField("Casos Hoy", corona.todayCases, true)
      .addField("Muertes Hoy", corona.todayDeaths, true)
      .addField("Casos Activos", corona.active, true);
      
      return message.channel.send(embed)
      
      
    }
    
    
  }
}