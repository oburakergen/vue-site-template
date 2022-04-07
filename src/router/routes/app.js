
// eslint-disable-next-line import/extensions
import Home from '../../views/Home';

export default [
    {
        path: '/',
        name: 'home',
        default: Home,
        // eslint-disable-next-line import/extensions
        component: () => import('../../views/Home'),
    },
    {
        path: '/about',
        name: 'about',
        default: Home,
        // eslint-disable-next-line import/extensions
        component: () => import('../../views/About'),
    },
    {
        path: '/product',
        name: 'product',
        default: Home,
        // eslint-disable-next-line import/extensions
        component: () => import('../../views/Product'),
        children: [
            // eslint-disable-next-line import/extensions
            { path: ':id', component: () => import('../../views/ProductDetail') }, // /user/12
        ],
    },
    {
        path: '/blog',
        name: 'blog',
        default: Home,
        // eslint-disable-next-line import/extensions
        component: () => import('../../views/Blog'),
    },
    {
        path: '/iletisim',
        name: 'contact',
        default: Home,
        // eslint-disable-next-line import/extensions
        component: () => import('../../views/Contact'),
    },
];
