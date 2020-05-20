<template>
  <div class="wrapper">
      <div class="login">
          <el-input class="user-inp" placeholder="username" v-model="username">
            <template slot="prepend"><i class="iconfont">&#xe66c;</i>账号</template>
        </el-input>
        <el-input class="user-inp" placeholder="password" v-model="password">
            <template slot="prepend"><i class="iconfont">&#xe601;</i>密码</template>
        </el-input>
         <el-button @click="login" class="login-btn" type="primary">登陆</el-button>
      </div>
  </div>
</template>

<script>
export default {
name:"login",
  data(){
    return {
        username: '',
        password: ''
    }
  },
  computed:{},
  methods:{
      checkInfo (u, p){
        let res = {};
        if(!u) return res = {code: 1, msg: '请输入正确账号'}; 
        if(!p) return res = {code: 1, msg: '请输入正确密码'};
        //TODO补充检测
        return res = {
            code: 2
        }
      },
      login (){
        let res = this.checkInfo(this.username, this.password);
        if(res.code == 2){
            axios.post('/api/login', {
                username: this.username,
                password: this.password
            }).then( res => {
                //TODO补充检测
                // 跳转到编辑页面
                this.router.push('/edit')
            }).catch(e => {
                this.$notify.error({
                    title: 'error!',
                    message: e.msg
                });
            })
        }
      }
  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
    .login{
        width: 400px;
        height: 300px;
        padding: 30px;
        margin: 0 auto;
        background: #ecf5ff;
        margin-top: 40px;
        border: 1px solid #dcdfe6;
        border-radius: 6px;
        border-color: #b3d8ff;
        .user-inp{
            margin-top: 20px;
        }
        .login-btn{
            margin-top: 20px;
        }
    }
</style>