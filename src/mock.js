// //参照mockjs的文档，进行操作
// // 配置 Mock 路径
// require.config({
//     paths: {
//         mock: 'http://mockjs.com/dist/mock'
//     }
// })
// // 加载 Mock
// require(['mock'], function(Mock){
//     // 使用 Mock
//     var data = Mock.mock({
//         'list|1-10': [{
//             'id|+1': 1
//         }]
//     })
//     // 输出结果
//     document.body.innerHTML +=
//         '<pre>' +
//         JSON.stringify(data, null, 4) +
//         '</pre>'
// })


const Mock = require('mockjs')
var  menu = {
            "status":0,
            "menu":{
                "first":{
                    "head":"第一阶段",
                    "subSecond":[
                        "HTML+CSS","Javascript","JS基本特效","JS高级特征"
                    ],
                    "subThird":[]
                },
                "second":{
                    "head":"第二阶段",
                    "subSecond":[
                        "HTML5","CSS3","UI框架+轮子","移动端WEB开发"
                    ],
                    "subThird":[]
                },
                "third":{
                    "head":"第三阶段",
                    "subSecond":[
                        "Web服务器基础","PHP基础","AJAX上篇","AJAX上篇"
                    ],
                    "subThird":[]
                }
            }
        } 


        // menu = JSON.stringify(menu)
        // console.log(menu)
// var image =
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    return {
        data:{
            menu: menu//menu
        }//data
    }//return
})