import Vue from 'vue';
import LoginForm from './components/LoginForm.vue';
import BottomBar from './components/BottomBar.vue';

Vue.use(require('vue-resource'));

new Vue({
	el: 'body',

	components: {
		LoginForm,
		BottomBar
	}
});
