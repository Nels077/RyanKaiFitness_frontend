import Home from "@/pages/Home.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";
import Membership from "@/pages/membership/Membership.vue";
import Classes from "@/pages/classes/Classes.vue";
import ClassSchedule from "@/pages/ClassSchedule.vue";
import MembershipCheckout from "@/pages/MembershipCheckout.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import TermsAndConditions from "@/pages/TermsAndConditions.vue";
import CookiePolicy from "@/pages/CookiePolicy.vue";
import AccessibilityStatement from "@/pages/AccessibilityStatement.vue";

export default [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            middleware: ['auth'],
        },
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
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/classes',
        component: Classes,
        name: 'classes',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/class-schedule',
        component: ClassSchedule,
        name: 'class-schedule',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/membership-checkout',
        component: MembershipCheckout,
        name: 'membership-checkout',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/privacy-policy',
        component: PrivacyPolicy,
        name: 'privacy-policy',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/terms-and-conditions',
        component: TermsAndConditions,
        name: 'terms-and-conditions',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/cookie-policy',
        component: CookiePolicy,
        name: 'cookie-policy',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/accessibility-statement',
        component: AccessibilityStatement,
        name: 'accessibility-statement',
        meta: {
            middleware: ['auth'],
        },
    },
]