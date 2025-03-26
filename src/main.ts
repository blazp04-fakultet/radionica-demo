import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia"; //? Prepisat ovo
import App from "./App.vue";

const pinia = createPinia(); //? Prepisat ovo
const app = createApp(App); //? Prepisat ovo

app.use(pinia); //? Prepisat ovo
createApp(App).mount("#app");
