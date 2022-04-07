import Vue from 'vue';
import VueRouter from 'vue-router';
import apps from './routes/app';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        ...apps,
        {
            path: '*',
            redirect: 'error-404',
        },
    ],
});

export default router;
