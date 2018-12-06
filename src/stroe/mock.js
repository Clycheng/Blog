import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);

var Mock = require('mockjs')
var menu = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
menu=JSON.stringify(menu, null, 4)
export default new vuex.Store({
    state:{
        menu:menu
    },
    mutations:{
        mock:function(){

        }
    }
})