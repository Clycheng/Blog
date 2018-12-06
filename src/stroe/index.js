import vue from 'vue'
import vuex from 'vuex'
import Mock from  './mock.js' 
vue.use(vuex);


export default new vuex.Store({
    modules:{
        mock:Mock
    }
    // state:{
    //     show:"3123131312"
    // }
})