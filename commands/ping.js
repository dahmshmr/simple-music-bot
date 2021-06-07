const Discord = require(`discord.js`)

module.exports = {
  name : "ping",
  description : "shows bot ping",
  run : async(client , message) => {
message.channel.send(`Pinging...`).then(message => {
message.edit(`\`\`\`My Ping : ${client.ws.ping}\`\`\` `)
})

  }
  }