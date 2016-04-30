import Vue from 'vue';
import LoginForm from './components/LoginForm.vue';

new Vue({
	el: 'body',

	components: {
		LoginForm
	},

	ready() {
		alert('Vai');
	}
});