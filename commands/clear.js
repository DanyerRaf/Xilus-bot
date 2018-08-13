exports.run = (client, message, args) => {

{
        message.delete (2100);

     let messageCount = parseInt(args[0]);

     if(!messageCount) return message.reply('Escriba la cantidad a eliminar')
    .then(m => {m.delete(2130);});

     if(messageCount >= 1 && messageCount <= 100){
    message.channel.fetchMessages({limit: messageCount})
    .then(messages => message.channel.bulkDelete(messages))
    .catch(error => message.reply(`No he podido eliminarlos a causa de: ${error}`));

    return message.channel.send('He eliminado los mensajes por ti!')
    .then(m => {m.delete(3000);});
     }else{
      return message.reply('El limite a eliminar es de 100 mensajes.');
    }
  };

}
