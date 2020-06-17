module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
       message.channel.send(`Tenes - ${client.ws.ping}ms de ping cuidado con los DdoS`);
    }
  
}