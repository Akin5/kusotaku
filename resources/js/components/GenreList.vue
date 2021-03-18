<template>
	<ul class="genrelist">
		<li v-for="(item, i) in genrelist" :key="i">
			<router-link :to="{name: 'genres', params: { genre: _.lowerCase(item).replace(/\s/g, '-') }}">
				{{ item }}
			</router-link>
		</li>
	</ul>
</template>
<script>
import { genre } from "~/util"
export default {
	name: "GenreList",
	data: () => ({
			genrelist: genre
	})
}
</script>
