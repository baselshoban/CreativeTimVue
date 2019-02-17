<template>
	<!-- BLOGS 3 -->
	<div class="blog-3 section cd-section" :id="identifier">
	    <news-list></news-list>
	</div>
    <!-- END BLOGS 4 -->
</template>

<script>
	import NewsList from './NewsList.vue';

	export default {
		components: {
			NewsList,
		},
		props: ['identifier'],
	}
</script>
