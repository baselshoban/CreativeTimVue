<template>
	<div class="features-2 cd-section" :id="identifier">
		<div class="container">
		    <div class="row">
		        <div class="col-md-8 ml-auto mr-auto text-center">
				    <h2 class="title" v-text="title"></h2>
				    <h5 class="description" v-text="description"></h5>
				    <br/>
				</div>
		    </div>
		    <image-cards></image-cards>
		</div>
	</div>
</template>

<script>
	import ImageCards from './ImageCards.vue';

	export default {
		components: {
			ImageCards,
		},
		props: ['identifier'],
		data(){
			return {
				title: "Our Services",
				description: "Like company established to find program solutions in order to push and enhance the programming industry in our lovely Syria based on trendy and scientific methods depending on our experienced operators and team who has a perfect knowledge in this market.",
			}
		}
	}
</script>

<style>
	
</style>
