import { createApp } from "vue";
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
//import 'element-plus/lib/style.css'
app.use(elementplus);

import Vant from 'vant';
import 'vant/lib/index.css';
app.use(Vant);


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
