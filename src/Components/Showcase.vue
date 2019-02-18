<template>
	<div class="page-header page-header-small" :style="background">
	    <div class="filter filter-black"></div>
	    <div class="content-center">
	        <div class="container">
	            <h1 v-html="title"></h1>
	            <h3 v-html="description"></h3>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hello, <br /> We are GoPay Team.",
				description: "Let us tell you more about what we do.",
				background_type: 0, 
				background_value: "https://images.unsplash.com/photo-1498475932703-000eb46e6375?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
			}
		},
		computed: {
			background() {
				if (this.background_type == 0)
					return {
						backgroundImage: 'url(' + this.background_value + ')',
					};
				else
					return {
						backgroundColor: this.background_value,
					};
			},
		},
	}
</script>

<style>
	
</style>