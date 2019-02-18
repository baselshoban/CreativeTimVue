<template>
    <div class="page-carousel">
        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators" v-show="this.indicators">
                <li 
                	data-target="#carouselExampleIndicators2" v-for="item in this.items" :key="item.id" 
                	:class="{ active: item.id == 1 }" :data-slide-to="item.id -1"
                ></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item" :class="{ active: item.id == 1 }" v-for="item in this.items" :key="item.id">
                    <div class="card card-testimonial card-plain">
                        <div class="card-avatar">
                            <img class="img" :src="item.img" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-description" v-text="item.description"></h5>
                            <div class="card-footer">
                                <h4 class="card-title" v-text="item.title"></h4>
                                <h6 class="card-category" v-text="item.subtitle"></h6>
                                <div class="card-stars">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="carousel-item">
                    <div class="card card-testimonial card-plain">
                        <div class="card-avatar">
                            <img class="img" src="creative/images/photos/134607/thumbd4f6.jpg?1487680276" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-description">
                                "Love the shapes and color palette on this one! Perfect for one of my pet projects!"
                            </h5>
                            <div class="card-footer">
                                <h4 class="card-title">Robin Leysen</h4>
                                <h6 class="card-category">Web Developer</h6>
                                <div class="card-stars">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card card-testimonial card-plain">
                        <div class="card-avatar">
                            <img class="img" src="creative/images/photos/125268/thumbaf08.jpg?1497799215" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-description">
                                "Love it. Use it for prototypes and along with Paper Dashboard."
                            </h5>
                            <div class="card-footer">
                                <h4 class="card-title">Cristi Jora</h4>
                                <h6 class="card-category">Web Developer</h6>
                                <div class="card-stars">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div v-show="this.controls.enabled">
                <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span :class="this.controls.prev"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span :class="this.controls.next"></span>
                    <span class="sr-only">Next</span>
                </a>
           </div>
        </div>
    </div>
</template>

<script>
	export default{
		data () {
			return {
				items: [
					{
						id: 1,
						img: "creative/images/faces/twitter/mlane/128.jpg",
						background_type: 0, 
						background_value: "#fff0",
						title: "Chase Jackson",
						subtitle: "Web Developer",
						description: "\"I'm newer to the front-end... With my creative side lacking in experience this really put me in the right spot to speed through the fast lane. I love this Design kit so much!\"",
					},
					{
						id: 2,
						img: "creative/images/photos/134607/thumbd4f6.jpg?1487680276",
						background_type: 0, 
						background_value: "#fff0",
						title: "Robin Leysen",
						subtitle: "Web Developer",
						description: "\"Love the shapes and color palette on this one! Perfect for one of my pet projects!\"",
					},
					{
						id: 3,
						img: "creative/images/photos/125268/thumbaf08.jpg?1497799215",
						background_type: 0, 
						background_value: "#fff0",
						title: "Cristi Jora",
						subtitle: "Web Developer",
						description: "\"Love it. Use it for prototypes and along with Paper Dashboard.\"",
					},
				],
				controls: {enabled: true, prev: "fa fa-angle-left", next: "fa fa-angle-right"},
				indicators: true,
			}
		}
	}
</script>

<style>
	
</style>