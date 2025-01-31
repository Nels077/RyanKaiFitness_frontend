import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref(JSON.parse(localStorage.getItem("user")) || null);
    const token = ref(localStorage.getItem("token") || null);

    const setUser = (userData) => {
        user.value = userData;
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", userData.token);
    };

    const logout = () => {
        user.value = null;
        token.value = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return {
        user,
        token,
        setUser,
        logout,
    };
});
