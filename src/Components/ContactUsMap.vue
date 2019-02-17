<template>
	<!-- CONTACT US 2 -->
	<div class="contactus-2 cd-section" :id="identifier" style="height: 700px;">
	    <div class="big-map"></div>
	</div>
	<!-- END CONTACT US 2 -->
</template>

<script>
	import ContactUs from './ContactUs.vue';

	export default {
		components: {
			ContactUs,
		},
		props: ['identifier'],
	}
</script>