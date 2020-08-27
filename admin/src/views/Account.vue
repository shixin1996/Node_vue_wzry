<template>
  <div>
    <el-input v-model="model.username"></el-input>
    <el-input v-model="model.password"></el-input>
    <el-button @click="post">kljk</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    post () {
      this.$http.post('rest/register', this.model).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>