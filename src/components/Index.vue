<template>
    <div>
        <!-- nav 登录显示 -->
        <Nav></Nav>
        <!-- {{$store.state.showState.show}} -->
        <!-- header 
                左边logo
                右边菜单
                    第一阶段（传值跳转至category组件）
                    第二阶段（传值跳转至category组件）
                    第三阶段 （传值跳转至category组件）-->
        <!-- section
                左边content
                右边side
                    热门
                    热门标签 
                底部banner-->
        <!-- footer -->

                
    </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
    data(){
        return{
            
        }
    },
    name:"Index",
    components:{
        Nav:Nav
    },
    mounted(){
        // window.onload=function(){
        // console.log(this.$store.state.showState.show)
        // }
        
    }


}
</script>

<style>

</style>
