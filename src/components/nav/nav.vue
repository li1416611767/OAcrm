<template>
    <div id="nav">
        <el-menu :default-active="defaultActive" background-color="#2D3037" style="height: 100%"
            text-color="rgb(190, 190, 192)" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" router>
            <el-menu-item index="customer">
                <i class="el-icon-menu"></i>
                <span slot="title">权限</span>
            </el-menu-item>
            <el-menu-item v-for="(item,index) in navxuan" :index="item.index">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <img src="../../assets/image/shou.png" alt="" @click="isCollapse=!isCollapse">
            </el-radio-group>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapse: false,
                navxuan: [{icon: 'guide',
                        index: 'guide',
                        label: '导入/导出'}],
            };
        },
        computed: {
            defaultActive: function () {
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        },
        mounted() {
            this.$http.post(process.env.BASE_API + "/admin/index/authList").then(res => {
                console.log(res)
                var data = res.body.data;
                if (data.crm.leads && data.crm.leads.save) {
                    this.navxuan.push({
                        icon: 'leads',
                        index: 'gong',
                        label: '工作台'
                    })
                }
                if (data.crm.customer && data.crm.customer.save) {
                    this.navxuan.push({
                        icon: 'customer',
                        index: 'Schedule',
                        label: '日程'
                    })
                }
                if (data.crm.contacts && data.crm.contacts.save) {
                    this.navxuan.push({
                        icon: 'tack',
                        index: 'tack',
                        label: '任务'
                    })
                }
                if (data.crm.business && data.crm.business.save) {
                    this.navxuan.push({
                        icon: 'business',
                        index: 'business',
                        label: '公告'
                    })
                }

                if (data.crm.contract && data.crm.contract.save) {
                    this.navxuan.push({
                        icon: 'business',
                        index: 'contract',
                        label: '日志'
                    })
                }
                if (data.crm.receivables && data.crm.receivables.save) {
                    this.navxuan.push({
                        icon: 'money',
                        index: 'money',
                        label: '审批'
                    })
                }
                if (data.crm.product && data.crm.product.save) {
                    this.navxuan.push({
                        icon: 'product',
                        index: 'product',
                        label: '通讯录'
                    })
                }
            })
        },
    }
</script>
<style scoped>
    #nav {
        height: 877px;
        float: left;
    }

    #nav img {
        position: absolute;
        bottom: 20px;
        right: 10px;
        cursor: pointer;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>