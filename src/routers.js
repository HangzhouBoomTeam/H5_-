import VueRouter from 'vue-router'
import MyResult from "./MyResult.vue";
import App from "./App.vue";

const router = new VueRouter({
    mode: 'hash',
    routes: [{
        name: 'home',
        path: '/',
        component: App
    }, {
        name: 'my',
        path: '/my/:name',
        component: MyResult
    }]
})
 var isFirstIn = true;
// router.beforeEach((to, from, next) => {
//   // ...
// //   console.log('router before');
// //   if(isFirstIn){
// //       console.log(from);
// //     //   next('home');
// //       isFirstIn = false;
// //   } else {

// //   }
// })
export default router;