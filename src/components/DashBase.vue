<template>
  <div id="container">
    <el-container style="height:100%">
      <el-header>Header</el-header>
      <el-container >
        <el-aside :style="{width:aslideWidth}">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleMenuClick"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :style="{width:aslideWidth}"
            >
            <el-menu-item index="0" @click="exCollapse">
                <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
                <span slot="title">{{ CollapseMessage }}</span>
            </el-menu-item>
            <el-menu-item index="1" >
              <i class="el-icon-s-platform"></i>
              <span slot="title">活动面板</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-data"></i>
                    <span slot="title">数据管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">地理数据</el-menu-item>
                    <el-menu-item index="3-2">倾斜摄影</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4" >
              <i class="el-icon-document"></i>
              <span slot="title">日志</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
                <el-breadcrumb separator-class="none">
                    <el-breadcrumb-item 
                        :key="tag.path"
                        :to="{ path: tag.path }" 
                        v-for="tag in HistoryTags" 
                        >
                        <el-tag :key="tag.path" closable type="success" @close="handleTagClose(tag)">{{tag.name}}</el-tag>
                    </el-breadcrumb-item>
                </el-breadcrumb>
                
                <slot name="main-content"></slot>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { type } from '../store';
/* eslint-disable */
export default {
  name: "DashBase",
  data() {
    return {
        aslideWidth:200,
        date:new Date(),
        pathControl:{
          '1':'/',
          '2':'/user',
          '3-1':'/geodata',
          '3-2':'/builddata',
          '4':'logs',
          '5':'/settings'
        },

    };
  },
  computed: {
      isCollapse(){
        return this.$store.state.menustate
      },
      CollapseMessage(){
          return this.isCollapse ? '展开' : '收起'
      },

      HistoryTags(){
        return this.$store.state.logs
      }
  },
  methods: {
      handleOpen(key, keyPath){

          // console.log(key)
          // console.log(keyPath)
          
      },
      handleClose(key, keyPath){

      },
      exCollapse(){
          this.$store.commit(type.MENUSTATE, !this.isCollapse);
      },
      handleTagClose(tag){
        // console.log(tag);
        this.$store.commit(type.DELETELOGS, tag.path);
      },
      handleMenuClick(index, indexPath){
          if(indexPath[0]=='0')
          {
            return;
          }
          this.$router.push({path:this.pathControl[indexPath[indexPath.length-1]]});
      }
  }
};
</script>

<style scoped>
#container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: left;
    line-height: 200px;
}
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
</style>
