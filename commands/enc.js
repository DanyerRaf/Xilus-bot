const Discord = require("discord.js");

  exports.run = async (client, message, args,tools) => {

    if (!message.member.roles.find(r => r.name === 'ADMINISTRADOR'))return message.channel.send('Este comando requiere el rol: ADMINISTRADOR');

    if (!args[0]) return message.channel.send('Proper Usage: <prefijo> enc pregunta');

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
