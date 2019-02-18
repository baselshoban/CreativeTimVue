<template>
	<!-- TESTIMONIALS 1 -->
	<div class="testimonials-1 section-image cd-section" style="background-image: url('creative/assets/img/sections/uriel-soberanes.jpg')" :id="identifier">
		<div class="container">
	    <div class="row">
	        <div class="col-md-6 ml-auto mr-auto text-center">
	            <h2 class="title" v-text="title"></h2>
	            <h5 class="description" v-text="description"></h5>
	        </div>
	    </div>
	    <div class="space-top"></div>
	    <cards></cards>
	</div>
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
		data () {
			return {
				title: "We Are Proud To Partner With",
				description: "You need more information? Check what other persons are saying about our product. They are very happy with their purchase.",
			}
		}
	}
</script>

<style>
	
</style>