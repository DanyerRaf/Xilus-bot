exports.run = (client, message, args) => {

  message.channel.send({

      embed: {
      color: 0xa4ff00,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Enlace Embed",
      description: "Mensaje de prueba para la descripcion del embed.",
      fields: [{
          name: "ban",
          value: "```Banear a un usuario especificado.```"
      },
      {
          name: "borrar",
          value: "```Borrar cierta cantidad de publicaciones(requiere permisos).```"
      },
      {
          name: "invitarbot",
          value: "```Crea una invitacion del bot.```"
      },
      {
          name: "invitar",
          value: "```Crea una invitacion del servidor.```"
      },
      {
          name: "ayuda",
          value: "```Muestra los comandos que puedes utilizar.```"
      }
      ],
      timestamp: new Date(),
          footer: {
              icon_url: client.user.avatarURL,
              text: "Bot Oficial del sservidor `Xilus Gaming`",
          }
      }
  });

}
