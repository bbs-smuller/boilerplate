var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function (mix) {
    mix.sass('admin.scss');

    mix.browserify('admin.js');
});
