const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Informacion del Servidor")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nombre del servidor:", message.guild.name)
    .addField("Creado:", message.guild.createdAt)
    .addField("Te Uniste:", message.member.joinedAt)
    .addField("Miembros del Servidor:", message.guild.memberCount);

    let msg = message.channel.send(serverembed);

};
