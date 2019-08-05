<template>
    <div id="container">
        <el-form :model="form" label-width="80px" :label-position="'left'">
            <el-form-item label="用户名">
                <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.passwd" aria-placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label-width="0">
                <el-col :span="11">
                    <el-button type="primary" style="width:100%;" @click="submit">确认</el-button>
                </el-col>
                <el-col :span="2">
                    <span style="width:100%">&nbsp;</span>
                </el-col>
                <el-col :span="11">
                    <el-button @click="cancel" style="width:100%;">取消</el-button>
                </el-col>
                
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import {type} from "../store/index"

export default {
    name:'Login',
    data(){
        return {
            form:{
                name:'',
                password:'',
            },

        }
    },
    mounted() {
        this.$store.commit(type.TITLE, 'login');
    },
    methods: {
        submit(){
            (async()=>{
                await this.$store.commit(type.LOGIN, 'fjsfnfksdlkn');
                // console.log(this.$store.state.token)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/')
                this.$router.push({path:redirect, });
            })()
        },
        cancel(){
            this.form.name = '';
            this.form.password = '';
        }
    },
}
</script>

<style scoped>
#container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
