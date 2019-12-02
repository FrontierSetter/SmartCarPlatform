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
                color: '#999'
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
                color: '#999'
            }
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data2,
       
    }]
};
//////////////////////车型历史销量走势 end

// 品牌实时热度

var dataAxis3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var data3 = [456, 330, 290, 234, 220, 149, 123, 90, 40, 35, 456, 330, 290, 234, 220, 149, 123, 90, 40, 35, 456, 330, 290, 234, 220, 149, 123, 90, 40, 35];
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
    grid: {
        top: '5%',
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
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
            show: false,
            lineStyle:{
                color: '#63B8FF'
            }
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false,
            lineStyle:{
                color: '#63B8FF'
            }
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

// 车型投诉量走势
data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
var valueList = data.map(function (item) {
    return item[1];
});
var dateList = data.map(function (item) {
    return item[0];
});
option5 = {

    // Make gradient line here
    visualMap: {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
    },


    // title: [{
    //     left: 'center',
    //     text: 'Gradient along the y axis'
    // }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: dateList,
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    series: {
        type: 'line',
        showSymbol: false,
        data: valueList,
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: 'white'
                    }
                }
            },
            data: [
            {
                type: 'max',
                name: '最大值',
    
            }]
        },
    }
};
/////////////车型投诉量走势

// 百车故障数

option6 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '5%',
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['引擎', '内饰', '车门', '玻璃', '悬挂器', '点火装置', '车轱辘'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle:{
                    color: '#999'
                }
            },
            axisLabel:{
                interval:0
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle:{
                    color: '#999'
                }
            },
        }
    ],
    series : [
        {
            name:'百车故障数',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

///////////////////////百车故障数

// 车型评分雷达图
var labels7 = ['1', '2', '3', '4', '5', '6'];
option7 = {
    // title: {
    //     text: '基础雷达图'
    // },
    tooltip: {},
    legend: {
        data: ['均值', '当前'],
        orient: 'vertical',
        x:'left',
        textStyle:{//图例文字的样式
            color:'#63B8FF',
        }
    },
    radar: {
        // shape: 'circle',
        radius:'50%',
        center:['50%', '40%'],
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '销售', max: 6500},
           { name: '管理', max: 16000},
           { name: '技术', max: 30000},
           { name: '客服', max: 38000},
           { name: '研发', max: 52000},
           { name: '市场', max: 25000}
        ]
    },
    series: [{
        name: '当前 vs 均值',
        type: 'radar',
        // radius: '50%',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '均值',
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                }
            },
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '当前',
                areaStyle: {
                    normal: {
                        opacity: 0.9,
                        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                            {
                                color: '#B8D3E4',
                                offset: 0
                            },
                            {
                                color: '#72ACD1',
                                offset: 1
                            }
                        ])
                    }
                }
            }
        ]
    }]
};
/////////////////////车型评分雷达图

// 当月评论情感分析

option8 = {
    // color: ["#0B61A4", "#1240AB", "#2A4480", "#009999", "#033E6B", "#06266F", "#006363", "#3F92D2", "#4671D5", "#33CCCC"],
    // color: ['#9cd4d8', '#bce0e5', '#bcd6e5', '#cae4f4', '#bcdaf2', '#bfe3ff', '#b0d5ff', '#a4c7f0', '#aec9fe', '#a0b9ec'],
    color: ['#009ad6', '#76becc', '#2468a2', '#2585a6', '#33a3dc', '#7bbfea', '#78cdd1', '#00a6ac', '#008792', '#afdfe4'],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        x: 'left',
        data:['好','中','差','1','2','3','4','5','6','7'],
        textStyle:{//图例文字的样式
            color:'#63B8FF',
        }
    },
    series: [
        {
            name:'评论情感',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    show: false,
                    position: 'inner'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'好', selected:true},
                {value:679, name:'中'},
                {value:1548, name:'差'}
            ]
        },
        {
            name:'评论情感',
            type:'pie',
            radius: ['40%', '55%'],
            lanel:{
                show:'false'
            },
            label: {
                normal: {
                    show: false,
                    // position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            // label: {
            //     normal: {
            //         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            //         backgroundColor: '#eee',
            //         borderColor: '#aaa',
            //         borderWidth: 1,
            //         borderRadius: 4,
            //         // shadowBlur:3,
            //         // shadowOffsetX: 2,
            //         // shadowOffsetY: 2,
            //         // shadowColor: '#999',
            //         // padding: [0, 7],
            //         rich: {
            //             a: {
            //                 color: '#999',
            //                 lineHeight: 22,
            //                 align: 'center'
            //             },
            //             // abg: {
            //             //     backgroundColor: '#333',
            //             //     width: '100%',
            //             //     align: 'right',
            //             //     height: 22,
            //             //     borderRadius: [4, 4, 0, 0]
            //             // },
            //             hr: {
            //                 borderColor: '#aaa',
            //                 width: '100%',
            //                 borderWidth: 0.5,
            //                 height: 0
            //             },
            //             b: {
            //                 fontSize: 16,
            //                 lineHeight: 33
            //             },
            //             per: {
            //                 color: '#eee',
            //                 backgroundColor: '#334455',
            //                 padding: [2, 4],
            //                 borderRadius: 2
            //             }
            //         }
            //     }
            // },
            data:[
                {value:335, name:'好'},
                {value:310, name:'1'},
                {value:234, name:'2'},
                {value:135, name:'3'},
                {value:1048, name:'4'},
                {value:251, name:'5'},
                {value:147, name:'6'},
                {value:102, name:'7'}
            ]
        }
    ]
};;

/////////////////////当月评论情感分析

// 品牌车辆销售占比
option9 = {
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],

    // title: {
    //     text: 'Customized Pie',
    //     left: 'center',
    //     top: 20,
    //     textStyle: {
    //         color: '#ccc'
    //     }
    // },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        // orient: 'vertical',
        left: 'left',
        data: ['宝马','奥迪','大众','五菱','奔驰'],
        textStyle:{//图例文字的样式
            color:'#63B8FF',
        }
    },
    series : [
        {
            name:'品牌',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'宝马'},
                {value:310, name:'奥迪'},
                {value:274, name:'大众'},
                {value:235, name:'五菱'},
                {value:400, name:'奔驰'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle:{//图例文字的样式
                        color:'#63B8FF',
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    // color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};;
/////////////////////品牌车辆销售占比

// 购车目的
option10 = {
    // title : {
    //     text: '某站点用户访问来源',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    // grid:{
    //     top:'1%',
    // },
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        // orient: 'vertical',
        left: 'left',
        data: ['代步','政府采购','炫耀','单纯想花钱','老婆喜欢'],
        textStyle:{//图例文字的样式
            color:'#63B8FF',
        }
    },
    series : [
        {
            name: '购车目的',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: false,
                    // position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            data:[
                {value:335, name:'炫耀'},
                {value:310, name:'老婆喜欢'},
                {value:234, name:'单纯想花钱'},
                {value:135, name:'政府采购'},
                {value:1548, name:'代步'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
//////////////////// 购车目的

// 百车故障分析
option13 = {
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        x: 'left',
        data:['引擎','内饰','车门','玻璃','点火装置'],
        textStyle:{//图例文字的样式
            color:'#63B8FF',
        }
    },
    series: [
        {
            name:'故障分析',
            type:'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'引擎'},
                {value:310, name:'内饰'},
                {value:234, name:'车门'},
                {value:135, name:'玻璃'},
                {value:1548, name:'点火装置'}
            ]
        }
    ]
};
//////////////百车故障分析

