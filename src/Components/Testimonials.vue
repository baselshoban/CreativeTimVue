<template>
	<div class="container-fluid">
	    <div class="row">
	        <div class="col-md-8 ml-auto mr-auto text-center">
	            <h2 class="title" v-text="title"></h2>
	            <h5 class="description" v-html="description"></h5>
	        </div>
	    </div>
	    <div class="row">
	        <div class="col-md-2 ml-auto">
	            <div class="testimonials-people">
	                <img class="left-first-person add-animation" src="creative/images/photos/110862/thumb1e76.jpg?1482812727" alt="" />
	                <img class="left-second-person add-animation" src="creative/images/photos/139481/thumb47ae.jpg?1485460613" alt="" />
	                <img class="left-third-person add-animation" src="creative/images/photos/152441/thumb7503.jpg?1488233314" alt="" />
	                <img class="left-fourth-person add-animation" src="creative/images/photos/134607/thumbd4f6.jpg?1487680276" alt="" />
	                <img class="left-fifth-person add-animation" src="creative/images/photos/161506/thumbbae5.jpg?1489848178" alt="" />
	                <img class="left-sixth-person add-animation" src="creative/images/photos/77627/thumb653f.jpg?1487360092" alt="" />
	            </div>
	        </div>
	        <div class="col-md-6">
			    <cards-slider></cards-slider>
    	    </div>
    	    <div class="col-md-2 mr-auto">
    	        <div class="testimonials-people">
    	            <img class="right-first-person add-animation" src="creative/images/faces/twitter/mlane/128.jpg" alt="" />
    	            <img class="right-second-person add-animation" src="creative/images/photos/125268/thumbaf08.jpg?1497799215" alt="" />
    	            <img class="right-third-person add-animation" src="creative/images/photos/123334/thumb8cd6.jpg?1479459618" alt="" />
    	            <img class="right-fourth-person add-animation" src="creative/images/photos/118235/thumb7f61.jpg?1477435947" alt="" />
    	            <img class="right-fifth-person add-animation" src="creative/images/photos/18/thumbc4d4.png?1431433244" alt="" />
    	            <img class="right-sixth-person add-animation" src="creative/images/photos/167683/thumb4690.jpg?1491014996" alt="" />
    	        </div>
    	    </div>
    	</div>
	</div>
</template>

<script>
	import CardsSlider from './CardsSlider.vue';

	export default{
		components: {
			CardsSlider,
		},
		data () {
			return {
				title: "Trusted by Agents",
				description: "The UI Kits, Templates and Dashboards that we've created are used by <b>232,000+ web developers</b> in over <b>400,000 Web Projects</b>. This is what some of them think:",
			}
		}
	}
</script>

<style>
	
</style>