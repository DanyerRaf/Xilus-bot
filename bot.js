const Discord = require("discord.js");
const config = require("./config.json");
const  bot = new Discord.Client();
const fs = require("fs");

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

  client.user.setActivity("Java", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");

   });

var prefix = config.prefix;

bot.on("message", (message) =>
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
  commandfile.run(bot, message, args);
}catch(e) {
  console.log(e.message);
}finally {
  console.log(`${message.author.username} ran the command: ${cmd}`);
}

 //comandos

//   if(command === 'ban'){
//
//         let user = message.mentions.users.first();
//         let razon = args.slice(1).join(' ');
//
//         if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
//         if(!razon) return message.channel.send('Escriba un razón, `>x ban @username [razón]`');
//         if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
//
//
//         message.guild.member(user).ban(razon);
//         message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
//
//   }
//    if (command === 'borrar'){
//       message.delete (2100);
//
//    let messageCount = parseInt(args[0]);
//
//    if(!messageCount) return message.reply('Escriba la cantidad a eliminar')
//   .then(m => {m.delete(2150);});
//
//    if(messageCount >= 2 && messageCount <= 100){
//   message.channel.fetchMessages({limit: messageCount})
//   .then(messages => message.channel.bulkDelete(messages))
//   .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
//    }else{
//     return message.reply('El limite a eliminar es de 100 mensajes.');
//   }
// }
// if (command === 'invitarbot'){
//   message.delete (2000);{
// client.generateInvite(["ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_ROLES",
//                       "MANAGE_MESSAGES","SEND_MESSAGES","CONNECT","BAN_MEMBERS"])
// .then(link =>{
//     message.channel.send('Link de invitación: '+ link);
//   });
//    }
//  }
//
// if (command === 'invitar'){
//   message.delete (2000);{
//   const embed = new Discord.RichEmbed()
//   .setTitle("Los Invito a mi Servidor.")
//   .setColor("#f7640e")
//   .setAuthor(message.author.username, message.author.avatarURL);
//   message.channel.send({embed});
// }
//
// var id = message.channel.id;
// message.guild.channels.get(id).createInvite({
//     maxAge: 0  //maxAge: 0 significa que el link sera permanente
//
// }).then(invite =>
//     message.channel.send("https://discord.gg/BmcaHBc")
// );
// /*
// NOTA: Tambien puede usar maxUse: 1 para el maximo uso del enlace, en vez de maxAge.
//
// */
// }
// if (command === 'ayuda'){
//
//   message.channel.send({
//
//       embed: {
//       color: 0xa4ff00,
//       author: {
//           name: client.user.username,
//           icon_url: client.user.avatarURL
//       },
//       title: "Enlace Embed",
//       description: "Mensaje de prueba para la descripcion del embed.",
//       fields: [{
//           name: "ban",
//           value: "```Banear a un usuario especificado.```"
//       },
//       {
//           name: "borrar",
//           value: "```Borrar cierta cantidad de publicaciones,requiere permisos.```"
//       },
//       {
//           name: "invitarbot",
//           value: "```Crea una invitacion del bot.```"
//       },
//       {
//           name: "invitar",
//           value: "```Crea una invitacion del servidor.```"
//       },
//       {
//           name: "ayuda",
//           value: "```Muestra los comandos que puedes utilizar.```"
//       }
//       ],
//       timestamp: new Date(),
//           footer: {
//               icon_url: client.user.avatarURL,
//               text: "Bot Oficial del sservidor `xilus Game`",
//           }
//       }
//   });
// }


});

bot.login(config.token);
bot.login(process.env.TOKEN);
