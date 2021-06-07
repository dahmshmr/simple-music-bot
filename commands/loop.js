const Discord = require('discord.js')
module.exports = {
  name : "loop",
  description : "loop the queue",
  aliases : "repeat",
  run : async(client, message,args) => {

if(!message.member.voice.channel) return message.reply("Join a voice channel to play **Music**")

if(!client.player.getQueue(message)) return message.channel.send(`No music playing rightnow!`)


  const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`loop mode is now **off**!`)
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`loop mode is now **on**!`)
    };


  }
}