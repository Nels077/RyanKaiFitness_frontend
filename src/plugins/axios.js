import Axios from "axios";

export const $axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})

$axios.interceptors.request.use((config) => {
    if (localStorage.getItem("token")) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    }

    return config;
})

export const AxiosSymbol = Symbol();

export default {
    install: (app, options) => {
        if (!options) options = {};
        app.config.globalProperties.$axios = $axios;
        app.provide(AxiosSymbol, $axios);
    }
}