const Discord = require("discord.js");
const config = require("./config.json");
const  client = new Discord.Client();
const fs = require('fs');

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

  // estado = Online,idle,dnd
  client.user.setStatus("Online");

  // setActivity  WATCHING,PLAYING
  client.user.setActivity("YouTube", {type: "WATCHING"});

  //client.user.setGame('>x ayuda');  //,'https://www.twitch.tv/dafly_1');

   });

   client.on('guildMemberAdd', member => {
       let channel = member.guild.channels.find('name', 'nuevo-pasajero,nuevo-invocador')
       let memberavatar = member.user.avatarURL
       if (!channel) return;
       let embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setThumbnail(memberavatar)
       .addField(':busts_in_silhouette: | Nombre :',`${member}`)
       .addField(':tada: | Mensaje de Bienvenida', `Bienvenido a ${member.guild.name} ${member} nos da gusto verte por aquí.`)
       .addField(':id: | Usuario:', "**["+ ` ${member.id} ` + "]**")
       .addField(':tickets: | Eres el numero:', `${member.guild.memberCount}`)

       .setFooter(`**${member.guild.name}**`)
       .setTimestamp()

       channel.send(embed);
      })


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
  commandfile.run(client, message, args);
}catch(e) {
  console.log(e.message);
}finally {
  console.log(`${message.author.username} ran the command: ${cmd}`);
}


});

client.login(config.token);
client.login(process.env.TOKEN);
