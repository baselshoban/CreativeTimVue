<template>
	<!-- TESTIMONIALS 1 -->
	<div class="testimonials-1 section-image cd-section" style="background-image: url('creative/assets/img/sections/uriel-soberanes.jpg')" :id="identifier">
	    <cards></cards>
	</div>
	<!-- END TESTIMONIALS 1 -->
</template>

<script>
	import Cards from './Cards.vue';

	export default {
		components: {
			Cards,
		},
		props: ['identifier'],
	}
</script>

<style>
	
</style>