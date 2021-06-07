const Discord = require(`discord.js`)
const client = new Discord.Client()
const distube = require(`distube`)
const player = new distube(client)
module.exports = {
  name : "play",
    description : "play music",
  run : async(client , message, args) => {
if(!message.member.voice.channel) return message.reply("Join a voice channel to play **Music**")
const query = args.join(" ")
if(!query) return message.reply("Type music name or link")


await client.player.play(message , query)
  }
}
