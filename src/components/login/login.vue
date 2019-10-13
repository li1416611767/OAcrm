<template>
    <div id="login">
        <div class="login_left">
        </div>
        <div class="login_right">
            <h1>OA管理系统</h1>
            <div class="login_right_zi">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                    <el-form-item prop="pass">
                        <el-input type="text" class="text" v-model="ruleForm2.pass" auto-complete="off"
                            placeholder="用户名" height="100px"></el-input>
                    </el-form-item>
                    <el-form-item prop="text">
                        <el-input type="password" class="pass" v-model="ruleForm2.text" auto-complete="off"
                            placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width:100%" type="primary" @click="submitForm('ruleForm2')" class="button"
                            v-show="off==false">提交</el-button>
                        <el-button type="primary" style="width:100%;margin-left: 0px;" :loading="true" v-show="off">加载中
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <el-alert :title="title" type="error" class="alert" v-show="alert">
        </el-alert>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能小于5位'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    text: '',
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    text: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                },
                off: false,
                title: '',
                alert: false,
            }
        },
        methods: {
            submitForm(formName) {
                var that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.off = true;
                        this.$http.post(process.env.BASE_API + '/admin/base/login', { username: this.ruleForm2.pass, password: this.ruleForm2.text }, { emulateJSON: true }).then(res => {
                            console.log(res)
                            if (res.body.code == 200) {
                                localStorage.authKey=res.body.data.authKey;
                                localStorage.sessionId=res.body.data.sessionId;
                                this.$router.push({
                                    path: '/gong'
                                })
                            }
                            else {
                                this.alert = true;
                                this.title = res.body.error;
                                var that = this;
                                this.off = false;
                                setTimeout(function () {
                                    that.alert = false;
                                }, 1000)

                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>
<style scoped>
    #login {
        height: 100%;
    }

    .login_left {
        width: 68%;
        height: 100%;
        box-sizing: border-box;
        float: left;
        background: url(../../assets/image/login.bc884f1.png) no-repeat;
        background-size: 100% 100%;
    }

    .login_left img {
        width: 180px;
        height: 48px;
        margin-top: 50px;
        margin-left: 60px;
    }

    .login_right {
        width: 32%;
        height: 100%;
        box-sizing: border-box;
        float: left;
    }

    .login_right h1 {
        font-weight: normal;
        width: 100%;
        text-align: center;
        margin-top: 115px;
    }

    .login_right_zi {
        width: 60%;
        margin: 30px auto;
    }

    .alert {
        position: absolute;
        width: 250px;
        top: 0;
        left: 50%;
        margin-left: -125px;
    }
</style>