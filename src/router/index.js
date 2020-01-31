import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import I18n from "../i18n";
import Accommodations from "../views/lists/Accommodations";
import PsychologicalPlatforms from "../views/lists/PsychologicalPlatforms";
import MedicalPlatforms from '../views/lists/MedicalPlatforms';
import Supplies from "../views/supplies/Supplies";
import SuppliesSubmission from "../views/supplies/SuppliesSubmission";
import Staff from "../views/roles/Staff";
import People from "../views/roles/People";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      icon: "wsicon wsicon-Home",
      i18n: "pages.home._name"
    }
  },
  // {
  //   path: '/stream',
  //   name: 'stream',
  //   component: Stream,
  //   meta: {
  //     icon: "mdi-timeline-clock",
  //     i18n: "pages.stream._name"
  //   }
  // },
  {
    path: '/accommodations',
    name: 'accommodations',
    component: Accommodations,
    meta: {
      icon: "wsicon wsicon-hotel",
      i18n: "pages.accommodations._name",
      subtitle: "为医护人员提供免费住宿信息列表，支持地理位置排序与地区过滤，以此提供基本生活保障"
    }
  },
  {
    path: '/hospital/supplies',
    name: 'supplies',
    component: Supplies,
    meta: {
      icon: "wsicon wsicon-hospital",
      i18n: "pages.supplies._name",
      subtitle: "支持紧急程度与需求核验公示、按照地区过滤等多种功能，方便直观了解情况"
    }
  },
  {
    path: '/hospital/supplies/submit',
    name: 'suppliesSubmission',
    component: SuppliesSubmission,
    meta: {
      icon: "mdi-file-document-box-plus",
      i18n: "pages.suppliesSubmission._name",
      subtitle: "提交新的医院物资需求",
      hide: true
    }
  },
  {
      path: '/MedicalPlatforms',
      name: 'MedicalPlatforms',
      component: MedicalPlatforms,
      meta: {
          icon: "mdi-hospital",
          i18n: "pages.medical._name"
      }
  },
  {
      path: '/psychological',
      name: 'psychological',
      component: PsychologicalPlatforms,
      meta: {
          icon: "mdi-heart",
          i18n: "pages.psychological._name"
      }
  },
  {
      path: '/staff',
      name: 'staff',
      component: Staff,
      meta: {
          icon: "mdi-heart",
          i18n: "pages.staff._name"
      }
  },
  {
      path: '/people',
      name: 'people',
      component: People,
      meta: {
          icon: "mdi-heart",
          i18n: "pages.people._name"
      }
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next({path: "/"})
    },
    meta: {
      hide: true
    }
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${I18n.t(to.meta.i18n)} | ${I18n.t('app.name')}`;
  next();
});

export default router
