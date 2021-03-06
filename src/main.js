import Vue from "vue";
import App from "./App.vue";

//三级联动组件--全局组件
import TypeNav from "@/pages/Home/TypeNav";
//第一个参数：全局组件名字。第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);

import router from "@/router";

//引入仓库
import store from "@/store";

//测试
import { reqCategoryList } from "@/api";
reqCategoryList();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  //注册仓库：组件实例的身上会有$store
  store,
}).$mount("#app");
