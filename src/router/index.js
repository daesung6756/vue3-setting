import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Test1 = () => import('../views/About.vue');
const Test2 = () => import('../views/About.vue');
const fileNotFound = () => import('../views/About.vue');

const routes = [
  { path: '/:pathMatch(.*)*', redirect: '/404' },
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/test1', name: 'test1', component: Test1 },
  { path: '/test2', name: 'test2', component: Test2 },
  { path: '/404', name: 'fileNotFound', component: fileNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
