<template>
	<div class="postcard" @click="handleClick">
		<div class="postcard-img">
			<img v-lazy="asset(`${img}`)" :alt="`${title} Poster`" />
		</div>
		<div class="postcard-body">
			<h3 class="postcard-title">{{ title }}</h3>
			<div class="postcard-info">
				<template v-for="(val, name) in TypesAnime">
					<span :class="`type ${val}`" v-if="name == type.toLowerCase()">{{
						type
					}}</span>
				</template>
				<span class="episode">Episode {{ episode }}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "PostCard",
	props: {
		to: {
			type: [String, Object],
		},
		href: {
			type: String,
		},
		img: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		episode: {
			type: [Number, String],
			required: true,
		},
		type: {
			type: String,
			default: "TV",
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		TypesAnime: {
			bd: "text-danger",
			tv: "text-info",
			ona: "text-danger",
			movie: "text-info",
		},
	}),
	methods: {
		handleClick() {
			//if (this.to) {
			//	this.$router.push(this.to)
			//} else if (this.href){
			//	window.open(this.href, "_blank")
			//}
			this.$router.push({
				name: "series",
				params: { series: this._.lowerCase(this.title).replace(/\s/g, "-") }
			})
		}
	}
};
</script>
