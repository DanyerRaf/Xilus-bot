const Discord = require("discord.js");

  exports.run = async (client, message, args,tools) => {

    if (!message.member.roles.find(r => r.name === 'Administrador'))return message.channel.send('Este comando requiere el rol: Administrador');
    .then (message.delete (2100);)
    if (!message.member.hasPermission('ADMINISTRADOR')) return message.channel.send('Este comando requiere permisos: ADMINISTRADOR');

    if (!args[0]) return message.channel.send('Como usar: <prefix> enc pregunta');

    let embed = new Discord.RichEmbed()
    .setColor(0xa4ff00)
    .setFooter('vota con las reacciones')
    .setDescription(args.join(' '))
    .setTitle(`Encuesta creada por ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete (1000);

}
