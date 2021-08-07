const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("+")

bot.on('ready', function() {
    bot.user.setGame("Command: :help");
    console.log("connected");
});

bot.login("ODcwNzIzMjAzODAxMTY1ODQ0.YQQ6LQ.G9-XMt5TsNS9_u16MGn6AgvrJm0");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.content.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
    }

    if (message.content === prefix + "tt"){
        message.chann("creation du bot le _08/08/2021_");
        console.log("commande effectue");
    }

    if (message.content === prefix + "frabiquant"){
        message.reply("_ce bot a était crée par ARMOR ⁶₆⁷#0001_")
        console.log("commande effectue")
    }
});
