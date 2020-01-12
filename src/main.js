import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "primevue/resources/themes/nova-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
