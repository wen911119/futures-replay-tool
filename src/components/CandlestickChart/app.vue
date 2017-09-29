<template>
    <div class='candlestick' ref='candlestick'>
    </div>
</template>

<script>
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    props: {
        points: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    data() {
        return {
            myChart: null
        }
    },
    mounted() {
        this.myChart = echarts.init(this.$refs.candlestick)
        // 绘制图表
        this.myChart.setOption({
            title: { text: '期货复盘' },
            tooltip: {},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '销量',
                type: 'line',
                data: this.points
            }]
        })
    },
    watch: {
        points: function(nv) {
            this.myChart.setOption({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: nv.map(item => item.time)
                },
                series: [{
                    name: '点位',
                    type: 'line',
                    data: nv.map(item => item.number)
                }]
            })
        }
    }
}
</script>

<style scoped lang='scss'>
.candlestick {
    height: 600px;
    width: 900px;
}
</style>
