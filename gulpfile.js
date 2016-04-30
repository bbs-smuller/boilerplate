var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function (mix) {
    mix.sass('backend.scss');

    mix.browserify('backend.js');
});
