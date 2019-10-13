<template>
    <div id="header">
        <div class="header">
        <h1 class="logo">OA管理系统</h1>
        <div class="tui" @click="open2">
            <div class="admin">
                理员
            </div>
            <div class="el-icon-caret-bottom mark">  
            </div>
        </div>
        </div>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import Nav from "@/components/nav/nav.vue"
export default {
    data() {
        return {
            
        }
    },
    methods: {
        open2() {
        this.$confirm('退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$http.post(process.env.BASE_API+'/admin/base/logout').then(res=>{
                if (res.body.code==200) {
                    this.$router.push({
                        path:'/'
                    })
                }
            })
        }).catch(() => {});
        }
    },
    components: { Nav },
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 60px;
        box-shadow: 0 1px 2px #dbdbdb;
        background: white;
    }
    .logo{
        width: 155px;
        height: 43px;
        margin-top: 10px;
        margin-left: 30px;
        float: left;
    }
    .tui{
        width: 60px;
        height: 35px;
        float: right;
        margin-top: 13px;
        cursor: pointer;
        margin-right:20px;
    }
    .admin{
        width: 35px;
        height: 100%;
        background: #2486E4;
        border-radius: 50%;
        color: white;
        text-align: center;
        line-height: 35px;
        font-size: 8px;
        float: left;
    }
    .mark{
        float: left;
        font-size: 15px;
        color: #aaa;
        margin-top: 10px;
        margin-left: 5px;
    }
    .tui:hover .mark{
        color: #2486E4;
    }
</style>