import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.redirect && !store.state.user) {
    next('/login');
  } else if (to.meta.login && store.state.user) {
    next('/app');
  } next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
