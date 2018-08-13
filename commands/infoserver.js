const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let sicon = message.guild.iconURL;
    let owner = guild.members.get(guild.ownerID).user;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Informacion del Servidor")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nombre del servidor:", message.guild.name)
    .addField("Creado:", message.guild.createdAt)
    .addField("Te Uniste:", message.member.joinedAt)
    .addField("Miembros del Servidor:", message.guild.memberCount)
    .addField("Creador:"`${owner.username}#${owner.discriminator}`);
    let msg = message.channel.send(serverembed);

};
