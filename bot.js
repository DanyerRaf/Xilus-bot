const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
client.user.setPresence( {
       status: "online",
       game: {
           name: "King|Server",
           type: "PLAYING"
       }
   });
   
   client.on("guildMemberAdd", (member) => {
   console.log(`El PODEROSO ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('123456789112455845');
   canal.send(`Saludos ${member.user}, bienvenido al servidor, pasala bien.`);

   });
});
var prefix = config.prefix;

client.on("message", (message) =>
{
 if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;

 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

  if(command === 'ban'){

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        if(!razon) return message.channel.send('Escriba un razón, `>x ban @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');


        message.guild.member(user).ban(razon);
        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);

  }

});
client.login(config.token);
client.login(process.env.TOKEN);
