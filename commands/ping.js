const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

  message.chanel.send({embed:{
    title: "ping!",
    description: "pong!",
    color: 0x176589
  }})

}

module.exports.config = {
  command: "ping"
}
