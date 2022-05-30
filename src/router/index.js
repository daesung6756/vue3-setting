import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Test1 = () => import('../views/About.vue');
const Test2 = () => import('../views/About.vue');
const fileNotFound = () => import('../views/fileNotFound.vue');

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/test1', name: 'test1', component: Test1 },
  { path: '/test2', name: 'test2', component: Test2 },
  { path: '/:pathMatch(.*)*', component: fileNotFound },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
