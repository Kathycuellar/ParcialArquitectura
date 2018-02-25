const TelegramBot = require('node-telegram-bot-api');

 // API Token Telegram
 const token = '498041939:AAHEccvg_hHlR8kvU6pzNijuP2KW30NcfPQ';


const bot = new TelegramBot(token, {polling: true});
 const request = require('request');


 bot.on('message', (msg) =>
 {
 var Hola = "/hola";
 var Mayor = "/mayor";

 if (msg.text.toString().toLowerCase().indexOf(Hola) === 0)
 {
     bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
 }
 else if (msg.text.toString().toLowerCase().indexOf("?") > -1)
 {
      bot.sendMessage(msg.chat.id, "Muy pronto lanzamiento bot.");
  }
  else if (msg.text.toString().toLowerCase().indexOf(Mayor) === 0)
    {
      var regex = /\d+/g;
      var string =  msg.text.match(regex);
      var num1= string[0];
      var num2= string[1];
      if (num1>num2)
      {
        bot.sendMessage(msg.chat.id,"El numero mayor es: "+ num1);

      }
      else
      {
        bot.sendMessage(msg.chat.id,"El numero mayor es: "+ num2);
      }
     }
});
