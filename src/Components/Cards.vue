<template>
    <div class="row">
        <div class="col-md-4" v-for="item in items" :key="item.id">
            <div class="card card-testimonial">
                <div class="card-icon">
                    <i :class="item.icon" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <p class="card-description" v-text="item.description"></p>
                    <div class="card-footer">
                        <h4 class="card-title" v-text="item.title"></h4>
                        <h6 class="card-category" v-text="item.subtitle"></h6>
                        <div class="card-avatar">
                            <a href="#pablo">
                                <img class="img" :src="item.img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-md-4">
            <div class="card card-testimonial">
                <div class="card-icon">
                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <p class="card-description">
                        "Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is not so attractive"
                    </p>
                    <div class="card-footer">
                        <h4 class="card-title">Telsa</h4>
                        <h6 class="card-category">@telsagroup</h6>
                        <div class="card-avatar">
                            <a href="#pablo">
                                <img class="img" src="creative/assets/img/faces/like.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-testimonial">
                <div class="card-icon">
                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                </div>
                <div class="card-body">
                    <p class="card-description">
                        "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!"
                    </p>
                    <div class="card-footer">
                        <h4 class="card-title">Go Pay</h4>
                        <h6 class="card-category">@gopay</h6>
                        <div class="card-avatar">
                            <a href="#pablo">
                                <img class="img" src="creative/assets/img/faces/like.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
	export default {
		data () {
			return {
				items: [
					{
						id: 1,
						title: "Like ASP",
						subtitle: "@likesyria",
						description: "\"Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\"",
						icon: "fa fa-quote-right",
						img: "creative/assets/img/faces/like.png",
						background_type: 0, 
						background_value: "#fff",
					},
					{
						id: 2,
						title: "Telsa",
						subtitle: "@telsagroup",
						description: "\"Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is not so attractive\"",
						icon: "fa fa-quote-right",
						img: "creative/assets/img/faces/like.png",
						background_type: 0, 
						background_value: "#fff",
					},
					{
						id: 3,
						title: "Go Pay",
						subtitle: "@gopay",
						description: "\"Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\"",
						icon: "fa fa-quote-right",
						img: "creative/assets/img/faces/like.png",
						background_type: 0, 
						background_value: "#fff",
					},
				],
			}
		}
	}
</script>

<style>
	
</style>