const Discord = require('discord.js')
module.exports = {
  name : "skip",
    description : "skip the music",
      aliases : "sk",
  run : async(client, message,args) => {

if(!message.member.voice.channel) return message.reply("Join a voice channel to play **Music**")

if(!client.player.getQueue(message)) return message.channel.send(`No music playing rightnow!`)

client.player.skip(message)

message.channel.send(`Skipped the querent music`)


  }
}