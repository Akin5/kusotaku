const mix = require("laravel-mix");
const path = require("path");
mix.options({
    postCss: [require("cssnano")({ preset: "default" })],
});

mix.js("resources/js/app.js", "public/dist/js")
    .vue({ version: 2 })
    .sass("resources/sass/bootstrap.scss", "public/dist/css")
    .sass("resources/sass/app.scss", "public/dist/css")
    .sourceMaps();

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            "~": path.join(__dirname, "./resources/js"),
        },
    },
});
