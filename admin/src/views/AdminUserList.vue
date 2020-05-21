<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data='list'>
      <el-table-column prop='_id'
                       label='ID'
                       width='230'></el-table-column>
      <el-table-column prop='username'
                       label='管理员名称'></el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template v-slot="scope">
          <el-button type="text"
                     size="small"
                     @click="$router.push(`/admin_users/edit/${scope.row._id}`)">编辑</el-button>
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
      const res = await this.$http.get('rest/admin_users')
      this.list = res.data
    },
    deleteById (r) {
      this.$confirm(`此操作将永久删除管理员: "${r.name}", 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete('rest/admin_users/' + r._id)
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