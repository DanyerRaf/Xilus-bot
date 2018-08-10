const Discord = require("discord.js");
const config = require("./config.json");
const  client = new Discord.Client();
const fs = require('fs');

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

  client.user.setGame("atom", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");

   });

var prefix = config.prefix;

client.on("message", (message) =>
{
 if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;

 let sender = message.author;
 let args = message.content.slice(prefix.length).trim().split(/ +/g);
 let cmd = args.shift().toLowerCase();

 if (sender.bot) return;
 if (!message.content.startsWith(prefix)) return;

try{
  let commandfile = require(`./commands/${cmd}.js`);
  commandfile.run(bo, message, args);
}catch(e) {
  console.log(e.message);
}finally {
  console.log(`${message.author.username} ran the command: ${cmd}`);
}

});

client.login(config.token);
client.login(process.env.TOKEN);
