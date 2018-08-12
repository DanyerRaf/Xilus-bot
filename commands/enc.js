const Discord = require("discord.js");

  exports.run = async (client, message, args,tools) => {

    if (!message.member.roles.find(r => r.name === 'administrador'))return message.channel.send('Este comando requiere el rol: roleName');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Este comando requiere permisos: ADMINISTRATOR');

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>enc question');

    const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setFooter('React to vote')
    .setDescription(args.join(' '))
    .setTitle(`Enc. creada por ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1500});

  }
