import { sendMessage } from "./function";
import { startUsingBot, start } from "./bot.menu";

const request = require('request');
//-----------------------------------------------------------------------------
export function clearRedis(app: any, chatId) {
    var data = { 'token': 'null', 'user': 'null', 'title': 'null', 'cc': 'null', 'suggest': 'null' };
    var redis = app.locals.redis;

    redis.del(chatId);
    redis.hmset(chatId, data)

    sendMessage(chatId, start.text.text, start.button);
}
//-----------------------------------------------------------------------------
export function initHttpCall(app: any, chatId) {
    var redis = app.locals.redis;
    request(app.locals.apiRoot + '/api/info', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            redis.hget(chatId, "token", (err, obj) => {
                redis.hset(chatId, "token", response.headers.authorization);
            })
            sendMessage(chatId, startUsingBot.text.text, startUsingBot.button);
        }
    });
}
//-----------------------------------------------------------------------------