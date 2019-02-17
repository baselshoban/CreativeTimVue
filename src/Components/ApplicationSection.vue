<template>
	<!-- FEATURES 4 -->
	<div class="features-4 cd-section" :id="identifier">
	    <application></application>
	</div>
	<!-- END FEATURES 4 -->
</template>

<script>
	import Application from './Application.vue';

	export default {
		components: {
			Application,
		},
		props: ['identifier'],
	}
</script>