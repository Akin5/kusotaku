<template>
	<div class="vs-component vs-divider">
		<span :style="afterStyle" class="vs-divider-border after" />
		<span class="vs-divider--text">
			<template v-if="text">
				{{ text }}
			</template>
			<template v-else>
				<slot />
			</template>
		</span>
		<span :style="beforeStyle" class="vs-divider-border before" />
	</div>
</template>

<script>
export default {
	name: "Divider",
	props: {
		color: {
			type: String,
			default: "rgba(0, 0, 0,.1)",
		},
		background: {
			type: String,
			default: "transparent",
		},
		borderStyle: {
			default: "solid",
			type: String,
		},
		borderHeight: {
			default: "1px",
			type: String,
		},
		position: {
			default: "center",
			type: String,
		},
		text: {
			type: String,
		}
	},
	computed: {
		getWidthAfter() {
			let widthx = "100%";
			if (this.position == "left") {
				widthx = "0%";
			} else if (this.position == "left-center") {
				widthx = "25%";
			} else if (this.position == "right-center") {
				widthx = "75%";
			} else if (this.position == "right") {
				widthx = "100%";
			}
			return widthx;
		},
		getWidthBefore() {
			let widthx = "100%";
			if (this.position == "left") {
				widthx = "100%";
			} else if (this.position == "left-center") {
				widthx = "75%";
			} else if (this.position == "right-center") {
				widthx = "25%";
			} else if (this.position == "right") {
				widthx = "0%";
			}
			return widthx;
		},
		afterStyle() {
			const classes = {
				width: this.getWidthAfter,
				"border-top-width": this.borderHeight,
				"border-top-style": this.borderStyle,
			};
			return classes;
		},
		beforeStyle() {
			const classes = {
				width: this.getWidthBefore,
				"border-top-width": this.borderHeight,
				"border-top-style": this.borderStyle,
			};
			return classes;
		},
	},
};
</script>
