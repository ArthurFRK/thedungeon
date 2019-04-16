const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("?")

bot.on('ready', function() {
    bot.user.setGame("Command: ?Help");
    console.log("Bot Ready !");
});

bot.login("NTY3ODE4ODMyMzA4MzM4Njg5.XLZFdA.6urhXphUr7wOnmzUc2ypPGkjwII"); //TOKEN

//TEST PING PONG
bot.on('message', message => {                                                          
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes \n - ?Help");                                                    
    }

    if (message.content === "Salut"){
        message.reply("Bonjour")  
    }
});
