import { createApp } from "vue";
import { createPinia } from "pinia";0
import App from "./App.vue";
import "./assets/main.css";
import routes from "./routes/routes.js";
import { createRouter, createWebHistory } from "vue-router";
import axios from "@/plugins/axios.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");

    if (to.meta?.middleware?.includes("auth")) {
        if (!token) {
            return next({ name: "login" });
        }
    }

    if ((to.name === "login" || to.name === "register") && token) {
        return next({ name: "" });
    }

    next();
});

const pinia = createPinia();

const app = createApp(App);

app.use(axios);
app.use(pinia);
app.use(router).mount("#app");
