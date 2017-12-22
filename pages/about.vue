<template>
  <div>
    <h1>关于页面{{name}}</h1>
    <nuxt-link to="/">到主页</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'default',
  asyncData() {
    console.log(process);
    console.log(process.req);
    return {
      name: process.static ? "static" : process.server ? "server" : "client"
    };
  },
  // 使用动画
  // transition: 'bounce'
  transition(to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
};
</script>

<style scoped>

</style>