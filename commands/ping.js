module.exports.run = async (bot, message, args) => {

  message.chanel.send({embed:{
    title: "ping!",
    description: "pong!",
    color: 0x178589  
  }})

}

module.exports.config = {
  command: "ping"
}
