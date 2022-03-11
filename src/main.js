import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import {
  ElButton,
  ElContainer,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
} from "element-plus";

import "~/theme/index.css";

const app = createApp(App);
app.use(router);
app.use(ElButton);
app.use(ElContainer);
app.use(ElAside);
app.use(ElMenu);
app.use(ElSubmenu);
app.use(ElMenuItemGroup);
app.use(ElMenuItem);
app.mount("#app");
