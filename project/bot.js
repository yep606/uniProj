require('dotenv').config();
const ig = require('./instagram');
const {Telegraf} = require('telegraf')
const axios = require('axios');
const session = require('telegraf/session');
const instagram = require('./instagram');
const express = require('express');
const expressApp = express();

const bot = new Telegraf(process.env.TOKEN);

const URL = 'https://telfa-front.herokuapp.com'
const port = process.env.PORT || 5555;
const API_TOKEN = process.env.TOKEN || '';


bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
bot.use(session())
expressApp.use(bot.webhookCallback(`/bot${API_TOKEN}`));

const welcomeMessage = "Hey, I'm Telfa! Send me your Instagram login and password, " +
    "After all write /done";

bot.start(async (ctx) => {

    ctx.reply(`Hey, ${ctx.from.first_name}, I'm Telfa! Send me your Instagram login and password, " +
    "After all write /done`);

   let res = await axios.post('https://telfo.herokuapp.com/authenticate', {
       "username": "",
       "password": ""})

//     console.log(res.data.jwt)

    // let final = await axios({
    //         method: 'get',
    //         url: 'https://telfo.herokuapp.com/test',
    //         headers: {
    //             "Authentication": `Bearer ${res.data.jwt}`
    //         }
    //     }
    // )
    // console.log(final)
    // if(ctx.session.jwt === undefined)
    //     return ctx.reply(welcomeMessage);
    // else

    return ctx.reply("Available commands: /start, /test")


});

bot.command("done", async ctx => {

    await ig.initialize();

    let isReady = await ig.login(user.username, user.password);

    if (isReady) {
        let res = await axios.post('https://telfo.herokuapp.com/user/add', user);
        return ctx.reply("Everything's fine!");
    } else
        return ctx.reply("Error :( Login or password was incorrect. \n Write /drop and try again.");


});

bot.command("drop", ctx => {

    // user.username = "";
    // user.password = "";
    //
    // return ctx.reply("Dropped login and password")
});

bot.command("photo", async ctx => {
    await instagram.test();
    ctx.reply("Great!");
});

bot.hears('hi', async (ctx) => {
    await ctx.reply(`Hey, ${ctx.from.first_name}`);
});

bot.on('text', (ctx) => {

    if (ready && user.username === "")
        user.username = ctx.message.text;
    else if (ready && user.password === "")
        user.password = ctx.message.text;

    return ctx.reply('👍')
});


expressApp.get('/', (req, res) => {
    res.send('Hello World!');
  });
  expressApp.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

