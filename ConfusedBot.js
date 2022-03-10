//imports the discord.js module
const Discord = require('discord.js')


const TOKEN = "OTUxMjg5OTQ1MTg2NzkxNDY0.YilTzQ.6GqYVJjgWOaoT8LzrN18utT5ON8"

//create bot client
const client = new Discord.Client(
    {
        intents: [
        //discord servers are referenced as guilds
        "GUILDS",
            "GUILD_MESSAGES"
        ]}
)


//Authenticate Bot
client.on("ready", () =>{
      console.log(`Logged in as ${client.user.tag}`)
})



client.on("messageCreate",(message) =>{
    if (message.content == "confused"){
        message.reply("why?")
    }else if (message.content != "huh") {
        if (message.content != "I dont understand") {
            return;
        }
        message.reply("why not")
    } else {
        message.reply("huh what")
    }

})



client.login(TOKEN)




