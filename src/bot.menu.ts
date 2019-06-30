import { variables } from "./variable";

export const webAddress = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: '🌐 آدرس وب سایت سامانه: [ https://bmioffer.ir ]'
    }
}


export const start = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.webAddress],
                [variables.enterIntoBot],
            ]
        })
    },
    text: {
        text: 'به بازوی سامانه نظام پیشنهادهای بانک ملی ایران ایران خوش آمدید'
    }
}
//---------------------------------------------------------------------------------
export const startUsingBot = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.getUsernameAndPassword],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `برای استفاده از بازوی نظام پیشنهادها باید قبلاً عضویت شما در سامانه تائید شده باشد.
        1- در صورتی که نام کاربری و رمز عبور شما در سامانه ثبت نشده است قادر به ارسال پیشنهاد از طریق بازو نمی باشید.
        2- آدرس وب سایت سامانه برای عضویت: [ https://bmioffer.ir ]`
    }
}
//---------------------------------------------------------------------------------
export const sendUsernameAndPassword = {
    button: {},
    text: {
        text: `لطفاً شماره استخدامی و رمز عبور خود را بصورت شماره * استخدامی||رمزعبور  * بدون استفاده از * کاراکتر فاصله * وارد نمائید`
    }
}
//---------------------------------------------------------------------------------
export function loginSuccessText(username: any) {
    return `* ${username} *  خوش آمدید. برای ثبت پیشنهاد از منوی زیر استفاده کنید`
}
export const loginSuccessButton = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.startNewSuggest],
                [variables.mainMenu],
            ]
        })
    }
}
export const loginFailed = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.getUsernameAndPassword],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `* شماره استخدامی یا رمز عبور اشتباه است *`
    }
}
//---------------------------------------------------------------------------------
export const startNewSuggest = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.startNewSuggest],
                [variables.mainMenu],
            ]
        })
    },
}
//---------------------------------------------------------------------------------
export const startTitleInsert = {
    button: {},
    text: {
        text: `لطفاً * عنوان پیشنهاد * را با عبارت * عنوان: * بدون استفاده از کاراکتر فاصله وارد نمائید`
    }
}
export const suggestTitle = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.title],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `شروع هر پیشنهاد با ثبت و بیان * عنوان * آن است. * عنوان * هر پیشنهاد باید کاملاً واضح بیان شده و از ثبت عناوین کلی و مبهم جلوگیری شود.`
    }
}
export const errorInSuggestTitle = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.title],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `شما هیچ عنوانی در خصوص پیشنهاد خود ثبت نکردید. لظفاً * عنوان * پیشنهاد را وارد نمائید.
        `
    }
}
//---------------------------------------------------------------------------------
export const startCCInsert = {
    button: {},
    text: {
        text: `لطفاً * شرح وضعیت موجود * را با عبارت * شرح وضعیت: * بدون استفاده از کاراکتر فاصله وارد نمائید`
    }
}
export const suggestCurrentCondition = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.currentCondition],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `گام * دوم * در ارائه پیشنهاد جدید، * ثبت شرح وضعیت موجود * است. 
        در هنگام * ثبت شرح وضعیت موجود * به نکات زیر توجه داشته باشید:
            1- شرح وضعیت موجود باید بیانگر ایرادات و ضعف بخشی از بدنه بانک باشد
            2- بهتر است در هنگام ثبت شرح وضعیت موجود، مستقیماً به نقطه ضعف  ساختار یا فرآیند مورد نظر اشاره شود
        `
    }
}
export const errorInSuggestCurrentCondition = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.currentCondition],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `شما هیچ توضیحی در مورد شرح وضعیت موجود بیان نکرده اید. لطفاً شرح وضعیت موجود را کامل وارد نمائید
        `
    }
}
//---------------------------------------------------------------------------------
export const startSuggestInsert = {
    button: {},
    text: {
        text: `لطفاً * شرح پیشنهاد * خود را با عبارت * شرح: * بدون استفاده از کاراکتر فاصله وارد نمائید`
    }
}
export const suggest = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.suggest],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `گام * سوم * در ارائه پیشنهاد جدید * ثبت شرح پیشنهاد * است. 
        در هنگام * ثبت شرح پیشنهاد * به نکات زیر توجه داشته باشید:
        1- شرح پیشنهاد را بصورت کامل و دقیق بیان نمائید
        2- شرح پیشنهاد باید به گونه ای باشد که تصمیم گیری در مورد اجرا شدن آن ساده باشد
        3- از بیان پیشنهاد های کلی بدون ارائه راه حل مشخص جلوگیری شود
        `
    }
}
export const errorInSuggest = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.suggest],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `شما هیچ توضیحی در مورد شرح پیشنهاد بیان نکرده اید. لطفاً شرح پیشنهاد را کامل وارد نمائید
         * شرح پیشنهاد ناقص است * .
        `
    }
}
//---------------------------------------------------------------------------------
export const reviewOrInsert = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.insert],
                [variables.review],
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: `مراحل ثبت پیشنهاد جدید با موفقیت انجام شد. برای ادامه یکی از موارد زیر را انتخاب کنید
        `
    }
}
//---------------------------------------------------------------------------------
export const incorrentInput = {
    button: {
        reply_markup: JSON.stringify({
            keyboard: [
                [variables.mainMenu],
            ]
        })
    },
    text: {
        text: 'بازو قادر به تشخیص دستور ورودی نمی باشد'
    }
}