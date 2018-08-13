exports.run = (client, message, args) => {

    message.delete (2000);{
    const embed = new Discord.RichEmbed()
    .setTitle("Invocadores Los Invito al Servidor.")
    .setColor("#f7640e")
    .setAuthor(message.author.username, message.author.avatarURL);
    message.channel.send({embed});

    let msg = message.channel.send(embed);
  }

}
