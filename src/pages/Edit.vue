<template>
  <div class="wrapper">
    <mavon-editor :ishljs = "true" v-model="value"/>
    <div class="helper">
      <ul>
        <li class="helper-item" @click="clearAll">清空</li>
        <li class="helper-item" @click="save">暂存</li>
        <li class="helper-item" @click="send">发表</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name:"",
  data(){
    return {
      value:''
    }
  },
  computed:{},
  methods:{
    clearAll (){
      this.value = ''
    },
    save (){
      this.$notify.info({
                    title: 'tip',
                    message: '开发ing'
                });
    },
    send (){
      //TODO
      console.log(this.value)
    }
  },
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
@keyframes showHelper{
  from {transform: translateX(70px);}
  to {transform: translateX(0px)}
}

.wrapper{
  height: 100%;
  .markdown-body{
    height: 100%;
  }
  .helper{
    position: fixed;
    top: 70%;
    right: 0;
    width: 80px;
    height: 200px;
    background: transparent;
    // border: 1px solid #b3d8ff;
    z-index: 1511;
    transform: translateX(70px);
    &:hover{
      animation:showHelper 1s;
      animation-fill-mode: forwards ;
    }
    ul{
      height: 100%;
      padding: 50px 0;
      li{
        height: 30%;
        line-height: 33.3px;
        border-top: 1px solid #9acbff;
        cursor: pointer;
        background: #b3d8ff;
        margin-top: 5px;
      }
    }
  }
}
</style>