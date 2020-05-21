<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data='list'>
      <el-table-column prop='_id'
                       label='ID'
                       width='230'></el-table-column>
      <el-table-column prop='name'
                       label='英雄名称'></el-table-column>
      <el-table-column prop='title'
                       label='英雄称号'></el-table-column>
      <el-table-column prop='avatar'
                       label='英雄头像'>
        <template v-slot='scope'>
          <img :src="scope.row.avatar"
               style="height:3rem">
        </template></el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template v-slot="scope">
          <el-button type="text"
                     size="small"
                     @click="$router.push(`/heroes/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text"
                     size="small"
                     @click="deleteById(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('rest/heroes')
      this.list = res.data
    },
    deleteById (r) {
      this.$confirm(`此操作将永久删除物品: "${r.name}", 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete('rest/heroes/' + r._id)
        if (res.status === 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        }
        this.fetch()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style>
</style>