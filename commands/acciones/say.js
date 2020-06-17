const discord = require ("discord.js")

module.exports = {
    name: "say",
    category: "acciones",
    description: "Dí algo atravez del bot",
    usage: "say <texto>",
    run: async (client, message, args) => {
let texto = args.join(" "); //Texto
        if(!texto) return message.channel.send(`Escriba un texto pára que diga.`);
        if (message.content.includes("@everyone")){return} //Cancelar envio si tiene @everyone
        if (message.content.includes("@here")){return} //Cancelar envio si tiene @here
    
        message.channel.send(texto);
        
        message.delete({setTimeout: 500}); //Borrar msg

    }
}