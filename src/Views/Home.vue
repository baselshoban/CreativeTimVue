<template>
	<div>
	    <!-- Headers -->
	    <div id="slider" class="cd-section">
	        <slider></slider>
	    </div>
	    <div class="section section-feature">
	        <div class="features-2 cd-section" id="services">
	            <services></services>
	        </div>

	        <div class="features-5 section-image cd-section" id="payment" style="background-image: url('creative/assets/img/sections/the-how-photographer.jpg')">
	            <services-grid></services-grid>
	        </div>

	        <div class="testimonials-2 section section-testimonials cd-section" id="agents">
	            <testimonials></testimonials>
	            <clients></clients>
	        </div>
	    </div>

		<!-- TESTIMONIALS 1 -->
		<div class="testimonials-1 section-image cd-section" style="background-image: url('creative/assets/img/sections/uriel-soberanes.jpg')" id="partners">
		    <cards></cards>
		</div>
		<!-- END TESTIMONIALS 1 -->

	    <div class="section section-contactus">
	        <!-- BLOGS 3 -->
	        <div class="blog-3 cd-section" id="news">
	            <news-list></news-list>
	        </div>
	        <!-- END BLOGS 4 -->
	        <!-- FEATURES 4 -->
	        <div class="features-4 cd-section" id="policy">
	            <application></application>
	        </div>
	        <!-- END FEATURES 4 -->
	        <!-- CONTACT US 1 -->
	        <div class="contactus-1 section-image cd-section" style="background-image: url('creative/assets/img/sections/soroush-karimi.jpg')" id="contact">
	            <contact-us></contact-us>
	        </div>
	        <!-- END CONTACT US 1 -->
	        <!-- CONTACT US 2 -->
	        <div class="contactus-2 cd-section" id="contactUsMap2" style="height: 700px;">
	            <div class="big-map"></div>
	        </div>
	        <!-- END CONTACT US 2 -->
	    </div>

	    <vertical-nav></vertical-nav>
	</div>
</template>

<script>
	import Slider from '../Components/Slider.vue';
	import Services from '../Components/Services.vue';
	import ServicesGrid from '../Components/ServicesGrid.vue';
	import Testimonials from '../Components/Testimonials.vue';
	import Clients from '../Components/Clients.vue';
	import Cards from '../Components/Cards.vue';
	import NewsList from '../Components/NewsList.vue';
	import Application from '../Components/Application.vue';
	import ContactUs from '../Components/ContactUs.vue';
	import VerticalNav from '../Components/VerticalNav.vue';

	export default {
		components: {
			Slider, 
			Services, 
			ServicesGrid, 
			Testimonials, 
			Clients, 
			Cards, 
			NewsList, 
			Application, 
			ContactUs, 
			VerticalNav
		},
	}
</script>

<style>
	
</style>