//设置多种语言
import { createI18n } from 'vue-i18n/index';
import ZH from './ZH.json'
import CN from './CN.json'
import EN from './EN.json'

const i18n = createI18n({

    // 默认语言
    locale: 'CN',

    // 关闭控制台警告
    silentFallbackWarn: true,

    // 设置语言环境
    messages: {
        ZH,    //简体
        CN,//繁体
        EN,    //英文
    }
});

export default i18n;