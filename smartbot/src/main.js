import Vue from 'vue'
import App from './App.vue'
import store from "/src/store";
import router from "@/router";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
const vm=new Vue({
  template:`<App></App>`,
  components:{App},
  store,
  router,
  render: h => h(App),
}).$mount('#app')
console.log(vm)
