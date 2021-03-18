const page = (path) => {
	return () => import(/* webpackChunkName: '' */ `~/pages/${path}`);
};

export default [
	{
		name: "home",
		path: "/",
		component: page("home.vue"),
		meta: { breadcrumb: "Home" },
	},
	{
		name: "genres",
		path: "/genres/:genre",
		component: page("genres.vue"),
		meta: {
			breadcrumb: {
				parent: "home",
			},
		},
	},
	{
		name: "series",
		path: "/series/:series",
		component: page("series.vue"),
		meta: {
			breadcrumb: {
				parent: "home"
			}
		}
	},
	{
		name: "jadwal",
		path: "/jadwal-anime",
		component: page("JadwalAnime.vue"),
		meta: { breadcrumb: { label: "Jadwal Anime", parent: "home" } },
	},
	{
		name: "notfound",
		path: "*",
		component: page("notfound.vue"),
	},
];
