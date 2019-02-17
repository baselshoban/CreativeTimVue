<template>
	<div class="row">
	    <div class="col-md-4" v-for="item in items" :key="item.id">
	        <div class="card" data-background="image" :style="background(item)">
	            <div class="card-body">
	                <h6 class="card-category" v-text="item.title"></h6>
	                <div class="card-icon">
	                    <i :class="item.icon"></i>
	                </div>
	                <p class="card-description" v-text="item.subtitle"></p>
	                <div class="card-footer">
	                    <a :href="item.link.url" class="btn btn-link btn-neutral">
	                        <i class="fa fa-book" aria-hidden="true"></i> {{ item.link.text }}
	                    </a>
	                </div>
	            </div>
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
						title: "DESIGN",
						subtitle: "Unlike fashionable design, it lasts many years – even in today’s throwaway society.",
						icon: "nc-icon nc-world-2",
						background_type: 0, 
						background_value: "creative/assets/img/sections/jan-sendereks.jpg",
						link: {text: "SHOW MORE", url: "#", external: false},
					},
					{
						id: 2,
						title: "UI Kits",
						subtitle: "Imagine if you could go to the profile of a friend and instead of scrolling through...",
						icon: "nc-icon nc-single-copy-04",
						background_type: 0, 
						background_value: "creative/assets/img/sections/anders-jilden.jpg",
						link: {text: "SHOW MORE", url: "#", external: false},
					},
					{
						id: 3,
						title: "Development",
						subtitle: "For starters, it seemed like a good idea to keep a running list of Vision investments.",
						icon: "nc-icon nc-time-alarm",
						background_type: 0, 
						background_value: "creative/assets/img/sections/uriel-soberanes.jpg",
						link: {text: "SHOW MORE", url: "#", external: false},
					},
				],
			}
		},
		methods: {
			background (item) {
				console.log(item);
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