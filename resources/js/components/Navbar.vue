<template>
	<vs-navbar v-model="activeNavbar" fixed shadow-scroll>
		<template #left>
			<div
				class="hamburger-menu"
				:class="{ active: isSidebarActive }"
				@click="activeSidebar"
			>
				<span class="hamburger-menu-line"></span>
				<span class="hamburger-menu-line"></span>
				<span class="hamburger-menu-line"></span>
			</div>
		</template>
		<div class="theme-logo">
			<router-link :to="{ name: 'home' }" class="logo-text">
				<span>KusOtaku</span>
			</router-link>
		</div>
		<template #right>
			<vs-button icon flat color="primary">
				<i class="fal fa-search" />
			</vs-button>
		</template>
	</vs-navbar>
</template>
<script>
import { BDropdown } from "bootstrap-vue"
export default {
	name: "Navbar",
	data: () => ({
		searchQuery: "",
		time: null,
		disableBtn: true,
		darkModeBtn: false,
	}),
	components: {
		BDropdown
	},
	computed: {
		isSidebarActive: {
			get() {
				return this.$store.state.isSidebarActive;
			},
			set(val) {
				this.$store.commit("IS_SIDEBAR_ACTIVE", val);
			},
		},
		activeNavbar() {
			return this.$route.name || "home";
		},
	},
	methods: {
		activeSidebar() {
			this.$store.commit("IS_SIDEBAR_ACTIVE", true);
		},
		activeNavbarItem(route) {
			this.$router.push({name: route})
		}
		// validateSearch(e) {
		// 	if (this.timer) {
		// 		clearTimeout(this.timer);
		// 		this.timer = null;
		// 	}
		// 	this.timer = setTimeout(() => {
		// 		let r = /^[a-zA-Z][a-zA-Z0-9]*(?:\s+[a-zA-Z][a-zA-Z0-9]+)?$/gim;
		// 		let s = this.searchQuery.match(r);
		// 		if (!s || this.searchQuery == "") {
		// 			if (e.keyCode == 13) {
		// 				e.preventDefault()
		// 			}
		// 			this.disableBtn = true;
		// 			return;
		// 		}
		// 		this.disableBtn = false;
		// 	}, 200);
		// },
	},
};
</script>
