<template>
    <header>
        <div id = "menu-box">
            <el-card class="box-card">
                <!-- 包裹div -->
                <div class = "warp">
                        <!-- 左边logo -->
                        <div class = "logo-img " >
                            <router-link to="./" >
                                <img v-lazy="logoImage" alt="">
                            </router-link>
                        </div>
                        <!-- 右边菜单 -->
                        <div class ="menu-right">
                            <el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal"  active-text-color="#4c9cde" @select="handleSelect">
                               <el-submenu   v-for="item in menu" :key="item.index" index="1" tabindex="0">
                                    <template slot="title" >{{item.head}}</template>
                                    <el-menu-item index="">{{item.index}}</el-menu-item>
                                    <!-- <el-menu-item index="index+1-index+1">选项2</el-menu-item>
                                    <el-menu-item index="index+1-index+1">选项3</el-menu-item> -->
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">第二阶段</template>
                                    <el-menu-item index="2-1">选项1</el-menu-item>
                                    <el-menu-item index="2-2">选项2</el-menu-item>
                                    <el-menu-item index="2-3">选项3</el-menu-item>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title">第三阶段</template>
                                    <el-menu-item index="3-1">选项1</el-menu-item>
                                    <el-menu-item index="3-2">选项2</el-menu-item>
                                    <el-menu-item index="3-3">选项3</el-menu-item>
                                </el-submenu>
                               
                            </el-menu>
                        </div>
                        <!-- <div class = "menu-right"  >
                             <el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal"  active-text-color="#4c9cde" @select="handleSelect">
                               <el-submenu index="index+1"  v-for="item in menu" :key="item.index" >
                                    <template slot="title" >{{item.head}}</template>
                                    <el-menu-item index="1-index+1" v-for="items in item.subSecond" :key="items.index" >{{items}}</el-menu-item>
                                </el-submenu>
                               
                            </el-menu>
                        </div> -->
                         <h1 class = "seo-haed ">{{seoHead}}</h1>
                         <div class = "clear" style="clear:both"></div>
                </div>
            </el-card>
        </div>
    </header>
</template>

<script>
// import Mock from require('mockjs')
export default {
    name:"Header",
    data(){
        return{
            logoImage:require('@/assets/image/logo.png'),
            seoHead:"前端博客",
            activeIndex: 'red',
            activeIndex2: '1',
            menu:""
        }
    },
    mounted(){
       var that = this;
        this.ajax.get('/api/data').then(response =>{
        //    console.log(response)
            this.menu =response.data.data.menu.menu;
             
            //  JSOn.stringify(this.menu.data.data.menu)
             console.log(this.menu)
        }).catch(ery =>{
          console.log(ery);  
        })
        // console.log(Mock);
    },
    methods:{
         handleSelect(key, keyPath) {
        console.log(key, keyPath);
        
      },
      add:function(key){
            console.log(key);
        }
    }
}
</script>

<style lang="less" scoped>
@width:100%;
    #menu-box{
        width: @width;
        height: auto;
        box-sizing: border-box;
        background: white;
        .warp {
            width: 65%;
            height: 100%;
            margin: 0 auto;
            // 左边logo
            .logo-img {
                float: left;
                width: 320px;
                padding: 15px 0px;
               
                a {
                    color: white;
                        img {
                            // padding: 10px 0;
                            width: 220px;
                            height: 50px;
                        }
                       
                }
            }
            // 右边菜单
            .menu-right{
                float: right;
                padding-top:10px ;
                .el-menu.el-menu--horizontal{
                    border-bottom: none;
                }
            }
            // h1 SEO
             h1 {
                    display: none;
                }
        }
    }
    
</style>
