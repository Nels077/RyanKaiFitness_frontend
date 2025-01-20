import {defineStore} from "pinia";

export const useBookStore = defineStore("book", {
    state: () => ({
        isBookOpen: false,
    }),
    actions: {
        toggleBook() {
            this.isBookOpen = !this.isBookOpen;
        },
        closeBook() {
            this.isBookOpen = false;
        },
        openBook() {
            this.isBookOpen = true;
        },
    },
});