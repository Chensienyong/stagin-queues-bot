const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '434005738:AAE7NECtywSBuT7Fq8aiIlj2bGmruCW3h_U';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  var Hi = "hi";
  if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
  }
});