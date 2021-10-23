const Discord = require('discord.js')
const express = require("express");
const app = express();
app.listen(() => console.log("start ot || jxa"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
const client = new Discord.Client();
const fs = require('fs');
const { Collection } = require('discord.js');
const prefix = require('./config/bot.json');
const distube = require('distube')
const player = new distube(client)
client.player = player

fs.readdir('./events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir(`./commands/`, (error, files) => {
  if (error) { return console.log("error i can not find commands"); };
  files.forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  })
});

player.on(`playSong`,(message , queue , song) => {
var e = new Discord.MessageEmbed()
.setTitle(`Now Playing`)
.setDescription(`[${song.name}](${song.url}) `)
.setColor(`GREEN`)
message.channel.send(e)
})
player.on(`addSong`,(message , queue , song) => {
var e = new Discord.MessageEmbed()
.setTitle(`Added To Playlist`)
.setDescription(`[${song.name}](${song.url}) `)
.setColor(`RED`)
message.channel.send(e)
})
player.on('initQueue', queue => {
  queue.autoplay = false;
})
player.on(`finish`, (message , queue , song) => {
message.channel.send(`voice channel is empty soo im leaving`)
message.member.voice.channel.leave()
}) 
client.config = require('./config/bot.json');
client.commands = new Discord.Collection();
client.login(process.env.token)//bot token : "ODIyNjQyNjk4MTY2MzM3NTg2.YFVPtw.5G44mxKUPB33-TLOvNvQA-E2fnU"
                                
