import type { RouteRecordRaw } from "vue-router";
import AboutView from "@/modules/about/views/AboutView.vue";
import ContactsView from "@/modules/contacts/views/ContactsView.vue";
import HomeLayout from "@/modules/shared/home/layouts/HomeLayout.vue";
import HomeView from "@/modules/home/views/HomeView.vue";
import PricesView from "@/modules/prices/views/PricesView.vue";
import ProductsView from "@/modules/products/views/ProductsView.vue";


const homeRoute: RouteRecordRaw = {
    path: '/',
    component: HomeLayout,
    redirect: '/',
    children: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
        ,
        {
            path: '/prices',
            name: 'prices',
            component: PricesView
        }
    ]
}

export default homeRoute;