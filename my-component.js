import { ref } from 'vue';
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello World',
            isShow: true,
            x: 2,
            y: 100,
            users: [
                { name: 'Jake', email: 'jake@gmail.com' },
                { name: 'Allen', email: 'allen@gmail.com' },
                { name: 'Eason', email: 'eason@gmail.com' },
            ],
            count: 0,
            name: 'Jake'
        };
    },
    methods: {
        myFun(value) {
            return this.x * this.y + value;
        },
        countEffect() {
            this.count += 1;
        },
        nameEffect() {
            this.isShow = !this.isShow;
            this.name = (!this.isShow) ? 'Allen' : 'Jake';
        }
    }
};