const Discord = require("discord.js");

  exports.run = async (client, message, args,tools) => {

    if (!message.member.roles.find(r => r.name === 'ADMINISTRADOR'))return message.channel.send('Este comando requiere el rol: ADMINISTRADOR');
    if (!message.member.hasPermission('ADMINISTRADOR')) return message.channel.send('Este comando requiere permisos: ADMINISTRADOR');

    if (!args[0]) return message.channel.send('Como usar: <prefix> enc pregunta');

    let embed = new Discord.RichEmbed()
    .setColor(0xa4ff00)
    .setFooter('vota con las reacciones')
    .setDescription(args.join(' '))
    .setTitle(`Enc. creada por ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000});

}
