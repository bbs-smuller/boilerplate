<template>
	<form action="{{ action }}" method="post">
		<input type="hidden" name="redirect" value="{{ redirect }}">
		<div class="column row LoginForm">
			<h4 class="text-center">S'identifier avec votre email</h4>
			<label>
				Email
				<input type="text" placeholder="example@mail.org" v-model="email">
			</label>
			<label>
				Mot de passe
				<input type="password" placeholder="Mot de passe" aria-describedby="password_forgot" v-model="password">
			</label>
			<p class="help-text" id="password_forgot"><a href="#">Mot de passe oublié ?</a></p>
			<input id="remember_me" type="checkbox"><label for="remember_me" class="label-checkbox">Se souvenir de la connexion</label>
			<p><a type="submit" class="button expanded" @click="submitForm">S'identifier</a></p>
		</div>
	</form>
</template>

<script>
	export default {

		props: ['action', 'redirect'],

		data() {
			return {
				//
			};
		},

		methods: {
			submitForm(event) {
				event.preventDefault();
			}
		}

	}
</script>