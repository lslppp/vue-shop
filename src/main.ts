import { createApp} from "vue";
// import from "vue";
import App from "./App.vue";
const app = createApp(App);

import router from "./router";
app.use(router);

import store from "./store";
app.use(store);

import './assets/css/common.css'
import './assets/css/iconfont.css'

// import LyTab from 'ly-tab'
// app.use(LyTab);


import VueAwesomeSwiper from 'vue-awesome-swiper'
app.use(VueAwesomeSwiper)




import elementplus from 'element-plus'
import 'element-plus/dist/index.css'
//import 'element-plus/lib/style.css'
app.use(elementplus);

import Vant from 'vant';
import 'vant/lib/index.css';
app.use(Vant);


// import axios from 'axios'
// import requestq from '@/common/api/http.js'; //把封装好的axios引入
// import VueAxios from 'vue-axios';
// app.use(VueAxios,requestq);

// import {get,post} from '@/common/api/http';
// Vue.prototype.$post = post;
// Vue.prototype.$get= get;






app.config.productionTip = false;
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth /7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();


app.mount("#app");
