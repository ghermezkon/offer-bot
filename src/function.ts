const request = require('request-promise');
const token = '1456724517:94a3e24c0bf45fa8b4a0c8d051c94831bd8793de';
const telegram_url = "https://tapi.bale.ai/bot" + token;

export function sendMessage(chatId, text, form: any = {}) {
    form.chat_id = chatId;
    form.text = text;
    return _request('sendMessage', { form });
}
//---------------------------------------------------------------------
function _request(_path, options: any = {}) {
    if (options.request) {
        Object.assign(options, options.request);
    }
    if (options.form) {
        _fixReplyMarkup(options.form);
    }
    if (options.qs) {
        _fixReplyMarkup(options.qs);
    }
    options.method = 'POST';
    options.url = _buildURL(_path);
    options.simple = false;
    options.resolveWithFullResponse = true;
    options.forever = true;
    return request(options)
        .then(resp => {
            let data;
            try {
                data = resp.body = JSON.parse(resp.body);
            } catch (err) {
                throw err
            }

            if (data.ok) {
                return data.result;
            }

        }).catch(error => {
            if (error.response) throw error;
        });
}
function _fixReplyMarkup(obj) {
    const replyMarkup = obj.reply_markup;
    if (replyMarkup && typeof replyMarkup !== 'string') {
        obj.reply_markup = stringify(replyMarkup);
    }
}
function stringify(data) {
    if (typeof data === 'string') {
        return data;
    }
    return JSON.stringify(data);
}
function _buildURL(_path) {
    return `${telegram_url}/${_path}`;
}