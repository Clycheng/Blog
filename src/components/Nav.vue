<template>
    <nav>
        <div class = "warp">
            <div class= "left">
                <div  :class = "isActive?'active':'login-in'" slot="reference"  >
                        <img :src="SamllImgSrc"  class = "small-por" alt="">
                        <router-link to="#"  type="primary" >{{admin}}</router-link>
                </div>
                <div  :class = "isActive?'login-out':'active'" >
                    <span class = "welcome">欢迎光临</span>
                    <router-link to="#" ><el-button type="text" @click="dialogVisible = true" class = "login-bt-name">{{LogIn}}</el-button></router-link>
                </div>
                <div class= "user-info">
                    <span class = "pattern"></span>
                    <div class = "user-info-content"> 
                        <h4>{{admin}}</h4>
                        <div class = "big-por-warp">
                              <img :src="bigImage" class ="big-por" alt="">
                        </div>
                        <div>
                            <el-button type="info" plain>信息按钮</el-button>
                        </div>
                        <div>
                        <el-button type="info" plain>信息按钮</el-button>
                        </div>
                    </div>
                </div>
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
            SamllImgSrc:"http://0.gravatar.com/avatar/9682932d0231dfdf9ce5a8bdd0736f13?s=10&d=mm&r=g",
            bigImage:"http://0.gravatar.com/avatar/9682932d0231dfdf9ce5a8bdd0736f13?s=80&d=mm&r=g",
            dialogVisible: false,
            form: {
                name: '',
                password: ''
            }

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
         handleClose(done) {
        // this.$confirm('确认关闭？')
        //   .then(_ => {
            done();
        //   })
        //   .catch(_ => {});
         },
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
                                    height: @height;
                                    display: none;
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
                                    width:150px;
                                     
                                     .pattern{
                                            width: 20px;
                                            height: 7.5px;
                                            margin-top: -10px;
                                            margin-left: 5px;
                                            border-bottom: 10px solid rgba(152, 148, 148, 0.879);
                                            border-left: 10px solid transparent;
                                            border-right: 10px solid transparent;
                                        }
                                    .user-info-content{
                                        padding: 30px 10px;
                                        text-align: center;
                                        background-color: rgba(152, 148, 148, 1);
                                        border-radius: 5px;

                                        }
                                    .user-info-content:nth-child(div){
                                        // margin-top: 10px;
                                        // color: #2f889a
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
