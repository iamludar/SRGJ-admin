<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="昵称" v-model="listQuery.nickname" clearable>
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="淘宝ID" v-model="listQuery.adzoneid" clearable> 
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="京东ID" v-model="listQuery.jdadzoneid" clearable>
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="推荐人" v-model="listQuery.parentid" clearable>
      </el-input>
      <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.level" placeholder="等级">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button type="primary" @click="shouquan" class="filter-item">授权</el-button>
    </div>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
      style="width: 100%" v-show="!isEmpty">
      <el-table-column align="center" label="头像" width="80">
        <template slot-scope="scope">
          <div><img :src="scope.row.head_img" class="avatar"/></div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="公众号" width="300">
        <template slot-scope="scope">
          <div><span>{{ scope.row.nick_name }}</span></div>
          <div><span>{{ scope.row.alias }}</span></div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="主体单位" min-width="100">
        <template slot-scope="scope">
          <span>{{scope.row.principal_name}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="认证状态" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.city1}}</span>
        </template>
      </el-table-column>
     <!--  <el-table-column align="center" label="粉丝数" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.nickname1}}11</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="互动粉丝数" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.adzoneid1}}111</span>
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="所属分组" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.jdadzoneid1}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="授权时间" width="150">
        <template slot-scope="scope">
          <span>{{scope.row.create_time}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="220" class-name="small-padding">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">发布
          </el-button>
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-show="!listLoading && !isEmpty" class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.pageStart"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.items_per_page" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="时间" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select class="filter-item" v-model="temp.status" placeholder="请选择">
            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性">
          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
        </el-form-item>
        <el-form-item label="点评">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="temp.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确 定</el-button>
        <el-button v-else type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getPreCode, getAuthUserinfo, authList } from '@/api/shouquan'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'

export default {
  name: 'complexTable',
  directives: {
    waves
  },
  data() {
    return {
      pre_auth_code: '',
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      isEmpty: true,
      listQuery: {
        pageStart: 1,
        items_per_page: 10
      },
      totalQuery: {},
      importanceOptions: ['vip', 'wangzhe', ''],
      sortOptions: [{ label: '按ID升序列', key: '+id' }, { label: '按ID降序', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showAuditor: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    if (this.$route.query.auth_code && document.URL !== document.referrer) {
      this.getAuth()
    }
    this.getList()
  },
  methods: {
    getAuth() {
      const query = {
        'auth_code': this.$route.query.auth_code
      }
      getAuthUserinfo(query).then(response => {
        console.log(response)
      })
    },
    getList() {
      this.listQuery.page = parseInt(this.listQuery.pageStart) - 1
      this.listLoading = true
      authList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.count
        if (this.list.length > 0) {
          this.isEmpty = false
        } else {
          this.isEmpty = true
        }
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.pageStart = 1
      this.listQuery.page = parseInt(this.listQuery.pageStart) - 1
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.items_per_page = val
      this.getTotal()
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getTotal()
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    shouquan() {
      getPreCode().then(response => {
        console.log(response)
        this.pre_auth_code = response.data.data.pre_auth_code
        const url = 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=wxa648f31a57e15a36&pre_auth_code=' + this.pre_auth_code + '&redirect_uri=http://srgjadmin.04wu.com/gongzhonghao/index&auth_type=1'
        window.open(url, '_self')
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          // updateMember(tempData).then(() => {
          //   for (const v of this.list) {
          //     if (v.id === this.temp.id) {
          //       const index = this.list.indexOf(v)
          //       this.list.splice(index, 1, this.temp)
          //       break
          //     }
          //   }
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: '成功',
          //     message: '更新成功',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
<style scoped>
.cell p{
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
}
.avatar{
  width:22px;
  height: 22px;
}
</style>
