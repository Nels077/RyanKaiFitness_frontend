import Home from "@/pages/Home.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";
import Membership from "@/pages/membership/Membership.vue";
import Classes from "@/pages/classes/Classes.vue";
import ClassSchedule from "@/pages/ClassSchedule.vue";
import MembershipCheckout from "@/pages/MembershipCheckout.vue";

export default [
    {
        path: '/',
        component: Home,
        name: 'home',
        // meta: {
        //     middleware: ['auth'],
        // },
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
    {
        path: '/membership',
        component: Membership,
        name: 'membership',
        // meta: {
        //     middleware: ['auth'],
        // },
    },
    {
        path: '/classes',
        component: Classes,
        name: 'classes',
        // meta: {
        //     middleware: ['auth'],
        // },
    },
    {
        path: '/class-schedule',
        component: ClassSchedule,
        name: 'class-schedule',
        // meta: {
        //     middleware: ['auth'],
        // },
    },
    {
        path: '/membership-checkout',
        component: MembershipCheckout,
        name: 'membership-checkout',
        // meta: {
        //     middleware: ['auth'],
        // },
    }
]