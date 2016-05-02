<template>
	<div class="bar">
		<div class="color color-{{ c1 }}"></div>
		<div class="color color-{{ c2 }}"></div>
		<div class="color color-{{ c3 }}"></div>
		<div class="color color-{{ c4 }}"></div>
	</div>
</template>

<script>
	export default {

		props: ['animate'],

		data() {
			return {
				c1: 1,
				c2: 2,
				c3: 3,
				c4: 4
			};
		},

		ready() {
			if (this.animate === 'true') {
				setInterval(this.switchColors, 2000);
			}
		},

		methods: {
			switchColors() {
				this.c1 += 1;
				if (this.c1 === 5) {
					this.c1 = 1;
				}

				if (this.c1 === 1) {
					this.c2 = 2;
					this.c3 = 3;
					this.c4 = 4;
				} else {
					if (this.c1 === 2) {
						this.c2 = 3;
						this.c3 = 4;
						this.c4 = 1;
					} else {
						if (this.c1 === 3) {
							this.c2 = 4;
							this.c3 = 1;
							this.c4 = 2;
						} else {
							this.c2 = 1;
							this.c3 = 2;
							this.c4 = 3;
						}
					}
				}
			}
		}

	}
</script>