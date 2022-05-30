import { createStore } from 'vuex';

const { state } = require('./state/index');
const { getters } = require('./getters/index');
const { mutations } = require('./mutations/index');
const { actions } = require('./actions/index');
const { modules } = require('./modules/index');

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
