import Vue from 'vue';
import LoginForm from './components/LoginForm.vue';

Vue.use(require('vue-resource'));

new Vue({
	el: 'body',

	components: {
		LoginForm
	}
});

// ------------------------------------------------------------------------------------

setInterval(function () {
	for (var i = 1 ; i <= 4 ; i++) {
		var $color = document.querySelector('.color-' + i);
		$color.classList.remove('color-' + i);

		var next = i + 1;
		next = (next === 5) ? 1 : next;
		$color.classList.add('color-' + next);
	}
}, 5000);
