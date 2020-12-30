import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutMe"),
    meta: {
      title: "About me"
    }
  },
  {
    path: "/about",
    name: "about-me",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutMe"),
    meta: {
      title: "About me"
    }
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog"),
    meta: {
      title: "Blog"
    }
  },
  {
    path: "/portifolio",
    name: "portifolio",
    component: () => import(/* webpackChunkName: "portifolio" */ "../views/Portifolio"),
    meta: {
      title: "Portifolio"
    }
  },
  {
    path: "/cv",
    name: "cv",
    component: () => import(/* webpackChunkName: "cv" */ "../views/CV"),
    meta: {
      title: "CV"
    }
  },
  {
    path: "/contact",
    name: "contact-me",
    component: () => import(/* webpackChunkName: "contact" */ "../views/ContactMe"),
    meta: {
      title: "Contact me"
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = `${document.title} | ${to.meta.title}`;
  });
});

export default router;
