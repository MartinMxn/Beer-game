<template>
    <div id="bar_dv" ref="chart" :style="{width: '600px', height: '600px'}"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
    name: "Chart",
    
    data() {
        return {
            chart: ""
        };
    },

    props: {
        option: {
            type: Object,
            default() {
                return {
                };
            }
        }
    },

    mounted() {
        this.drawLine();
    },

    methods: {
        drawLine() {
            window.addEventListener("resize", this.chart.resize);
            // 基于准备好的dom，初始化echarts实例
            //   var myChart = echarts.init(document.getElementById('myChart'))
            var bar_dv = this.$refs.chart;
            if (bar_dv) {
                let myChart = this.$echarts.init(bar_dv);
                myChart.setOption(this.option);
            } else {
                console.log("null chart");
            }
        }
    },

    watch: {
        //观察option的变化
        option: {
            handler(newVal, oldVal) {
                if (this.myChart) {
                    if (newVal) {
                        this.myChart.setOption(newVal);
                    } else {
                        this.myChart.setOption(oldVal);
                    }
                } else {
                    this.drawLine();
                }
            },
            deep: true //对象内部属性的监听，关键。
        }
    }
    
};
</script>
