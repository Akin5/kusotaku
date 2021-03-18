<template>
	<div id="main-wrapper">
		<navbar />
		<sidebar parent="#main-wrapper" />
		<div id="main-container-fluid">
			<genre-list />
			<breadcrumbs />
			<vs-row>
				<vs-col xs="12" lg="8">
					<child />
				</vs-col>
				<vs-col xs="12" lg="4">
					<Widgets />
				</vs-col>
			</vs-row>
		</div>
		<btn-dm />
	</div>
</template>
<script>
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Breadcrumbs from "~/components/Breadcrumbs";
import GenreList from "~/components/GenreList";
import BtnDm from "~/components/ButtonDarkMode"

export default {
	name: "MainLayout",
	components: {
		Navbar,
		Sidebar,
		Breadcrumbs,
		GenreList,
		BtnDm
	},
};
</script>
