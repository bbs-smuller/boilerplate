<template>
	<div class="bar">
		<div class="color color-{{ colors[0] }}"></div>
		<div class="color color-{{ colors[1] }}"></div>
		<div class="color color-{{ colors[2] }}"></div>
		<div class="color color-{{ colors[3] }}"></div>
	</div>
</template>

<script>
	export default {

		props: ['animate'],

		data() {
			return {
				colors: [1, 2, 3, 4]
			};
		},

		ready() {
			if (this.animate === 'true') {
				setInterval(this.switchColors, 2000);
			}
		},

		methods: {
			switchColors() {
				for (var i = 0 ; i < 4 ; i++) {
					this.colors[i] += 1;
					if (this.colors[i] === 5) {
						this.colors[i] = 1;
					}
				}
			}
		}

	}
</script>