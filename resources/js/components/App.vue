<template>
	<div id="app" ref="app">
		<loading ref="loading" />
		<transition name="fade" mode="out-in">
			<component :is="layout" v-if="layout" />
		</transition>
	</div>
</template>
<script>
import Loading from "./Loading.vue"

// Load layout components dynamically.
const requireContext = require.context("~/layouts", false, /.*\.vue$/);
const layouts = requireContext
	.keys()
	.map((file) => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
	.reduce((components, [name, component]) => {
		components[name] = component.default || component;
		return components;
	}, {});
export default {
	el: "#app",
	components: {
		Loading
	},
	data: () => ({
			layout: null,
	}),
	mounted() {
		this.$loading = this.$refs.loading;
	},
	metaInfo() {
		return {
			title: "Kusotaku Basecamp anime",
		}
	},
	methods: {
		setLayout (layout) {
      if (!layout || !layouts[layout]) {
       	layout = "default"
      }
      this.layout = layouts[layout]
    },
	}
}
</script>
