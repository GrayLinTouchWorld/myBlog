// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '../src/assets/css/reset.css'
import '../src/assets/css/common.css'
import mavonEditor from 'mavon-editor'//markdown编辑器
import 'mavon-editor/dist/css/index.css'
// import '../src/assets/js/font-size'
import 'lib-flexible/flexible'
import 'animate.css'


Vue.config.productionTip = false

// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     // if(htmlWidth >= 1366) return;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();

Vue.use(ElementUI);
Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
