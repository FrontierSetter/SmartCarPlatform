//车型历史销量走势

function randomData2() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data2 = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data2.push(randomData2());
}

option2 = {
    // title: {
    //     text: '动态数据 + 时间坐标轴'
    // },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#63B8FF'
            }
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#63B8FF'
            }
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data2
    }]
};
//////////////////////车型历史销量走势 end

// 品牌实时热度

var dataAxis3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var data3 = [456, 330, 290, 234, 220, 149, 123, 90, 40, 35];
var yMax3 = 500;
var dataShadow3 = [];

for (var i = 0; i < data3.length; i++) {
    dataShadow3.push(yMax3);
}

option3 = {
    // title: {
    //     text: '特性示例：渐变色 阴影 点击缩放',
    //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    // },
    tooltip:{
        trigger: 'axis',
        formatter:'{b1}: {c1}'
    },
    xAxis: {
        data: dataAxis3,
        axisLabel: {
            // inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow3,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data3
        }
    ]
};


//////////////////////品牌实时热度 end