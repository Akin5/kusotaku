<template>
	<vs-sidebar :open.sync="isSidebarActive" v-model="sidebarItemModel">
		<template #logo>
			<div class="theme-logo">
				<router-link :to="{name: 'home'}" class="logo-text">
					<span>Kusotaku</span>
				</router-link>
			</div>
		</template>
		<template v-for="(data, i) in sidebarLinks">
			<template v-if="!data.divider">
				<vs-sidebar-group v-if="data.group">
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon v-if="data.icon">
								<i :class="data.icon" />
							</template>
							{{ data.name }}
						</vs-sidebar-item>
					</template>
					<template v-for="(dataItem, index) in data.group">
						<vs-sidebar-item :id="dataItem.pathName" :to="{name: dataItem.pathName }" @click="handleClickSidebarItem()">
							<template #icon v-if="dataItem.icon">
								<i :class="dataItem.icon" />
							</template>
							{{ dataItem.name }}
						</vs-sidebar-item>
					</template>
				</vs-sidebar-group>
				<vs-sidebar-item v-else :id="data.pathName" :to="{name: data.pathName }" @click="handleClickSidebarItem()">
					<template #icon v-if="data.icon">
						<i :class="data.icon" />
					</template>
					{{ data.name }}
				</vs-sidebar-item>
			</template>
			<Divider v-if="data.divider" :text="data.divider" />
		</template>
	</vs-sidebar>
</template>
<script>
import { sidebarLinks } from "~/util";
export default {
	name: "Sidebar",
	props: {
		parent: {
			type: String,
		},
	},
	data: () => ({
		windowWidth: window.innerWidth,
		lcs: window.localStorage,
		sidebarLinks: sidebarLinks
	}),
	computed: {
		isSidebarActive: {
			get() {
				return this.$store.state.isSidebarActive;
			},
			set(val) {
				this.$store.commit("IS_SIDEBAR_ACTIVE", val);
			},
		},
		nowYear() {
			return new Date().getFullYear();
		},
	},
	methods: {
		handleWindowResize(event) {
			this.windowWidth = event.currentTarget.innerWidth;
			this._setSidebar();
		},
		_setSidebar() {
			if (this.windowWidth < 1170) {
				this.isSidebarActive = false
			} else {
				this.isSidebarActive = true
			}
		},
		handleClickSidebarItem() {
			if (this.isSidebarActive) this.isSidebarActive = false
			alert(1)
		},
		sidebarItemModel() {
			return this.$route.path || "home";
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener("resize", this.handleWindowResize);
		});
		this._setSidebar();
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.handleWindowResize);
		this._setSidebar();
	},
};
</script>
