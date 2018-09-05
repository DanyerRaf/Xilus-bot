exports.run = (client, message, args) => {

  message.channel.send({

      embed: {
      color: 0xa4ff00,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Comandos",
      description: "Prefijo del bot >x ",
      fields: [{
          name: "ban",
          value: "```Banear a un usuario especificado.```"
      },
      {
          name: "clear",
          value: "```Borrar cierta cantidad de publicaciones.```"
      },
      {
          name: "enc",
          value: "```Ayuda a crear una encuesta.```"
      },
      {
          name: "infoserver",
          value: "```Muestra informacion acerca del servidor.```"
      },
      {
          name: "invitar",
          value: "```Crea una invitacion del servidor.```"
      },
      {
          name: "invitarbot",
          value: "```Crea una invitacion del bot.```"
      },

      ],
      timestamp: new Date(),
          footer: {
              icon_url: client.user.avatarURL,
              text: "Bot creado por: 𝑫𝒂𝑭𝒍𝒚 ♛#3281",
          }
      }
  });

}
