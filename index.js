const TelegramBot = require('node-telegram-bot-api');

 // API Token Telegram
 const token = '498041939:AAHEccvg_hHlR8kvU6pzNijuP2KW30NcfPQ';

 
const bot = new TelegramBot(token, {polling: true});
 const request = require('request');


 bot.on('message', (msg) => {
 var Hola = "/hola";
 if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
     bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
 }
 });
