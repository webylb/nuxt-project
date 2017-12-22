<template>
  <div>
    <p>{{params}}</p>
    <p>{{data.name}}</p>
    <p>{{data.count}}</p>
    <nuxt-link to="/">返回首页</nuxt-link>
    <Row>
      <Col span="12">
          <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      </Col>
      <Col span="12">
          <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
      </Col>
    </Row>

  </div>
</template>

<script>
import axios from "axios";
export default {
  validate({ params }) {
    return params.id;
  },
  transition(to, from) {
    if (!from) return "slide-left";
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },
  async asyncData({ params, error }) {
    try {
      // const {data} = await axios.get(`http://localhost:3000/pagelist/${+params.id}`);
      const data = {};
      console.log(data);
      return {
        data,
        params: params.id
      };
    } catch (e) {
      error({ message: "没有找到", statusCode: 404 });
    }
  }
};
</script>

<style scoped>

</style>