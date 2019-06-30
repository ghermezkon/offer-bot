import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { RedisInit } from './redis.init';
import axios = require("axios");
import { start, startUsingBot, suggestTitle, webAddress, sendUsernameAndPassword, incorrentInput, startTitleInsert, startCCInsert, startSuggestInsert } from './bot.menu';
import { sendMessage } from './function';
import { variables } from './variable';
import { login } from './login';
import { validateTitle, validateCC, validateSuggest } from './validate.suggest';
import { threadId } from 'worker_threads';
import { initHttpCall, clearRedis } from './init.http.call';
//---------------------------------------------------------
class App {
  public app: express.Application;
  regexUserCode = /^\d{5}\|\|/g;
  redis: RedisInit = new RedisInit();
  //-----------------------------------------------------------------
  constructor() {
    this.app = express();
    this.app.locals.apiRoot = "https://bmioffer.ir"
    this.config();
  }
  //-----------------------------------------------------------------
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(compression())
    this.redis.initRedis(this.app);
    //--------------------------------------------------------
    this.app.get("/", (req, res) => {
      axios.default.post('https://tapi.bale.ai/bot1456724517:94a3e24c0bf45fa8b4a0c8d051c94831bd8793de/setWebhook', { url: 'https://3de3f050.ngrok.io/' }).then(response => { res.json('OK') })
    })
    //--------------------------------------------------------
    this.app.post('/', (req, res) => {
      if (req.body.message) {
        const chatId = req.body.message.chat.id;
        const msg = req.body.message.text.trim();

        console.log(msg)
        if (msg.match(/start/) || msg.match(variables.mainMenu)) clearRedis(this.app, chatId)
        //else if (msg.match(variables.mainMenu)) clearRedis(this.app, chatId)
        else if (msg.match(variables.webAddress)) sendMessage(chatId, webAddress.text.text, webAddress.button);
        else if (msg.match(variables.enterIntoBot)) initHttpCall(this.app, chatId);
        else if (msg.match(variables.getUsernameAndPassword)) sendMessage(chatId, sendUsernameAndPassword.text.text, sendUsernameAndPassword.button);
        else if (this.regexUserCode.test(msg)) login(this.app, msg, chatId);
        else if (msg.match(variables.startNewSuggest)) sendMessage(chatId, suggestTitle.text.text, suggestTitle.button);
        else if (msg.match(variables.title)) sendMessage(chatId, startTitleInsert.text.text, startTitleInsert.button);
        else if (msg.trim().startsWith('عنوان:')) validateTitle(msg, chatId);
        else if (msg.trim().match(variables.currentCondition)) sendMessage(chatId, startCCInsert.text.text, startCCInsert.button);
        else if (msg.trim().startsWith('شرح وضعیت:')) validateCC(msg, chatId);
        else if (msg.trim().match(variables.suggest)) sendMessage(chatId, startSuggestInsert.text.text, startSuggestInsert.button);
        else if (msg.trim().startsWith('شرح:')) validateSuggest(msg, chatId);
        else {
          sendMessage(chatId, incorrentInput.text.text, incorrentInput.button);
        }
      }
    })
  }
}
//---------------------------------------------------------
export default new App().app;