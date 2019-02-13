import VueRouter from 'vue-router';


let routes = [
	{
		path: '/',
		component: require('./Views/Home.vue').default,
	},
	{
		path: '/about',
		component: require('./Views/About.vue').default,
	}
];

export default new VueRouter({
	mode: 'history',
	routes,
});