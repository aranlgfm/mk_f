import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/components/Main.vue';
import NotFound from '@/components/Error/NotFound.vue';
import Home from '@/components/Diary/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '*', component: NotFound },
		{
			path: '/',
			name: 'Main',
			component: Main,
		},
		{
			path: '/Home',
			name: 'Home',
			component: Home,
		},
	],
});
