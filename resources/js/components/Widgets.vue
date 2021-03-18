<template>
	<div class="widgets-box">
		<vs-select
			placeholder="Genre .."
			v-model="genre"
			filter
			multiple
			collapse-chips
		>
			<vs-option
				v-for="(val, i) in genreOpt"
				:key="i"
				:label="val"
				:value="_.lowerCase(val)"
			>
				{{ val }}
			</vs-option>
		</vs-select>
		<vs-select placeholder="Studio .." v-model="studio" filter collapse-chips>
			<vs-option
				v-for="(val, i) in studioOpt"
				:key="i"
				:label="val"
				:value="_.lowerCase(val)"
			>
				{{ val }}
			</vs-option>
		</vs-select>
		{{ genre }}
	</div>
</template>
<script>
import { genre, studio } from "~/util";
export default {
	name: "Widgets",
	data: () => ({
		genre: "",
		genreOpt: genre,
		studio: "",
		studioOpt: studio,
	}),
};
</script>
<style lang="scss">
.widgets-box {
	background-color: rgba(var(--vs-background), 1);
	color: rgba(var(--vs-text), 1);
	padding: 1rem;
	box-shadow: 0 0 5px 0 rgba(#000, 0.1);
	border-radius: 0.25rem;
	margin: 1.5rem 0.5rem;
	@media (max-width: 600px) {
		margin: 1.5rem auto;
	}
}
</style>
