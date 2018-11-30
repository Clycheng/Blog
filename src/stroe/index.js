import vue from 'vue'
import vuex from 'vuex'
import showState from  './show_state.js' 
vue.use(vuex);


export default new vuex.Store({
    modules:{
        showState:showState
    }
    // state:{
    //     show:"3123131312"
    // }
})