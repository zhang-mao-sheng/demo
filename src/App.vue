<template>
  <div id="app">
<!--    <router-view></router-view>-->
      <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

 
<script>
// 自己引入的组件  由路由管理的组件成为路由组件,通常放在pages文件夹下面
// 和普通的组件分开 而且不需要引入和注册
// import BannerComponents from "./components/BannerComponents";
// import AboutComponents from "./components/AboutComponents";
export default {
  name: "App",
  // 注册组件
  // components: { BannerComponents, AboutComponents},
};
</script>
 
<style>
</style>