<template>
	<div class="features-5 section-image cd-section" :id="identifier" style="background-image: url('creative/assets/img/sections/the-how-photographer.jpg')">
		<div class="container">
		    <div class="row">
		        <div class="ml-auto mr-auto">
		            <h2 class="title text-center" v-text="title"></h2>
		        </div>
		    </div>
		    <cross-cards></cross-cards>
		</div>
	</div>
</template>

<script>
	import CrossCards from './CrossCards.vue';
	
	export default {
		components: {
			CrossCards
		},
		props: ['identifier'],
		data(){
			return {
				title: "Payment Methods",
				description: ""
			}
		}
	}
</script>