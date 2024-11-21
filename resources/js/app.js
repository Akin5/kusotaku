import Vue from "vue";
import lodash from "lodash";
import store from "~/store";
import router from "~/router";
import App from './components/App.vue';

// Vue.mixin({
//     methods: {
//         asset: (path) => {
//             let prefix = process.env.MIX_ASSET_URL;
//             if (!prefix) {
//                 prefix = document.head.querySelector('meta[name="asset-url"]').content;
//             }
//             return prefix + "/" + path.replace(/^\/+/, "");
//         },
//     },
// });
//
Vue.mixin({
    methods: {
        asset: path => {
            let prefix = process.env.MIX_ASSETS_URL
            if (!prefix) prefix = document.head.querySelector('meta[name="asset-url"]')
            return prefix + "/" + path.replace(/^\/+/, "")
        }
    }
})

Vue.lodash = lodash;
Vue._ = lodash;

Object.defineProperties(Vue.prototype, {
    lodash: {
        get() {
            return lodash;
        },
    },
    _: {
        get() {
            return lodash;
        },
    },
});

import "~/plugins";
import "~/components";

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    ...App,
});
