import Vue from "vue";
import Meta from "vue-meta";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Meta);
Vue.use(Router);

const router = createRouter();

export default router;

function createRouter() {
	const router = new Router({
		scrollBehavior,
		mode: "history",
		routes: routes,
	});
	router.beforeEach(beforeEach);
	router.afterEach(afterEach);

	return router;
}
async function beforeEach(to, from, next) {
	let components = [];

	try {
		// Get the matched components and resolve them.
		components = await resolveComponents(
			router.getMatchedComponents({ ...to }),
		);
	} catch (error) {
		if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
			window.location.reload(true);
			return;
		}
	}

	if (components.length === 0) {
		return next();
	}

	router.app.setLayout(components[0].layout || "");
	if (components[components.length - 1].loading !== false) {
		router.app.$loading.start();
	}
	router.app.$nextTick(() => {
		let dm =
			window.localStorage.getItem("dark") !== null &&
			window.localStorage.getItem("dark") == "dark";
		dm
			? document.body.setAttribute("vs-theme", "dark")
			: document.body.removeAttribute("vs-theme");
	});

	next();
}

async function afterEach(to, from, next) {
	await router.app.$nextTick();

	router.app.$loading.finish();
}

function resolveComponents(components) {
	return Promise.all(
		components.map((component) => {
			return typeof component === "function" ? component() : component;
		}),
	);
}

function scrollBehavior(to, from, savedPosition) {
	if (savedPosition) {
		return savedPosition;
	}
	if (to.hash) {
		return { selector: to.hash };
	}
	const [component] = router.getMatchedComponents({ ...to }).slice(-1);
	if (component && component.scrollToTop == false) {
		return {};
	}
	return new Promise((res, rej) => {
		setTimeout(() => {
			res({ x: 0, y: 0 });
		}, 200);
	});
}
