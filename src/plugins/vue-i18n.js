import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const messages = {
    eng: {
        message: {
            app_bar: {
                home: 'Home',
                how_it_works: 'How it works',
                pricing: 'Pricing',
            }
        }
    },
    ru: {
        message: {
            app_bar: {
                home: 'Домой',
                how_it_works: 'Как это работает',
                pricing: 'Тарифы',
            }
        }
    }
};

export const setLocaleByDOMLang = () => {
    const lang = navigator.language;
    if (lang.includes('ru')) {
        return 'ru';
    } else {
        return 'eng';
    }
};

export default new VueI18n({
    locale: setLocaleByDOMLang(),
    messages
})