import { createStore } from 'vuex';

import state from './state/index';
import getters from './getters/index';
import mutations from './mutations/index';
import actions from './actions/index';
import modules from './modules/index';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
