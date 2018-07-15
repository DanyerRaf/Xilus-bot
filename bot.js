const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
client.user.setPresence( {
       status: "online",
       game: {
           name: "King|Server",
           type: "JUGANDO"
       }
   } );
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
  }
});
client.login(config.token);
client.login(process.env.TOKEN);
