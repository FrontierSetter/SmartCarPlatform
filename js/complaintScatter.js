var dataComplaintScatter = [
    [20,25, 1307, '引擎']
]

optionComplaintScatter = {
    color: ["#37A2DA"],
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#f7f8fa'
    // }, {
    //     offset: 1,
    //     color: '#cdd0d5'
    // }]),
    // title: {
    //     text: '1990 与 2015 年各国家人均寿命与 GDP'
    // },
    grid:{
        top:0,
        right:0,
        left:0,
        bottom:0
    },
    xAxis: {
        show:false,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        min:0,
        max:100
    },
    yAxis: {
        show:false,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        min:0,
        max:100
    },
    series: [{
        name: '2015',
        data: dataComplaintScatter,
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]);
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'bold'
                },
                color:'#63B8FF',
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};