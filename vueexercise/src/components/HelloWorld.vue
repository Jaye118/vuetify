<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>

      <p><router-link to="/Navigation">Buttons</router-link></p>
      <p><router-link to="/datePicker">时间选择器 Date/month picker：v-date-picker</router-link></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vuetify 列表'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
