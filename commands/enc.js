const Discord = require("discord.js");

  exports.run = async (client, message, args,tools) => {

    if (!message.member.roles.find(r => r.name === 'ADMINISTRADOR'))return message.channel.send('Este comando requiere el rol: ADMINISTRADOR');

    if (!args[0]) return message.channel.send('Proper Usage: <prefijo> enc pregunta');

    const embed = new Discord.MessageEmbed()
    .setColor(#65d5ff)
    .setFooter('React to vote')
    .setDescription(args.join(' '))
    .setTitle(`enc creada por ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react(':white_check_mark:');
    await msg.react(':no_entry:');

    message.delete({timeout: 1000});

  }
