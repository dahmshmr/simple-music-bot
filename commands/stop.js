const Discord = require(`discord.js`)
const client = new Discord.Client()
const distube = require(`distube`)
const player = new distube(client)
module.exports = {
  name : "stop",
    aliases : "s",
    description : "stop the music",
  run : async(client , message, args) => {
if(!message.member.voice.channel) return message.reply("Join a voice channel to play **Music**!")
if(!client.player.getQueue(message)) return message.channel.send(`No music playing rightnow!`)
await client.player.stop(message)
message.channel.send(`I stooped playing songs and cleared the queue`)
  }
}