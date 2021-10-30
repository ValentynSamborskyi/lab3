import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
import BasicFile from '../view/BasicFile.vue'
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:BasicFile
        }
    ]
})

