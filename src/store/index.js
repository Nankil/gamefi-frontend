import {createStore} from 'vuex';
import {routes} from '../routes';

const exploitedRoutes = [];
for (route of routes) {
  exploitedRoutes.push({
    path: route.path,
  });
}


export default createStore({
  state: {
    routes: exploitedRoutes,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
