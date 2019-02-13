import './bootstrap.js';
import router from './routes';
import NavBar from './Components/NavBar.vue';
import Footer from './Components/Footer.vue';

Vue.component('nav-bar', NavBar);
Vue.component('end-footer', Footer);

new Vue({
  el: '#app',

  router,
});
