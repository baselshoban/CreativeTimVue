<template>
	<footer class="footer footer-black  footer-white ">
	    <div class="container">
	        <div class="row">
	            <nav class="footer-nav">
	                <ul>
	                    <li>
	                        <a href="http://www.likesyria.sy/" target="_blank">LikeSyria</a>
	                    </li>
	                    <li>
	                        <a href="http://www.likesyria.sy" target="_blank">Blog</a>
	                    </li>
	                    <li>
	                        <a href="http://www.likesyria.sy" target="_blank">Licenses</a>
	                    </li>
	                </ul>
	            </nav>
	            <div class="credits ml-auto">
	          <span class="copyright">
	            ©
	            {{year}}, made with <i class="fa fa-heart heart"></i> by LikeSyria Team
	          </span>
	            </div>
	        </div>
	    </div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				year: new Date().getFullYear()
			};
		}
	}
</script>

<style>
	
</style>