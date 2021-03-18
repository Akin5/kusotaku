import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isSidebarActive: false,
		isDarkMode: false
	},
	mutations: {
		IS_SIDEBAR_ACTIVE(state, value) {
			state.isSidebarActive = value;
		},
		IS_DARK_MODE(state, value) {
			state.isDarkMode = value;
		}
	},
	actions: {},
	getters: {},
});
