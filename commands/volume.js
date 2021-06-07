const Discord = require('discord.js')
module.exports = {
  name : "volume",
    aliases: ["v","vol"],
    description : `Change music volume`,
  run : async(client, message,args) => {
if(!message.member.voice.channel) return message.reply("Join a voice channel to play **Music**")
if(!client.player.getQueue(message)) return message.channel.send(`No music playing rightnow!`)
 if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`Enter a number between (1 - 100)`)
 if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`Enter a vaild number`)
  client.player.setVolume(message, parseInt(args[0]))
message.channel.send(`Volume has been set to ${args.join(" ")}%`)
  }
}