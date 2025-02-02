import { createRouter, createWebHistory} from 'vue-router'
import RegisterationPage from '../components/RegisterationPage.vue'

const routes =[
    {path:'/', component: RegisterationPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router  