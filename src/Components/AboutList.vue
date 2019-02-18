<template>
	<div class="container">
	    <div class="row">
	        <div class="col-md-8 ml-auto mr-auto text-center">
	            <h2 class="title" v-html="title"></h2>
	            <h5 class="description" v-html="description"></h5>
	        </div>
	    </div>
	    <div class="space-top"></div>
	    <div v-for="item in items" :key="item.id">
		    <div class="row" v-if="item.id % 2 == 0" :id="item.identifier">
		    	<div class="col-md-5 mr-auto">
		    	    <div class="card card-plain">
		    	        <div class="card-body">
		    	            <h6 class="card-category" v-text="item.category"></h6>
		    	            <a :href="item.link">
		    	                <h3 class="card-title" v-text="item.title"></h3>
		    	            </a>
		    	            <p class="card-description" v-text="item.description"></p>
		    	            <div class="card-footer">
		    	                <a :href="item.link" class="btn btn-link btn-neutral">
		    	                    <i class="fa fa-book" aria-hidden="true"></i> Read More
		    	                </a>
		    	                <a href="#pablo" class="btn btn-just-icon btn-link btn-neutral">
		    	                    <i class="fa fa-apple" aria-hidden="true"></i>
		    	                </a>
		    	                <a href="#pablo" class="btn btn-just-icon btn-link btn-neutral">
		    	                    <i class="fa fa-android" aria-hidden="true"></i>
		    	                </a>
		    	                <a href="#pablo" class="btn btn-just-icon btn-link btn-neutral">
		    	                    <i class="fa fa-windows" aria-hidden="true"></i>
		    	                </a>
		    	            </div>
		    	        </div>
		    	    </div>
		    	</div>
		        <div class="col-md-5 ml-auto">
		            <div class="card" data-background="image" :style="background(item)">
		                <div class="card-icon">
		                    <i :class="item.icon"></i>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div class="row" v-else :id="item.identifier">
		        <div class="col-md-5 ml-auto">
		            <div class="card" data-background="image" :style="background(item)">
		                <div class="card-icon">
		                    <i :class="item.icon"></i>
		                </div>
		            </div>
		        </div>
		        <div class="col-md-5 mr-auto">
		            <div class="card card-plain">
		                <div class="card-body">
		                    <h6 class="card-category" v-text="item.category"></h6>
		                    <a :href="item.link">
		                        <h3 class="card-title" v-text="item.title"></h3>
		                    </a>
		                    <p class="card-description" v-text="item.description"></p>
		                    <div class="card-footer">
		                        <a :href="item.link" class="btn btn-link btn-neutral">
		                            <i class="fa fa-book" aria-hidden="true"></i> Read More
		                        </a>
		                        <a href="#pablo" class="btn btn-just-icon btn-link btn-neutral">
		                            <i class="fa fa-apple" aria-hidden="true"></i>
		                        </a>
		                        <a href="#pablo" class="btn btn-just-icon btn-link btn-neutral">
		                            <i class="fa fa-android" aria-hidden="true"></i>
		                        </a>
		                        <a href="#pablo" class="btn btn-just-icon btn-link btn-neutral">
		                            <i class="fa fa-windows" aria-hidden="true"></i>
		                        </a>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div v-if="item.id != items.length">
			    <br/>
			    <hr />
			    <br/>
		    </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "About Us",
				description: "This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.",
				items: [
					{
						id: 1,
						identifier: "establishing",
						link: "#self",
						background_type: 0, 
						background_value: "creative/assets/img/sections/sebastien-gabrieles.jpg",
						icon: "nc-icon nc-mobile",
						category: "Establishing",
						title: "The need of a great Establishing",
						subtitle: "",
						description: "Artificial intelligence-focused investment funds are a dime a dozen these days. Everyone knows there’s money to be made from AI, but to capture value, good VCs know they need to back products and not technologies.",
					},
					{
						id: 2,
						identifier: "management",
						link: "#self",
						background_type: 0, 
						background_value: "creative/assets/img/sections/john-towner.jpg",
						icon: "nc-icon nc-controller-modern",
						category: "Management",
						title: "The aesthetic quality of a management",
						subtitle: "",
						description: "Eventually, the data collected from the grant program could allow the two to play a bit of machine learning moneyball — valuing machine learning engineers without traditional metrics (like having a PhD from Stanford)...",
					},
					{
						id: 3,
						identifier: "vision",
						link: "#self",
						background_type: 0, 
						background_value: "creative/assets/img/sections/sebastien-gabrieles.jpg",
						icon: "nc-icon nc-mobile",
						category: "Vision",
						title: "The need of a great Establishing",
						subtitle: "",
						description: "Artificial intelligence-focused investment funds are a dime a dozen these days. Everyone knows there’s money to be made from AI, but to capture value, good VCs know they need to back products and not technologies.",
					},
					{
						id: 4,
						identifier: "goals",
						link: "#self",
						background_type: 0, 
						background_value: "creative/assets/img/sections/john-towner.jpg",
						icon: "nc-icon nc-controller-modern",
						category: "Goals",
						title: "The aesthetic quality of a management",
						subtitle: "",
						description: "Eventually, the data collected from the grant program could allow the two to play a bit of machine learning moneyball — valuing machine learning engineers without traditional metrics (like having a PhD from Stanford)...",
					},
				],
			}
		},
		methods: {
			background (item) {
				if (item.background_type == 0)
					return {
						backgroundImage: 'url(' + item.background_value + ')',
					};
				else
					return {
						backgroundColor: item.background_value,
					};
			},
		},
	}
</script>

<style>
	
</style>