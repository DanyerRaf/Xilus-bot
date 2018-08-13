exports.run = (client, message, args) => {

      message.delete (2000);{
  client.generateInvite(["ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_ROLES",
                        "MANAGE_MESSAGES","SEND_MESSAGES","CONNECT","BAN_MEMBERS"])
  .then(link =>{
      message.channel.send('Link de invitación: '+ link);
    });
     }

}
