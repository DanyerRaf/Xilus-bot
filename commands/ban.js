exports.run = (bot, message, args) => {

{
          message.delete (2100);
          let user = message.mentions.users.first();
          let razon = args.slice(1).join(' ');

          if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
          if(!razon) return message.channel.send('Escriba un razón, `>x ban @username [razón]`');
          if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');


          message.guild.member(user).ban(razon);
          message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);

    };

}
