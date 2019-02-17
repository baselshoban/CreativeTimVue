<template>
	<div id="slider" class="cd-section">
        <slider></slider>
    </div>
</template>

<script>
	import Slider from './Slider.vue';

	export default {
		components: {
			Slider,
		},
		props: ['identifier'],
	}
</script>