<template>
<<<<<<< HEAD
    <div id="app">
		   <router-view></router-view>
    </div>
</template>

<script>
    export default {
    	name:'App'
    }
</script>

<style lang="less">
    @import './style/variables';
	@import './style/element-ui';
	@import './style/common';
	@import './style/scrollBar';
=======
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
    provide(){
      return{
          reload:this.reload
      }
    },
    data(){
      return{
          isRouterAlive:true
      }
    },
    methods:{
      reload(){
          this.isRouterAlive = false
          this.$nextTick(function () {
              this.isRouterAlive = true
          })
      }
    }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height:100%;overflow:hidden;
}
>>>>>>> da29080be931c56b53392a70f2bcf4e11f029d63
</style>
