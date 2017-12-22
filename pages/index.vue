<template>
  <div>
    <h1>主页</h1>
    <nuxt-link to="/about">跳转到关于页面</nuxt-link>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
      </li>
    </ul>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    // const { data } = await axios.get('http://localhost:3000/pagelist');
    // console.log(data);
    const data = [
      {
        id: 0,
        name: "张三",
        count: 1
      },
      {
        id: 1,
        name: "李四",
        count: 0
      },
      {
        id: 2,
        name: "王五",
        count: 1232
      }
    ];
    return { users: data };
  },
  mounted() {}
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>