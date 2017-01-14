const App = resolve => {
    require.ensure(['./App.vue'], () => {
        resolve(require('./App.vue'));
    });
};
const MyResult =  resolve => {
    require.ensure(['./MyResult.vue'], () => {
            resolve(require('./MyResult.vue'));
        });
}
const routers = [
    {
    path: '/app',
    name: 'app',
    component(resolve) {
        require.ensure(['./App.vue'], () => {
            resolve(require('./App.vue'));
        });
    }
},
{
    path: '/my',
    name: 'my',
    component(resolve) {
        require.ensure(['./MyResult.vue'], () => {
            resolve(require('./MyResult.vue'));
        });
    }
},{
    path:'/',
    name:'app',
     component(resolve) {
        require.ensure(['./App.vue'], () => {
            resolve(require('./App.vue'));
        });
    }
}];
export default routers;