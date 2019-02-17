<template>
	<div class="testimonials-2 section section-testimonials cd-section" :id="identifier">
		<testimonials></testimonials>
		<clients></clients>
	</div>
</template>

<script>
	import Testimonials from './Testimonials.vue';
	import Clients from './Clients.vue';

	export default {
		components: {
			Testimonials, 
			Clients, 
		},
		props: ['identifier'],
		data() {
			return {

			}
		}
	}
</script>

<style>
	
</style>