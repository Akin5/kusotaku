<template>
	<div class="button-dark-mode">
		<vs-switch v-model="toggleDm" color="dark">
			<template #off>
				<i class="fal fa-moon" />
			</template>
			<template #on>
				<i class="fal fa-sun" />
			</template>
			<template #circle>
				<i v-if="!toggleDm" class="fal fa-sun" />
				<i v-else class="fal fa-moon" />
			</template>
		</vs-switch>
	</div>
</template>
<script>
export default {
	name: "ButtonDarkMode",
	data: () => ({
			toggleDm: false,
			lcs: window.localStorage
	}),
	watch: {
		toggleDm() {
			this._initTheme();
			if (this.toggleDm) this.lcs.setItem("dark", "dark")
      else this.lcs.removeItem("dark")
		}
	},
	methods: {
		_initTheme() {
      this.toggleDm ? document.body.setAttribute("vs-theme", "dark") : document.body.removeAttribute("vs-theme")
			document.querySelector('meta[name="theme-color"]').content = this.toggleDm ? "rgb(24, 40, 56)" : "rgb(255, 255, 255)"
    },
    _resetTheme() {
      this.toggleDm = !this.toggleDm;
      this._initTheme()
      if (this.toggleDm) this.lcs.setItem("dark", "dark")
      else this.lcs.removeItem("dark")
    }
	},
	mounted() {
		this.$nextTick(() => {
			let dm = this.lcs.getItem("dark") !== null && this.lcs.getItem("dark") == "dark"
			this.toggleDm = dm
		});
	}
};
</script>
