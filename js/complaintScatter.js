var dataComplaintScatter = [
    
]

optionComplaintScatter = {
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
    xAxis: {
        type : 'category',
        boundaryGap : false,
        data : ['一','二','三','四','五','六','日']
    },
    yAxis: {
        type : 'category',
        boundaryGap : false,
        data : ['一','二','三','四','五','六','日']
    },
    series: [{
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
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