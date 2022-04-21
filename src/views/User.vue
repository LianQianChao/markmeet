<script setup>
import { ref } from 'vue'
import { findAllUser } from '../api/user'

const tableData = ref([])
const total = ref(0)
const pageSize = ref(0)

findAllUser().then(
  res => {
    tableData.value = res.data.data.list
    total.value = res.data.data.total
    pageSize.value = res.data.data.pageSize
  },
  error => {
    console.log(error)
  }
)

const handleCurrentChange = number => {
  findAllUser({
    page: number,
    offset: pageSize.value,
  }).then(
    res => {
      tableData.value = res.data.data.list
    },
    error => console.log(error)
  )
}
</script>
<template>
  <div class="content">
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="username" label="用户名" width="180" />
        <el-table-column prop="nickname" label="昵称" />
        <el-table-column prop="email" label="邮箱" />
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 12px;
}
.pagination {
  margin-top: 30px;
}
</style>
