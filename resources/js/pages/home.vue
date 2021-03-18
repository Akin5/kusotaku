<template>
	<div>
		<div class="titlePost">
			<span class="heading">Last Update</span>
			<div class="switchPost">
				<label
					for="switchPostLayoutBox"
					:class="{ active: switchPostLayout == 'grid-box' }"
					><i class="fas fa-th-large"
				/></label>
				<input
					id="switchPostLayoutBox"
					type="radio"
					name="switchPostLayoutBox"
					v-model="switchPostLayout"
					value="grid-box"
				/>
				<label
					for="switchPostLayoutList"
					:class="{ active: switchPostLayout == 'grid-list' }"
					><i class="fas fa-th-list"
				/></label>
				<input
					id="switchPostLayoutList"
					type="radio"
					name="switchPostLayoutList"
					v-model="switchPostLayout"
					value="grid-list"
				/>
			</div>
		</div>
		<div :class="`postsrow ${switchPostLayout}`">
			<post-card
				title="Jujutsu Kaisen"
				episode="13"
				img="dist/img/jujutsukaisen.jpg"
			/>
			<post-card
				title="Nanatsu no Taizai"
				episode="24"
				img="dist/img/nanatsutaizai.jpg"
			/>
			<post-card
				title="Shingeki no Kyojin 4"
				episode="5"
				img="dist/img/aot4.jpg"
			/>
			<post-card
				title="Darling in the Franxx"
				episode="24"
				img="dist/img/dafranxx.jpg"
			/>
			<post-card
				title="Maou Gakuin no Futeksa"
				episode="13"
				img="dist/img/maougakuin.jpg"
			/>
			<post-card
				title="The God of Highschool"
				episode="13"
				img="dist/img/gohs.jpg"
			/>
			<post-card title="Kuma Kuma Bear" episode="12" img="dist/img/kkb.jpg" />
			<post-card
				title="Majo no Tabi Tabi"
				episode="12"
				img="dist/img/majotabitabi.jpg"
			/>
		</div>
	</div>
</template>
<script>
export default {
	name: "home",
	data: () => ({
		switchPostLayout: "grid-box",
		lcs: window.localStorage,
	}),
	metaInfo: {
		titleTemplate: "Home | %s",
	},
	computed: {},
	mounted() {
		this._setGrid();
	},
	watch: {
		switchPostLayout() {
			this.lcs.setItem(".grid", this.switchPostLayout);
		},
	},
	methods: {
		_setGrid() {
			let grid = this.lcs.getItem(".grid")
				? this.lcs.getItem(".grid")
				: this.switchPostLayout;
			this.switchPostLayout = grid;
		},
	},
};
</script>
