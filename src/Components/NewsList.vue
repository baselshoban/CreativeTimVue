<template>
	<div class="container">
	    <div class="row">
	        <div class="col-md-10 ml-auto mr-auto">
	            <h2 class="title" v-text="title"></h2>
	            <br />
	            <div class="card card-plain card-blog" v-for="item in items" :key="item.id">
	                <div class="row" v-if="item.id % 2 == 0">
	                	<div class="col-md-8">
	                        <div class="card-body">
	                            <h6 class="card-category text-info" v-html="category"></h6>
	                            <h3 class="card-title">
	                                <a :href="item.link" v-text="item.title"></a>
	                            </h3>
	                            <p class="card-description">
	                                {{ item.description }}
	                                <a :href="item.link"> Read More </a>
	                            </p>
	                            <p class="author">
	                                by
	                                <a :href="item.author.link">
	                                    <b v-text="item.author.name"></b>
	                                </a>, {{item.created_at}}
	                            </p>
	                        </div>
	                    </div>
	                    <div class="col-md-4">
	                        <div class="card-image">
	                        	<a :href="item.link">
	                            	<img class="img" :src="item.img" />
	                            </a>
	                        </div>
	                    </div>
	                </div>
	                <div class="row" v-else>
	                    <div class="col-md-4">
	                        <div class="card-image">
	                        	<a :href="item.link">
	                            	<img class="img" :src="item.img" />
	                            </a>
	                        </div>
	                    </div>
	                    <div class="col-md-8">
	                        <div class="card-body">
	                            <h6 class="card-category text-info" v-html="category"></h6>
	                            <h3 class="card-title">
	                                <a :href="item.link" v-text="item.title"></a>
	                            </h3>
	                            <p class="card-description">
	                                {{ item.description }}
	                                <a :href="item.link"> Read More </a>
	                            </p>
	                            <p class="author">
	                                by
	                                <a :href="item.author.link">
	                                    <b v-text="item.author.name"></b>
	                                </a>, {{item.created_at}}
	                            </p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: "Latest News",
				items: [
					{
						id: 1,
						author: {link: "#pop", name: "Megan Rose Dickey"},
						img: "creative/assets/img/sections/jeff-sheldon.jpg",
						category: "Enterprise",
						title: "SoundCloud says it’s going to survive, but how?",
						description: "No matter what happens — funding versus acquisition versus who knows what — Ljung says SoundCloud is not going away “anytime in the foreseeable future.” I hope that’s true, but I can’t help but feel a bit skeptical. — and…",
						link: "#pop",
						created_at: "11 min ago"
					},
					{
						id: 2,
						author: { link: "#pop", name: "Josh Constine" },
						img: "creative/assets/img/sections/rawpixel-comm.jpg",
						category: '<i class="fa fa-free-code-camp" aria-hidden="true"></i> Trending',
						title: "Uber acqui-hires social app studio Swipe Labs",
						description: "These issues might be making it a bit harder for Uber to hire right now in the competitive Silicon Valley job market. Acqui-hiring companies like it’s doing here with Swipe Labs lets it roll up a bunch of good talent — and…",
						link: "#pop",
						created_at: "2 days ago"
					},
					{
						id: 3,
						author: {link: "#pop", name: "Sarah Perez"},
						img: "creative/assets/img/sections/jeremy-yap.jpg",
						category: "Startups",
						title: "HBO and Netflix lead this year’s nominations",
						description: "Streaming services once again top the list of this year’s Emmy nominations – another indicator of the shift in how today’s consumers are watching TV. HBO, which has been available.",
						link: "#pop",
						created_at: "14 Jul 2017"
					},
				],
			}
		}
	}
</script>

<style>
	
</style>