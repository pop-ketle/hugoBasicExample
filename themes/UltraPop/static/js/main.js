// const vueApp = new Vue({
//     delimiters: ['[[', ']]'],
//     el: '#vapp',
//     data: {
//         display: 'Salut Lume'
//     }
// })

import TopMenu from './TopMenu';

Vue.use(Vuetify);
Vue.config.productionTip = false;

const sample = new Vue({
    delimiters: ['[[', ']]'],
    el: '#vapp',
    data: {
        display: 'Salut Lume'
    },
    // router,
    // components: { App },
    // template: '<App/>'
});

// export default {
//     name: 'app',

//     components: {
//         TopMenu,
//     },
// }