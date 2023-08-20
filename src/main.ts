import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import './style.css'
import App from './App.vue'
import router from './routes/route'
import '@fortawesome/fontawesome-free/css/all.css'
import en from './i18n/en';
import fr from './i18n/fr';
import portuguese from './i18n/portuguese';
import getDefaultLanguage from './i18n/defaultLanguage';


async function initializeApp() {
  const defaultLanguage = await getDefaultLanguage();

  const i18n = createI18n({
    legacy: false,
    locale: defaultLanguage,
    messages: {
      en,
      fr,
      portuguese,
    },
  });

createApp(App).use(router).use(i18n).mount('#app')

}
initializeApp();