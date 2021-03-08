<template>
  <el-dialog :title="!dataForm.id ? '新增' : '编辑'"
             :close-on-click-modal="false"
             :visible.sync="visible">
    <el-form :model="dataForm"
             :inline="true"
             label-width="80px"
             :rules="rules"
             ref="dataForm">
      <el-form-item label="商品编号"
                    prop="code">
        <el-input v-model="dataForm.code"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类"
                    prop="type">
        <el-select v-model="dataForm.type"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :value="item.value"
                     :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名"
                    prop="name">
        <el-input v-model="dataForm.name"
                  :min="0"
                  :max="100"></el-input>
      </el-form-item>
      <el-form-item label="供应商名"
                    prop="supplier">
        <el-input v-model="dataForm.supplier"></el-input>
      </el-form-item>
      <el-form-item label="规格"
                    prop="spec">
        <el-input v-model="dataForm.spec"></el-input>
      </el-form-item>
      <el-form-item label="采购数量"
                    prop="count">
        <el-input v-model="dataForm.count"></el-input>
      </el-form-item>
      <el-form-item label="价格"
                    prop="price">
        <el-input v-model="dataForm.price"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <el-button @click="visible=false">取 消</el-button>
      <el-button type="primary"
                 @click="dataFormSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add } from '@/api/purchase.js'
import tableItems from '@/assets/data/purchase.json'
export default {
  data () {
    return {
      visible: false,
      dataForm: {
        id: '',
        code: '',
        type: '',
        name: '',
        supplier: '',
        spec: '',
        count: '',
        price: ''
      },
      options: [{
        value: '佛香',
        label: '佛香'
      }, {
        value: '拜垫',
        label: '拜垫'
      }],
      rules: tableItems.rules
    }
  },
  methods: {
    init (id) {
      this.dataForm.id = id || 0
      this.visible = true
    },
    dataFormSubmit () {
      add(this.dataForm).then(res => {
        let data = res.data
        if (data.code === 0) {
          this.$emit('success')
          this.visible = false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
