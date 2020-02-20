<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name:'radarChart',
        data(){
            return {
                 id:"radarChart",
                 myChart:null,
            }
        },
        mounted(){
            this.loadChart();
        },
        beforeDestroy() {
			if (!this.myChart) {
				return
			}
			this.myChart.dispose();
			this.myChart = null;
        },
        methods: {
            loadChart(){
                this.$nextTick(() => {
                    this.myChart = echarts.init(document.getElementById(this.id));
                    this.myChart.setOption(this.initOption());
                })
            },
         	initOption(){
               let option =  {
                   tooltip : {
                       trigger: 'axis',
                       axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                           type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                       }
                   },
                   title: {
                       text: '测评分分布',
                       subtext: '王五',
                       textStyle: {
                            color:"#546570",
                           fontSize: 12,
                       },
                   },
                   legend: {
                   },
                   grid: {
                       left: '3%',
                       right: '4%',
                       bottom: '3%',
                       containLabel: true
                   },
                   toolbox: {
                       feature: {
                           dataView: {show: true, readOnly: false},
                           magicType: {show: true, type: ['line', 'bar']},
                           restore: {show: true},
                           saveAsImage: {show: true}
                       },
                       itemSize:10,
                   },
                   xAxis : [
                       {
                           type : 'value'
                       }
                   ],
                   yAxis : [
                       {
                           type : 'category',
                           axisTick : {show: false},
                           data : ['0-8','9-12','13-16','17-20'],
                           axisLabel: {
                               formatter: '{value} 分'
                           }
                       }
                   ],
                   series : [
                       {
                           name:'人数',
                           type:'bar',
                           stack: '总量',
                           label: {
                               normal: {
                                   show: true
                               }
                           },
                           data:[45, 33, 78, 21],
                           barMinWidth:10,
                           barMaxWidth:15,
                           itemStyle:{
                               color:"#FFA3A1"
                           }

                       },

                   ]
               };

                return option;
			},
        },
        watch: {
        }
    }
</script>

<style lang="less">

</style>
