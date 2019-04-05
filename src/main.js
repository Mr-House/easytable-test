import Vue from "vue";
import App from "./App.vue";
import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";

// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
