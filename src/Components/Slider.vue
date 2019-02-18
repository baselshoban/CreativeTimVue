<template>
	<div class="page-carousel">
	    <div class="filter"></div>
	    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	        <ol class="carousel-indicators" v-show="this.indicators">
	            <li 
	            	data-target="#carouselExampleIndicators" v-for="item in this.items" :key="item.id" 
	            	:class="{ active: item.id == 1 }" :data-slide-to="item.id -1"
	            ></li>
	        </ol>
	        <div class="carousel-inner" role="listbox">
	            <div class="carousel-item" :class="{ active: item.id == 1 }" v-for="item in this.items" :key="item.id">
	                <div class="page-header" :style="background(item)">
	                    <div class="filter"></div>
	                    <div class="content-center">
	                        <div class="container">
	                            <div class="row">
	                                <div class="col-md-6 text-left">
	                                    <h1 class="title" v-text="item.title"></h1>
	                                    <h5 v-text="item.description"></h5>
	                                    <br />
	                                    <div class="buttons">
	                                        <a href="#pablo" style="background-color:#0f60a3;" class="btn btn-border btn-round  btn-lg">
	                                            Read More
	                                        </a>
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
	                                            <i class="fa fa-twitter"></i>
	                                        </a>
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
	                                            <i class="fa fa-facebook-square"></i>
	                                        </a>
                                            <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	           <!--  <div class="carousel-item">
	                <div class="page-header" style="background-image: url('https://images.unsplash.com/photo-1482690205767-61deebe15ef7?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=')">
	                    <div class="filter"></div>
	                    <div class="content-center">
	                        <div class="container">
	                            <div class="row">
	                                <div class="col-md-8 ml-auto mr-auto text-center">
	                                    <h1 class="title">GoPay</h1>
	                                    <h5>To be as a like company one of the best companies in creations and developing the soft ware ideas in the Syrian market ( the leaders in offering all kind of technical informations services )..</h5>
	                                    <br />
	                                    <h6>Connect with us:</h6>
	                                    <div class="buttons">
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
	                                            <i class="fa fa-twitter"></i>
	                                        </a>
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
	                                            <i class="fa fa-facebook-square"></i>
	                                        </a>
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
	                                            <i class="fa fa-instagram"></i>
	                                        </a>
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-just-icon">
	                                            <i class="fa fa-google-plus"></i>
	                                        </a>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="carousel-item">
	                <div class="page-header" style="background-image: url('https://images.unsplash.com/photo-1498063669468-89723a87123d?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=')">
	                    <div class="filter"></div>
	                    <div class="content-center">
	                        <div class="container">
	                            <div class="row">
	                                <div class="col-md-7 ml-auto text-right">
	                                    <h2 class="title">GoPay</h2>
	                                    <h5>To be as a like company one of the best companies in creations and developing the soft ware ideas in the Syrian market ( the leaders in offering all kind of technical informations services ).</h5>
	                                    <br />
	                                    <div class="buttons">
	                                        <a href="#pablo" class="btn btn-neutral btn-link btn-lg">
	                                            <i class="fa fa-share-alt"></i> Share Offer
	                                        </a>
	                                        <a href="#pablo" style="background-color: #013E74;" class="btn btn-border btn-round btn-lg">
	                                            <i class="fa fa-shopping-cart"></i> Shop Now
	                                        </a>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div> -->
	        </div>
	        <div v-show="this.controls.enabled">
	        	<a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	        	    <span :class="this.controls.prev"></span>
	        	    <span class="sr-only">Previous</span>
	        	</a>
	        	<a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	        	    <span :class="this.controls.next"></span>
	        	    <span class="sr-only">Next</span>
	        	</a>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						id: 1,
						background_type: 0, 
						background_value: "https://images.unsplash.com/photo-1498063401574-13cbee350467?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
						title: "GoPay",
						subtitle: "",
						description: " To be as a like company one of the best companies in creations and developing the soft ware ideas in the Syrian market ( the leaders in offering all kind of technical informations services ).",
					},
					{
						id: 2,
						background_type: 0, 
						background_value: "https://images.unsplash.com/photo-1482690205767-61deebe15ef7?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=",
						title: "GoPay",
						subtitle: "",
						description: "To be as a like company one of the best companies in creations and developing the soft ware ideas in the Syrian market ( the leaders in offering all kind of technical informations services )..",
					},
					{
						id: 3,
						background_type: 0, 
						background_value: "https://images.unsplash.com/photo-1498063669468-89723a87123d?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=",
						title: "GoPay",
						subtitle: "",
						description: " To be as a like company one of the best companies in creations and developing the soft ware ideas in the Syrian market ( the leaders in offering all kind of technical informations services ).",
					},
				],
				controls: {enabled: true, prev: "fa fa-angle-left", next: "fa fa-angle-right"},
				indicators: true,
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