import Vue from "vue";
import Child from "./Child.vue";
import PostCard from "./PostCard.vue";
import Divider from "./Divider.vue";
import Widgets from "./Widgets.vue"

// vue component framework
import Vuesax from "vuesax";
Vue.use(Vuesax, {
	theme: {
		colors: {
			primary: "41, 98, 255",
			white: "#ffffff",
			dark: "#2c3e50",
		},
	},
});

// my component
[Widgets, Child, PostCard, Divider].forEach((component) => {
	Vue.component(component.name, component);
});
