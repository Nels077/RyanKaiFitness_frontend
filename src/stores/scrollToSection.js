export const scrollToSection = (router, route, section) => {
    if (router.currentRoute.value.path === route) {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        router.push(route).then(() => {
            const targetSection = document.getElementById(section);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
};
