<template>
	<div>
		<showcase></showcase>
		<!--     *********    ABOUT US     *********      -->
		<div class="project-4 section section-dark">
		    <about-list></about-list>
		</div>
	</div>
</template>

<script>
	import Showcase from '../Components/Showcase.vue';
	import AboutList from '../Components/AboutList.vue';
	export default {
		components: {
			Showcase,
			AboutList
		},
	}
</script>

<style>
	
</style>