import VueRouter from 'vue-router';


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
      console.log(to)
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

let routes = [
	{
		path: '/home',
		component: require('./Views/Home.vue').default,
		alias: '/',
		meta: { scrollToTop: true }
	},
	{
		path: '/about',
		component: require('./Views/About.vue').default,
		meta: { scrollToTop: true }
	}
];


export default new VueRouter({
	mode: 'history',
	scrollBehavior,
	routes,
});