const Discord = require("discord.js");

  exports.run = async (client, message, args,tools) => {

    if (!message.member.roles.find(r => r.name === 'ADMINISTRADOR'))return message.channel.send('Este comando requiere el rol: ADMINISTRADOR');
    if (!message.member.hasPermission('ADMINISTRADOR')) return message.channel.send('Este comando requiere permisos: ADMINISTRADOR');

    if (!args[0]) return message.channel.send('Como usar: <prefix> enc pregunta');

    const embed = new Discord.MessageEmbed()
    
    .setColor("#34e9c3")
    .setFooter('vota con las reacciones')
    .setDescription('a ver')
    .setTitle(`Enc. creada por ${message.author.username}`);

    let message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
    msg.react('⏩')

  });
});
    message.delete({timeout: 1000});

  }
