<template>
  <div class="wrapper">
      <div class="content">
          <div class="artical-item">
            <div class="title">
              <h4>{{articalContent.title}}</h4>    
              <p>{{articalContent.time}}</p>          
            </div>
            <div class="container">
              {{articalContent.content}}
            </div>
            <div class="good">
              <button @click="handleGood" :class="[isClick == true ? 'good-btn-active' : 'good-btn']" type="success" plain>
                <i class="iconfont">&#xe60c; {{articalContent.good}}</i>
              </button>
            </div>
          </div>
      </div>
      <left-menu/>
  </div>
</template>

<script>
import leftMenu from '../components/leftMenu'
import axios from 'axios'
export default {
name:"artical",
  data(){
    return {
      articalContent:{},
      isClick:false
    }
  },
  components: {
    leftMenu
  },
  methods:{
    getArticalId (){
      let url = window.location.hash
      let reg = new RegExp('id\=([^&]*)')
      let res = url.match(reg)
      return res[1];
    },
    debounce (fn, wait = 3000){
      let timer, res;
      return (...args) => {
        timer && clearTimeout(timer);
        setTimeout(() => res = fn.apply(this, args), wait)
        return res;
      }
    },
    handleGood (){
      if(this.isClick){
        this.isClick = false;
        this.articalContent.good -= 1
      }else{
        this.isClick = true;
        this.articalContent.good += 1
      }

      //TODO
      //延迟5秒提交
      //this.debounce()
    }
  },
  mounted(){
    let id = this.getArticalId()
    axios.get('/api/getArticleContent', {
      id
    }).then(res => {
      if(res.status === 200){
        console.log(res)
        this.articalContent = res.data.artical;
      }else{
        this.$notify.error({
          title: 'error!',
          message: res.msg
        });
      }
    }).catch(err => {
        this.$notify.error({
          title: 'error!',
          message: 'Internet error'
        });
    })
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
    min-width: 1366px;
    height: 100%;
    margin-left: 300px;
    .content{
      width: 100%;
      height: 100%;
      text-align: left;
      overflow: auto;
      float: left;
      padding: 50px 200px;
      .artical-item{
        width: 100%;
        min-height: 100%;
        border-radius: 1%;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.2);
        .title{
          height: 20%;
          margin: 0 20px;
          padding: 20px;
          border-bottom: 1px solid rgba(0,0,0,.2);
          h4{
            font-size: 24px;
            font-weight: bold;
          }
          p{
            margin-top: 10px;
            font-size: 16px;
            opacity: .7;
          }
        }
        .container{
          margin: 20px 20px 20px;
          padding: 20px;
          overflow: auto;
          font-size: 16px;
        }
        .good{
          text-align: center;
          padding: 20px;
          .good-btn{
            width: 100px;
            height: 40px;
            line-height: 30px;
            border: 1px solid #dcdfe6;
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;
            outline: 0;
            border-radius: 6px;
            cursor: pointer;
          }
          .good-btn-active{
            width: 100px;
            height: 40px;
            line-height: 30px;
            border: 1px solid #dcdfe6;
            background: #5daf34;
            border-color: #5daf34;
            color: #FFF;
            outline: 0;
            border-radius: 6px;
            cursor: pointer;
          }
        }
      }
    }
}

@media screen and (max-width: 768px){
  .wrapper{
    margin-left: 0;
    min-width: 100%;
    .content{
      margin-top: 200px;
      overflow:unset;
      padding: 0;
      .container{
        font-size: 16px;
      }
    }
  }
}
</style>