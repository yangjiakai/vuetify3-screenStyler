import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import piniaPersist from "pinia-plugin-persist";
import "./styles/main.scss";
import PerfectScrollbar from "vue3-perfect-scrollbar";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersist);
app.use(PerfectScrollbar);
app.use(pinia);
app.use(router);
app.use(vuetify).mount("#app");
