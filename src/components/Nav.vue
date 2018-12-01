<template>
    <nav>
        <div class = "warp">
            <div class= "left">
                <img :src="SamllImgSrc"  class = "small-por" alt="">
                <router-link to="#">{{admin}}</router-link>
                <div class= "user-info">
                    <span class = "pattern"></span>
                    <div>
                        <h4>{{admin}}</h4>
                        <img :src="bigImage" class ="big-por" alt="">
                    </div>
                </div>
            </div>
            <div class = "right">
                <router-link to ="#">{{menu}}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"Nav",
    data(){
        return{
            admin:"Clydecheng",
            menu:"设置菜单",
            SamllImgSrc:"http://0.gravatar.com/avatar/9682932d0231dfdf9ce5a8bdd0736f13?s=10&d=mm&r=g",
            bigImage:"http://0.gravatar.com/avatar/9682932d0231dfdf9ce5a8bdd0736f13?s=80&d=mm&r=g"

        }
    },
    mounted(){
        console.log(localStorage)
        let obj ={
            admin:"Clydecheng",
            password:"xdd19960402"
        }
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(obj));
        console.log(JSON.parse(localStorage.getItem("user")));

    }
    
}
</script>

<style lang="less" scoped>
@width:100%;
@height:30px;
    nav {
        width: @width;
        height: @height;
        line-height: @height;
        background-color: #dad6d6
    }
    nav .warp {
        width: 80%;
        height: @height;
        margin: 0 auto;
    }
    @media screen and(max-width: 1024px) {
         nav{
             display: none;
         }
    }
     nav .warp .left{
         float: left;
         width: 324px;
         height: @height;
     }
     nav .warp .left img.small-por {
            width: 16px;
            height: auto;
     }
     nav .warp .left a {
        //  margin-left: 20px;
         color: #333333;
         font-size: 12px;
     }
     nav .warp .right{
         float:right;
           color: #2f889a;
     }
      nav .warp .right a {
           color: #2f889a;
            font-size: 14px;
      }
    //   浮动头像框
      .user-info {
        //   width: 
      }
      .user-info  .pattern{
          width: 20px;
          height: 5px;
          margin-top: -10px;
          margin-left: 5px;
          border-bottom: 10px solid #333333;
          border-left: 10px solid transparent;
           border-right: 10px solid transparent;
      }
</style>
