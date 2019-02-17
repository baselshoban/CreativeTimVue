<template>
	<!-- CONTACT US 1 -->
	<div class="contactus-1 section-image cd-section" style="background-image: url('creative/assets/img/sections/soroush-karimi.jpg')" :id="identifier">
	    <contact-us></contact-us>
	</div>
	<!-- END CONTACT US 1 -->
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