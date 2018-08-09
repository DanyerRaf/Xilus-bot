const Discord = require("discord.js");
const config = require("./config.json");

const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
client.user.setPresence( {
       status: "online",
       game: {
           name: "Cargando Codigo...",
           type: "WATCHING"
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
   if (command === 'clear'){
      message.delete (2100);

   let messageCount = parseInt(args[0]);

   if(!messageCount) return message.reply('Escriba la cantidad a eliminar')
  .then(m => {m.delete(2150);});

   if(messageCount >= 2 && messageCount <= 100){
  message.channel.fetchMessages({limit: messageCount})
  .then(messages => message.channel.bulkDelete(messages))
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
   }else{
    return message.reply('El limite a eliminar es de 100 mensajes.');
  }
}
if (command === 'invitebot'){
  message.delete (2000);{
client.generateInvite(["ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_ROLES",
                      "MANAGE_MESSAGES","SEND_MESSAGES","CONNECT","BAN_MEMBERS"])
.then(link =>{
    message.channel.send('Link de invitación: '+ link);
  });
   }
 }

if (command === 'invite'){
  message.delete (2000);{
  const embed = new Discord.RichEmbed()
  .setTitle("Los Invito a mi Servidor.")
  .setColor("#f7640e")
  .setAuthor(message.author.username, message.author.avatarURL);
  message.channel.send({embed});
}

var id = message.channel.id;
message.guild.channels.get(id).createInvite({
    maxAge: 0  //maxAge: 0 significa que el link sera permanente

}).then(invite =>
    message.channel.send("https://discord.gg/BmcaHBc")
);
/*
NOTA: Tambien puede usar maxUse: 1 para el maximo uso del enlace, en vez de maxAge.

*/
}
if (command === 'help'){

  message.channel.send({embed: {
      color: 8462534,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Enlace Embed",
      url: "http://discordlatam.com/documentacion-mybot",
      description: "Mensaje de prueba para la descripcion del embed.",
      fields: [{
          name: "Campo1",
          value: "Pueden tener diferentes campos con pequeñas descripciones."
      },
      {
          name: "Campo2",
          value: "Puedes poner [Enlaces web](http://discordlatam.com/) dentro del embed."
      },
      {
          name: "Campo3",
          value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed."
      }
      ],
      timestamp: new Date(),
          footer: {
              icon_url: client.user.avatarURL,
              text: "discordlatam.com"
          }
      }
  });

}


});

client.login(config.token);
client.login(process.env.TOKEN);
