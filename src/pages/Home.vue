<template>
  <div class="wrapper">
      <div class="content">
          <el-timeline class="artical-list">
            <el-timeline-item size="large"  v-for="item in articalList" :key="item.id" class="artical-item" :timestamp="item.time" placement="top">
              <el-card>
                <router-link :to="'/artical/id=' + item.id">
                  <h4>{{item.title}}</h4>
                </router-link>
                <div class="artical-desc">{{item.desc}}</div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
      </div>
      <left-menu/>
  </div>
</template>

<script>
import leftMenu from '../components/leftMenu'
import axios from 'axios'
import '../assets/js/mock'
export default {
name:"home",
  data(){
    return {
      articalList : [],
    }
  },
  components: {
    leftMenu
  },
  methods:{},
  mounted(){
    axios.get('/api/getArticleList').then(res => {
      if(res.status === 200){
        this.articalList = res.data.list
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
  height: 100%;
  margin-left: 300px;
  .content{
    width: 100%;
    height: 100%;
    text-align: left;
    overflow: auto;
    float: left;
    padding: 50px;
    h4{
      font-size: 20px;
      font-weight: bold;
      color: #545454;
      cursor: pointer;
    }
    .artical-desc{
      width: 100%;
      height: 80px;
      margin-top: 15px;
      overflow: hidden;
      display: -webkit-box;
      /* 溢出部分用省略号代替 *//* autoprefixer: off */
      text-overflow: ellipsis;
      /* 设置文本显示两行 */
      -webkit-line-clamp: 4;
      /* 从上到下排列子元素; */
      -webkit-box-orient: vertical;
    }
  }
}

@media screen and (max-width: 768px){
  .wrapper{
    margin-left: 0px;
    .content{
      margin-top: 200px;
      overflow:unset;
    }
  }
}
</style>