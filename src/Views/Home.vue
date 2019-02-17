<template>
	<div>
	    <!-- Headers -->
	    <slider-section identifier="slider"></slider-section>

    <!-- <div class="section section-feature"> -->
    	<image-cards-section identifier="services"></image-cards-section>

    	<cross-cards-section identifier="payment"></cross-cards-section>
		
		<testimonials-clients-section identifier="agents"></testimonials-clients-section>
    <!-- </div> -->

		<color-cards-section identifier="partners"></color-cards-section>

    <!-- <div class="section section-contactus"> -->
        <news-list-section identifier="news"></news-list-section>
        <application-section identifier="policy"></application-section>
        <contact-us-section identifier="contact"></contact-us-section>
        <contact-us-map identifier="contactUsMap2"></contact-us-map>
        
    <!-- </div> -->

	    <vertical-nav></vertical-nav>
	</div>
</template>

<script>
	import SliderSection from '../Components/SliderSection.vue';
	import ImageCardsSection from '../Components/ImageCardsSection.vue';
	import CrossCardsSection from '../Components/CrossCardsSection.vue';
	import TestimonialsClientsSection from '../Components/TestimonialsClientsSection.vue';
	import ColorCardsSection from '../Components/ColorCardsSection.vue';
	import NewsListSection from '../Components/NewsListSection.vue';
	import ApplicationSection from '../Components/ApplicationSection.vue';
	import ContactUsSection from '../Components/ContactUsSection.vue';
	import ContactUsMap from '../Components/ContactUsMap.vue';
	import VerticalNav from '../Components/VerticalNav.vue';

	export default {
		components: {
			SliderSection, 
			ImageCardsSection,
			CrossCardsSection,
			TestimonialsClientsSection,
			ColorCardsSection,
			NewsListSection,
			ApplicationSection,
			ContactUsSection, 
			ContactUsMap, 
			VerticalNav
		},
	}
</script>

<style>
	
</style>