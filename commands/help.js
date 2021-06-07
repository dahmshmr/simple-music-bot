const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "to show this message",
run : async(client , message) => {
    var commands = message.client.commands.array()

    var embed = new Discord.MessageEmbed()


    commands.forEach((cmd) => {
      embed.addField(
        `**${client.config.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `\`${cmd.description}\``,
        true
      ); 
embed.setFooter(message.guild.name , message.guild.iconURL())
})
 message.channel.send(embed)
  }
}