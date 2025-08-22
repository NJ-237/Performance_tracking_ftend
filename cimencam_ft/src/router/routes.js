import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from  '../components/LoginForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import Dashboard from '../components/Cro_Operator.vue'
import ReportSide from '../components/ReportSide.vue'
import FeedbackForm from '../components/SidebarComponents/FeedbackForm.vue'
import SelectReport from '@/components/ModalTables/SelectReport.vue'
import Performance from '../components/PerformanceForm.vue'
import DashboardAdmin from '../components/Admin_Dashboard/DashboardAdmin.vue'
import FeedbackAdmin from '@/components/Admin_Dashboard/FeedbackAdmin.vue'
import ReportPerform from '@/components/Admin_Dashboard/ReportPerform.vue'
import CDQReport from '@/components/Admin_Dashboard/OperatorsReport.vue/CDQReport.vue'
import CROReport from '@/components/Admin_Dashboard/OperatorsReport.vue/CROReport.vue'
import PatrollerReport from '@/components/Admin_Dashboard/OperatorsReport.vue/PatrollerReport.vue'
import tryMethod from '@/components/tryMethod.vue'
// import { useAuthStore } from '../store/auth' //New 



const routes = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   path: '/',  name: 'home', component: HomeView,  },
    { path: '/login',name: 'about', component: LoginView },
    { path: '/Register', component: RegistrationForm },
    { path: '/Dashboard', component: Dashboard },
    { path: '/Report', name:'Report', component: ReportSide },
    { path: '/try', name:'try', component: tryMethod },
    //  { path: '/Report', name:'Report', component: () => import('../components/ReportSide.vue')},


    //  Sidebar Links : 
    {path: '/Feedback', component: FeedbackForm },
    {path: '/Performance', component: Performance},

    //  Modal Table Form 
     { path: '/SelectReport', component: SelectReport},
  // }
    
       //Admin Side : 
       {path: '/DashbaordAdmin', component: DashboardAdmin},
       {path: '/FeedbackAdmin', component: FeedbackAdmin},
       {path: '/ReportPerform', component: ReportPerform},
       {path: '/CDQ', component: CDQReport},
       {path: '/CRO', component: CROReport},
       {path: '/Patroller', component: PatrollerReport},
  ]
});

export default routes;
