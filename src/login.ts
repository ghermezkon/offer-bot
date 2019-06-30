import { loginSuccessButton, loginFailed, loginSuccessText } from "./bot.menu";
import { sendMessage } from "./function";
const request = require('request');
//--------------------------------------------------------------

//--------------------------------------------------------------
export function login(app: any, msg: any, chatId: any) {
    var str = msg.split('||'); //str[0]: userCode str[1]: password
    var checkLogin = httpLogin(app, str[0], str[1]);
    if (!checkLogin) {//userCode or password is not true
        sendMessage(chatId, loginFailed.text.text, loginFailed.button);
    } else {
        sendMessage(chatId, loginSuccessText(checkLogin), loginSuccessButton.button)
    }
}
//====================Http Call==================================
function httpLogin(app, userCode, password) {
    if (userCode.length > 0 && password.length > 0) {
        request.post(app.locals.apiRoot + '/loginSuggest', { userCode: userCode, password: password }, { 'authorization': 'test' }, (err, res) => {
            console.log(res)
        })
    } else {
        console.log('error')
    }

    if (userCode == '89772' && password == '89772') return 'مهدی قرمزکن';
    else return false;
}