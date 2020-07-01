import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/page1',
		},
		{
			path: '/page1',
			name: 'Page1',
			component: () => import('@/views/Page1.vue'),
    },
    {
			path: '/page2',
			name: 'Page2',
			component: () => import('@/views/Page2.vue'),
		},
	
	],
});