import stocks from '../../data/stocks';
const state = {
    stocks: []
};

const mutations = {
    // dev tools allows u to  easier to idintify mutation 
    'SET_STOCKS' (state, stocks) {
        //  = new stocks passed as an argument
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - .5));
        });

    }
};


const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks); // i can got th stocks pos from server
        // pass stocks right there to init my app 
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
};
const getters = {
    stocks: state => {
        return state.stocks;
    }
};


export default {
    state,
    mutations,

    actions,
    getters
}