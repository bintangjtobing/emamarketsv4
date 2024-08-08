// main.ts
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './assets/index.css';
import App from './App.vue';
import us from './locales/us.json';
import id from './locales/id.json';
const messages = {
    us,
    id
};
const i18n = createI18n({
    locale: 'us',
    fallbackLocale: 'id',
    messages,
    legacy: false // Ensure legacy mode is set to false for Vue 3
});
const app = createApp(App);
app.use(i18n);
app.mount('#app');
