import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'dark',
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
                fa
            }
        },
    });

    nuxtApp.vueApp.use(vuetify);
})