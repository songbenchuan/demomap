<template>
  <div>
      <form class="main" v-show="isShow">
        用户名: <input type="text" placeholder="请输入用户名" v-model="userName"><br/><br/>
        密码: <input type="text" placeholder="请输入密码" v-model="passWord"><br/><br/>
        <router-link to="/map">
          <input type="button" value="登录" @click="login">
        </router-link>
      </form>
      <div class="current" v-show="!isShow">
          当前用户：{{userName}}
      </div>
    <router-view v-show="!isShow"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
        return{
            userName: '',
            passWord: '',
            isShow: true
        }
    },

    methods: {
          login () {
            //判断用户输入的是否为空串
            if(!this.userName.trim() || !this.passWord.trim()){
              alert("请输入完整用户名和密码")
              this.userName = ''
              this.passWord = ''
              return
            }else{
                var {userName, passWord} = this
                axios.get('/test/main')
                  .then(response => {
                    if(response.data.code === 0){
                      const data = response.data.data
                      if(userName == data.userName && passWord == data.passWord){
                          alert('欢迎回来')
                          this.isShow = false
                      }else{
                          alert('请输入正确的用户名或密码')
                      }
                    }
                  })
            }
          }
    }
  }
</script>

<style>
  div{
    height:100%;
  }
  .main{
    margin-top: 50px;
    text-align: center;
  }
  .current{
    position:fixed;
    top:0;
    left:0;
    width: 150px;
    height: 50px;
    background-color: skyblue;
    border-radius: 10%;
    text-align: center;
    z-index:100;
  }
</style>
