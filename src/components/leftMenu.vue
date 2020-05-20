<template>
  <div  class="leftMenu">
      <div  class="showMenu">
        <div class="top-menu">
            <router-link :to="'/'">
                <span class="home" >HOME</span>
            </router-link>
        </div>
        <div class="userInfo">
            <div class="userImg">
                <img src="@/assets/img/user.jpg" alt="witing for...">
            </div>
            <p class="name">GaryLIN</p>
            <p class="href-btn">
                <el-tooltip class="item" effect="light" content="github" placement="top">
                    <a href="https://github.com/GrayLinTouchWorld" target="_blank" >
                        <i class="iconfont github-btn" >&#xe689;</i>
                    </a>
                </el-tooltip>
                <el-tooltip class="item" effect="light" content="defineproperty@163.com" placement="top">
                    <i class="iconfont email-btn" >&#xe66a;</i>
                </el-tooltip>
            </p>
        </div>
        <div class="articalInfo" >
            <p class="Type">{{type}}<i class="iconfont type-btn" >&#xe611;</i></p> 
            <ul id="TypeSelect">
                <div @click="handleType">
                    <li :class="[type == 'All' ? 'actived' : '']" value="All">All</li>
                    <li :class="[type == 'JS' ? 'actived' : '']" value="JS">JS</li>
                    <li :class="[type == 'CSS' ? 'actived' : '']" value="CSS">CSS</li>
                    <li :class="[type == 'Other' ? 'actived' : '']" value="Other">Other</li>
                </div>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { platform } from '@/assets/js/utils.js'
export default {
name:"leftMenu",
  data(){
    return {
        type : 'All'
    }
  },
  computed:{},
  methods:{
      handleType (e){
          if(e.target.tagName == 'LI'){
              this.type = e.target.innerHTML;
          }
      }  
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>

.leftMenu{
    background: #22253E;
    color:white;
    text-align: center;
    width: 300px;
    height: 100%;
    float: left;
    margin-left: -100%;
    position: relative;
    left: -300px;
    .showMenu{
        .top-menu{
            height: 50px;
            line-height: 50px;
            margin: 0 10px;
            border-bottom: 1px solid #fff;
            .home{
                float: left;
                display: inline-block;
                width: 80px;   
                height: 40px;
                line-height: 40px;  
                margin: 5px;
                border-radius: 40px;
                cursor: pointer;
                &:hover{
                    color: white;
                    background: blue;
                }
            }
            .disappear-btn{
                float: right;
            }
        }
        .userInfo{
            margin-top: 100px;
            width: 100%;
            .userImg{
                width: 150px;
                height: 150px;
                margin: 0 auto;
                img{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }
            .name{
                margin-top: 10px;
                font-size: 18px;
            }
            .href-btn{
                margin-top: 60px;
                .github-btn{
                    font-size: 24px;
                }
                .email-btn{
                    font-size: 24px;
                    margin-left:10px;
                }
            }
        }
        .articalInfo{
            position: relative;
            width: 150px;
            margin: 0 auto;
            margin-top: 30px;
            height: 200px;
            overflow: hidden;
            .Type{
                position: absolute;
                top: 0;
                width: 100%;
                height: 25px;
                line-height: 25px;
                background: white;
                color: black;
                z-index: 20;
                cursor: pointer;
                .type-btn{
                    position: absolute;
                    right: 10px;
                }
                &:hover{
                    .type-btn{
                        display: inline-block;
                        transform: rotate(-180deg);
                        transition: .5s;
                    }
                }
                &:hover + #TypeSelect{
                    opacity: 1;
                    transform: translateY(0);
                    transition: 1s;
                }
            }
            #TypeSelect{
                position: absolute;
                top: 25px;
                outline: none;
                width: 150px;
                height: 120px;
                overflow: hidden;
                opacity: 0;
                transform: translateY(-100%);
                transition: 1s;
                li{
                    border: none;
                    border-bottom:1px solid rgba($color: yellow, $alpha: .5);
                    line-height: 30px;
                    cursor: pointer;
                    &:hover{
                        background: rgba($color: yellow, $alpha: .5);
                    }
                    
                }
                .actived{
                    color:rgba($color: rgb(255, 196, 0), $alpha: 1);
                }
                &:hover{
                    opacity: 1;
                    transform: translateY(0);
                    transition: 1s;
                }
            }
        }
    }
}

@media screen and (max-width: 768px){
    .leftMenu{
        width: 100%;
        height: 200px;
        left: 0;
        .showMenu{
            .top-menu{
                display:none;
            }
            .userInfo{
                margin-top: 20px;
                .userImg{
                    width: 50px;
                    height: 50px;
                }
                .href-btn{
                    margin-top: 10px;
                }
            }
            .articalInfo{
                margin-top:15px;
                #TypeSelect{
                    background: rgba($color: black, $alpha: .5);
                }
            }
        }
    }
}

</style>