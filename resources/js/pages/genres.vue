<template>
	<div class="titlePost">
		<span class="heading">Genre: {{ genre }}</span>
	</div>
</template>
<script>
export default {
	name: "Genres",
	data: () => ({
	}),
	computed: {
		genre() {
			return this._.capitalize(this.$route.params.genre).replace(/-/g, " ");
		}
	},
	metaInfo() {
		return {
			titleTemplate: `Genre ${this.genre} | %s`
		}
	},
	breadcrumb() {
		return {
			label: this.genre,
		}
	},
}
</script>
