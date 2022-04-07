import Vue from 'vue';
import App from './App.vue';

import router from './router';

/*
3. Party Plugin
 */
import './global-components';
import './libs/axios';

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
