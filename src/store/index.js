import Vue from "vue";
import Vuex from "vuex";

//state:仓库存储数据的地方
const state = {};
//mutations:修改states的唯一手段
const mutations = {};
//actions:处理action，可以书写自己的业务逻辑，也可以异步处理
const actions = {};
//getters:理解为计算属性，用于简化数据仓库，让各组件获取仓库数据更加方便
const getters = {};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
