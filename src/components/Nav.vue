<template>
    <nav>
        <div class = "warp">
             
            <div class= "left" >
                <div  :class = "isActive?'active':'login-in'"  class = "login-in" slot="reference"  >
                        <img v-lazy="SamllImgSrc"  class = "small-por" alt="">
                        <router-link to="#"  type="primary" >{{admin}}</router-link>
                        <div class="user-info" >
                        <div class="arrow-up"></div>
                            <div class="user-info-min">
                                <h3>Clydecheng</h3>
                                <div class="usericon">
                                    <img alt=""  v-lazy="bigImage"  class="avatar avatar-80 photo" height="80" width="80">			
                                </div>
                                <div class="userinfo">
                                    <p>
                                        <el-button type="info" plain><router-link to="">Site Admin</router-link></el-button>
                                        <el-button type="info" plain v-on:click="clear"><router-link to="">Log out</router-link></el-button>
                                    </p>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                </div>
                <div  :class = "isActive?'login-out':'active'" >
                    <span class = "welcome">欢迎光临</span>
                    <router-link to="#" ><el-button type="text" @click="dialogVisible = true" class = "login-bt-name">{{LogIn}}</el-button></router-link>
                </div>
                <!-- 浮动信息框 -->
                    
            </div>
          
            <div class = "right">
                <span>{{menu}}</span>
            </div>
        </div>

        <!-- login 弹出框 -->
        <el-dialog title="登录" :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
            <!-- 表单内容 -->
            <el-form ref="form" :model="form" >
                <el-form-item label="用户名">
                    <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-button type="primary" @click="onSubmit(form.name,form.password),handleClose" class="login-bt">立即登录</el-button>
         
            </el-form>
         </el-dialog>
    </nav>
</template>

<script>
export default {
    name:"Nav",
    data(){
        return{
            isActive:false,
            LogIn:"Log In",
            admin:"Clydecheng",
            menu:"设置菜单",
            SamllImgSrc:"../assets/logo.png",
            bigImage:"@/assets/image/big-por.jpeg",
            dialogVisible: false,
            form: {
                name: '',
                password: ''
            },
            show3:true

        }
    },
    mounted(){
        // localStorage.clear();
        var obj = JSON.parse(sessionStorage.getItem("user"))
        if(!obj){
            console.log("erroy")
        }else{
            console.log(obj)
            this.isActive=true;
            this.admin = obj.name
            
        }
        // console.log(localStorage)
        // let obj ={
        //     admin:"Clydecheng",
        //     password:"xdd19960402"
        // }
        // localStorage.clear();
        // localStorage.setItem("user",JSON.stringify(obj));
        // console.log(JSON.parse(localStorage.getItem("user")));

    },
    methods:{
        // element登录框关闭
         handleClose(done) {
        // this.$confirm('确认关闭？')
        //   .then(_ => {
            done();
        //   })
        //   .catch(_ => {});
         },
        //  登录
          onSubmit(name,password) {
             console.log(this.form.name,this.form.password);
            if( name ==="admin"&&password==="admin"){
                this.$message({
                    message: '登录成功',
                    type: 'success'
                    });
                     sessionStorage.setItem("user",JSON.stringify(this.form));
                    window.location.reload()
                
            }else{
                this.$message({
                    message: '用户名或密码错误',
                    type: 'warning'
                    });
            }
         },
        // 退出登录
        clear:function(){
            sessionStorage.clear();
            location.reload();
        }
    
    }
    
}
</script>

<style lang="less" scoped>
@width:100%;
@height:30px;
// 饿了么ui  css修改
        
        nav {
            width: @width;
            height: @height;
            line-height: @height;
            background-color: #dad6d6;
                .warp{
                     width: 65%;
                    height: @height;
                    margin: 0 auto;
                        .left{
                            float: left;
                            width: 324px;
                            height: @height;
                            
                                .login-in {
                                    position: relative;
                                    height: @height;
                                    display: none;

                                }
                                .login-in:hover .user-info{
                                    display: block;
                                }
                                .login-out{
                                    background: red;
                                    height: @height;
                                    line-height: @height;
                                    display: none;
                                       
                                }
                                .active{
                                    line-height: @height;
                                    height: @height;
                                    display: block;
                                    box-sizing: border-box;
                                    // border: 1px solid red;
                                    img.small-por{
                                        padding-right: 10px;
                                    }
                                }
                                img.small-por {
                                    float: left;
                                    margin-top: 7px;
                                    width: 16px;
                                    height: auto;
                                }
                                a {
                                    //  margin-left: 20px;
                                    color: #333333;
                                    font-size: 12px;
                                     .login-bt-name{
                                            padding: 0;
                                        }
                                }
                                // 浮动头像框
                                .user-info{
                                        display: none;
                                         transition: 1s;
                                        position: absolute;
                                        top: 20px;
                                        padding-top: 10px;
                                        display: none;
                                        z-index: 10;
                                    .arrow-up {
                                        width: 0;
                                        height: 0;
                                        display: block;
                                        margin-left: 10px;
                                        border-left: 10px solid transparent;
                                        border-right: 10px solid transparent;
                                        border-bottom: 10px solid #7f7f7f;
                                    }
                                    .user-info-min {
                                        background: #7f7f7f;
                                        padding: 10px 20px 20px 20px;
                                        display: block;
                                        border-radius: 5px;
                                        background: rgba(0, 0, 0, 0.5);
                                             h3 {
                                                color: #fff;
                                                text-align: center;
                                                font-style: bold;
                                            }
                                            .usericon {
                                                margin: 0 auto 10px;
                                                display: block;
                                                    img {
                                                        width: 96px;
                                                        height: auto;
                                                        display: block;
                                                        margin: 0 auto;
                                                        border-radius: 96px;
                                                     }
                                            }
                                            
                                    }
                                    
                                }
                        }
                        .right{
                            float:right;
                            color: #2f889a;
                        }
                }
        }
        // 登录框按钮
        .login-bt{
            width:100%;
        }


         @media screen and(max-width: 1024px) {
         nav{
             display: none;
         }
    }






    // nav {
    //     width: @width;
    //     height: @height;
    //     line-height: @height;
    //     background-color: #dad6d6
    // }
    // nav .warp {
    //     width: 80%;
    //     height: @height;
    //     margin: 0 auto;
    // }
    // @media screen and(max-width: 1024px) {
    //      nav{
    //          display: none;
    //      }
    // }
    //  nav .warp .left{
    //      float: left;
    //      width: 324px;
    //      height: @height;
    //  }
    //  nav .warp .left .login-in {
    //       height: @height;
    //      display: none;
    //  }
    //  nav .warp .left .login-out{
    //      background: red;
    //       height: @height;
    //      line-height: @height;
    //      display: none;
    //  }
    //   nav .warp .left .active{
    //       height: @height;
    //      display: block;
    //  }
    //  //修改element-ui默认样式
    //  .el-button{
    //      padding: 0
    //  }
    //  nav .warp .left img.small-por {
    //         width: 16px;
    //         height: auto;
    //  }
    //  nav .warp .left a {
    //     //  margin-left: 20px;
    //      color: #333333;
    //      font-size: 12px;
    //  }
    //  nav .warp .right{
    //      float:right;
    //        color: #2f889a;
    //  }
    //   nav .warp .right a {
    //        color: #2f889a;
    //         font-size: 14px;
    //   }
    // //   浮动头像框
    // //   .user-info {
    // //     //   width: 
    // //   }
    //   .user-info  .pattern{
    //       width: 20px;
    //       height: 5px;
    //       margin-top: -10px;
    //       margin-left: 5px;
    //       border-bottom: 10px solid #333333;
    //       border-left: 10px solid transparent;
    //        border-right: 10px solid transparent;
    //   }
</style>
