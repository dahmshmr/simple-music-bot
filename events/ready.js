module.exports = async (client) => {
  console.log(`${client.user.tag} Online!`)
console.log(client.commands.map(m => m.name + ".js Ready ✅"))
client.user.setActivity(`Music Bot By - JxA , OT TEAM `, {type: "PLAYING"})
}
