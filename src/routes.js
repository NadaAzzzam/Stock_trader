import Home from './component/Home.vue';
import Portfolio from './component/portoflio/Portfolio.vue';
import Stocks from './component/stocks/Stocks.vue';
export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
];