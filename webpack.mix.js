let mix = require('laravel-mix');

mix.js("./src/js/app.js","public/js/index.js")
.sass('src/scss/index.scss','public/css/index.css');