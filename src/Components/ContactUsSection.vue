<template>
	<!-- CONTACT US 1 -->
	<div :id="identifier">
		<div class="contactus-1 section-image cd-section" style="background-image: url('creative/assets/img/sections/soroush-karimi.jpg')" >
		    <contact-us></contact-us>
		</div>
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