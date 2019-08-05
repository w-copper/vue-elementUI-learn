<template>
    <dash-base>
        <div slot="main-content">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="box-card" >
                        <div slot="header" class="clearfix">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="box-body">
                            <div v-for="o in 50" :key="o" class="text item">
                                {{'列表内容 ' + o }}
                            </div>
                        </div>
                    </el-card>  
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-calendar v-model="date">
                    </el-calendar>
                </el-col>
            </el-row>
        </div>
    </dash-base>
</template>

<script>
/* eslint-disable */
import DashBase from "./DashBase"

export default {
  name: "DashBord",
  components:{
      DashBase,
  },
  data() {
    return {
        date:new Date()
    };
  },
  computed: {
  },
  methods: {
     
  }
};
</script>

<style scoped>

.el-breadcrumb{
    margin-bottom: 10px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.el-main{
    height: 500px;
    overflow: auto;
}
.box-card{

}
.box-card .box-body{
    overflow-y: scroll;
    height: 200px;
}
</style>
