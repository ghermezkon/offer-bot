import { sendMessage } from "./function";
import { suggestCurrentCondition, suggest, reviewOrInsert, errorInSuggestCurrentCondition, errorInSuggestTitle, errorInSuggest } from "./bot.menu";
import { variables } from "./variable";

export function validateTitle(msg, chatId) {
    if (msg.startsWith(variables.titleInput) || (msg.startsWith(variables.titleInput) + ' ')) {
        var str = msg.split(variables.titleInput);
        if (str[1].length > 0)
            sendMessage(chatId, suggestCurrentCondition.text.text, suggestCurrentCondition.button);
        else
            sendMessage(chatId, errorInSuggestTitle.text.text, errorInSuggestTitle.button);
    }
}

export function validateCC(msg, chatId) {
    if (msg.startsWith(variables.currentConditionInput) || (msg.startsWith(variables.currentConditionInput) + ' ')) {
        var str = msg.split(variables.currentConditionInput);
        if (str[1].length > 0)
            sendMessage(chatId, suggest.text.text, suggest.button)
        else
            sendMessage(chatId, errorInSuggestCurrentCondition.text.text, errorInSuggestCurrentCondition.button);
    }
}

export function validateSuggest(msg, chatId) {
    if (msg.startsWith(variables.suggestInput) || (msg.startsWith(variables.suggestInput) + ' ')) {
        var str = msg.split(variables.suggestInput)
        if (str[1].length > 0)
            sendMessage(chatId, reviewOrInsert.text.text, reviewOrInsert.button);
        else
            sendMessage(chatId, errorInSuggest.text.text, errorInSuggest.button);
    }
}