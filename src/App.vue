<template>
  <div>
    <form>
      <input type="text" placeholder="请输入用户名">
      <input type="text" placeholder="请输入密码">
      <router-link to="/map">
        <button>登录</button>
      </router-link>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  div{
    height:100%;
  }
</style>
