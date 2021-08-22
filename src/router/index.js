import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Chat from '../views/Chat.vue'

const routes = [{
        path: '/',
        name: 'Chat',
        component: () =>
            import ('@/views/Chat.vue')
    },
    {
        path: '/messages',
        name: 'Message',
        component: () =>
            import ('@/views/Message.vue')
    },
    // {
    //     path: '/calls',
    //     name: 'Call',
    //     component: () =>
    //         import ('../views/Call.vue')
    // },
    // {
    //     path: '/contacts',
    //     name: 'Contact',
    //     component: () =>
    //         import ('../views/Contact.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router