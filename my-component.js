import { ref } from 'vue';
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello World',
            isShow: true,
            x: 2,
            users: [
                { name: 'Jake', email: 'jake@gmail.com' },
                { name: 'Allen', email: 'allen@gmail.com' },
                { name: 'Eason', email: 'eason@gmail.com' },
            ]
        };
    },
};