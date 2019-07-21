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
                    prop="goodsNo">
        <el-input v-model="dataForm.goodsNo"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品分类"
                    prop="goodsType">
        <el-select v-model="dataForm.goodsType"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :value="item.value"
                     :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名"
                    prop="goodsName">
        <el-input v-model="dataForm.goodsName"
                  :min="0"
                  :max="100"></el-input>
      </el-form-item>
      <el-form-item label="供应商名"
                    prop="goodsMill">
        <el-input v-model="dataForm.goodsMill"></el-input>
      </el-form-item>
      <el-form-item label="规格"
                    prop="goodsSpec">
        <el-input v-model="dataForm.goodsSpec"></el-input>
      </el-form-item>
      <el-form-item label="采购数量"
                    prop="goodsNum">
        <el-input v-model="dataForm.goodsNum"></el-input>
      </el-form-item>
      <el-form-item label="价格"
                    prop="goodsPrice">
        <el-input v-model="dataForm.goodsPrice"></el-input>
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
import tableItems from '@/assets/data/purchase.json'
export default {
  data () {
    return {
      visible: false,
      dataForm: {
        id: '',
        goodsNo: '',
        goodsType: '',
        goodsName: '',
        goodsMill: '',
        goodsSpec: '',
        goodsNum: '',
        goodsPrice: ''
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

    }
  }
}
</script>

<style scoped>
</style>
