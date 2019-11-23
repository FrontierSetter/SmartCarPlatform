function randomData() {  
	return Math.round(Math.random()*500);
}  
// 需要在页面上直接标记出来的城市

var keywords = {
              "visualMap": 22199,
              "continuous": 10288,
              "contoller": 620,
              "series": 274470,
              "gauge": 12311,
              "detail": 1206,
              "piecewise": 4885,
              "textStyle": 32294,
              "markPoint": 18574,
              "pie": 38929,
              "roseType": 969,
              "label": 37517,
              "emphasis": 12053,
              "yAxis": 57299,
              "name": 15418,
              "type": 22905,
              "gridIndex": 5146,
              "normal": 49487,
              "itemStyle": 33837,
              "min": 4500,
              "silent": 5744,
              "animation": 4840,
              "offsetCenter": 232,
              "inverse": 3706,
              "borderColor": 4812,
              "markLine": 16578,
              "line": 76970,
              "radiusAxis": 6704,
              "radar": 15964,
              "data": 60679,
              "dataZoom": 24347,
              "tooltip": 43420,
              "toolbox": 25222,
              "geo": 16904,
              "parallelAxis": 4029,
              "parallel": 5319,
              "max": 3393,
              "bar": 43066,
              "heatmap": 3110,
              "map": 20285,
              "animationDuration": 3425,
              "animationDelay": 2431,
              "splitNumber": 5175,
              "axisLine": 12738,
              "lineStyle": 19601,
              "splitLine": 7133,
              "axisTick": 8831,
              "axisLabel": 17516,
              "pointer": 590,
              "color": 23426,
              "title": 38497,
              "formatter": 15214,
              "slider": 7236,
              "legend": 66514,
              "grid": 28516,
              "smooth": 1295,
              "smoothMonotone": 696,
              "sampling": 757,
              "feature": 12815,
              "saveAsImage": 2616,
              "polar": 6279,
              "calculable": 879,
              "backgroundColor": 9419,
              "excludeComponents": 130,
              "show": 20620,
              "text": 2592,
              "icon": 2782,
              "dimension": 478,
              "inRange": 1060,
              "animationEasing": 2983,
              "animationDurationUpdate": 2259,
              "animationDelayUpdate": 2236,
              "animationEasingUpdate": 2213,
              "xAxis": 89459,
              "angleAxis": 5469,
              "showTitle": 484,
              "dataView": 2754,
              "restore": 932,
              "timeline": 10104,
              "range": 477,
              "value": 5732,
              "precision": 878,
              "target": 1433,
              "zlevel": 5361,
              "symbol": 8718,
              "interval": 7964,
              "symbolSize": 5300,
              "showSymbol": 1247,
              "inside": 8913,
              "xAxisIndex": 3843,
              "orient": 4205,
              "boundaryGap": 5073,
              "nameGap": 4896,
              "zoomLock": 571,
              "hoverAnimation": 2307,
              "legendHoverLink": 3553,
              "stack": 2907,
              "throttle": 466,
              "connectNulls": 897,
              "clipOverflow": 826,
              "startValue": 551,
              "minInterval": 3292,
              "opacity": 3097,
              "splitArea": 4775,
              "filterMode": 635,
              "end": 409,
              "left": 6475,
              "funnel": 2238,
              "lines": 6403,
              "baseline": 431,
              "align": 2608,
              "coord": 897,
              "nameTextStyle": 7477,
              "width": 4338,
              "shadowBlur": 4493,
              "effect": 929,
              "period": 225,
              "areaColor": 631,
              "borderWidth": 3654,
              "nameLocation": 4418,
              "position": 11723,
              "containLabel": 1701,
              "scatter": 10718,
              "areaStyle": 5310,
              "scale": 3859,
              "pieces": 414,
              "categories": 1000,
              "selectedMode": 3825,
              "itemSymbol": 273,
              "effectScatter": 7147,
              "fontStyle": 3376,
              "fontSize": 3386,
              "margin": 1034,
              "iconStyle": 2257,
              "link": 1366,
              "axisPointer": 5245,
              "showDelay": 896,
              "graph": 22194,
              "subtext": 1442,
              "selected": 2881,
              "barCategoryGap": 827,
              "barGap": 1094,
              "barWidth": 1521,
              "coordinateSystem": 3622,
              "barBorderRadius": 284,
              "z": 4014,
              "polarIndex": 1456,
              "shadowOffsetX": 3046,
              "shadowColor": 3771,
              "shadowOffsetY": 2475,
              "height": 1988,
              "barMinHeight": 575,
              "lang": 131,
              "symbolRotate": 2752,
              "symbolOffset": 2549,
              "showAllSymbol": 942,
              "transitionDuration": 993,
              "bottom": 3724,
              "fillerColor": 229,
              "nameMap": 1249,
              "barMaxWidth": 747,
              "radius": 2103,
              "center": 2425,
              "magicType": 3276,
              "labelPrecision": 248,
              "option": 654,
              "seriesIndex": 935,
              "controlPosition": 121,
              "itemGap": 3188,
              "padding": 3481,
              "shadowStyle": 347,
              "boxplot": 1394,
              "labelFormatter": 264,
              "realtime": 631,
              "dataBackgroundColor": 239,
              "showDetail": 247,
              "showDataShadow": 217,
              "x": 684,
              "valueDim": 499,
              "onZero": 931,
              "right": 3255,
              "clockwise": 1035,
              "itemWidth": 1732,
              "trigger": 3840,
              "axis": 379,
              "selectedOffset": 670,
              "startAngle": 1293,
              "minAngle": 590,
              "top": 4637,
              "avoidLabelOverlap": 870,
              "labelLine": 3785,
              "sankey": 2933,
              "endAngle": 213,
              "start": 779,
              "roam": 1738,
              "fontWeight": 2828,
              "fontFamily": 2490,
              "subtextStyle": 2066,
              "indicator": 853,
              "sublink": 708,
              "zoom": 1038,
              "subtarget": 659,
              "length": 1060,
              "itemSize": 505,
              "controlStyle": 452,
              "yAxisIndex": 2529,
              "edgeLabel": 1188,
              "radiusAxisIndex": 354,
              "scaleLimit": 1313,
              "geoIndex": 535,
              "regions": 1892,
              "itemHeight": 1290,
              "nodes": 644,
              "candlestick": 3166,
              "crossStyle": 466,
              "edges": 369,
              "links": 3277,
              "layout": 846,
              "barBorderColor": 721,
              "barBorderWidth": 498,
              "treemap": 3865,
              "y": 367,
              "valueIndex": 704,
              "showLegendSymbol": 482,
              "mapValueCalculation": 492,
              "optionToContent": 264,
              "handleColor": 187,
              "handleSize": 271,
              "showContent": 1853,
              "angleAxisIndex": 406,
              "endValue": 327,
              "triggerOn": 1720,
              "contentToOption": 169,
              "buttonColor": 71,
              "rotate": 1144,
              "hoverLink": 335,
              "outOfRange": 491,
              "textareaColor": 58,
              "textareaBorderColor": 58,
              "textColor": 60,
              "buttonTextColor": 66,
              "category": 336,
              "hideDelay": 786,
              "alwaysShowContent": 1267,
              "extraCssText": 901,
              "effectType": 277,
              "force": 1820,
              "rippleEffect": 723,
              "edgeSymbolSize": 329,
              "showEffectOn": 271,
              "gravity": 199,
              "edgeLength": 193,
              "layoutAnimation": 152,
              "length2": 169,
              "enterable": 957,
              "dim": 83,
              "readOnly": 143,
              "levels": 444,
              "textGap": 256,
              "pixelRatio": 84,
              "nodeScaleRatio": 232,
              "draggable": 249,
              "brushType": 158,
              "radarIndex": 152,
              "large": 182,
              "edgeSymbol": 675,
              "largeThreshold": 132,
              "leafDepth": 73,
              "childrenVisibleMin": 73,
              "minSize": 35,
              "maxSize": 35,
              "sort": 90,
              "funnelAlign": 61,
              "source": 336,
              "nodeClick": 200,
              "curveness": 350,
              "areaSelectStyle": 104,
              "parallelIndex": 52,
              "initLayout": 359,
              "trailLength": 116,
              "boxWidth": 20,
              "back": 53,
              "rewind": 110,
              "zoomToNodeRatio": 80,
              "squareRatio": 60,
              "parallelAxisDefault": 358,
              "checkpointStyle": 440,
              "nodeWidth": 49,
              "color0": 62,
              "layoutIterations": 56,
              "nodeGap": 54,
              "color(Array": 76,
              "<string>)": 76,
              "repulsion": 276,
              "tiled": 105,
              "currentIndex": 145,
              "axisType": 227,
              "loop": 97,
              "playInterval": 112,
              "borderColor0": 23,
              "gap": 43,
              "autoPlay": 123,
              "showPlayBtn": 25,
              "breadcrumb": 119,
              "colorMappingBy": 85,
              "id": 18,
              "blurSize": 85,
              "minOpacity": 50,
              "maxOpacity": 54,
              "prevIcon": 12,
              "children": 21,
              "shape": 98,
              "nextIcon": 12,
              "showNextBtn": 17,
              "stopIcon": 21,
              "visibleMin": 83,
              "visualDimension": 97,
              "colorSaturation": 56,
              "colorAlpha": 66,
              "emptyItemWidth": 10,
              "inactiveOpacity": 4,
              "activeOpacity": 4,
              "showPrevBtn": 19,
              "playIcon": 26,
              "ellipsis": 19,
              "gapWidth": 19,
              "borderColorSaturation": 10,
              "handleIcon": 2,
              "handleStyle": 6,
              "borderType": 1,
              "constantSpeed": 1,
              "polyline": 2,
              "blendMode": 1,
              "dataBackground": 1,
              "textAlign": 1,
              "textBaseline": 1,
              "brush": 3
            };

var dataWordCloud = [];
for (var name in keywords) {
    dataWordCloud.push({
        name: name,
        value: Math.sqrt(keywords[name])
    })
}
 
var maskImage = new Image();
 
var optionWordCloud = {
    tooltip: {
    	formatter: function (params) {
            var info = '<p style="font-size:18px">' + params.name + '</p><p style="font-size:14px">'+params.value+'</p>'
            return info;
        },
        // backgroundColor: "#ff7f50",//提示标签背景颜色
        // textStyle: { color: "#fff" } //提示标签字体颜色
    },

    series: [{
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        maskImage: maskImage,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [12, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [-90, 90],
        rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },

        // Data is an array. Each array item must have name and value property.
        data:dataWordCloud
        // data: [{
        //     name: 'Farrah Abraham',
        //     value: 366,
        //     // Style of single text
        //     textStyle: {
        //         normal: {},
        //         emphasis: {}
        //     }
        // }]
    }]
};//初始化echarts实例



// var myChart = echarts.init(document.getElementById('container'));
// //使用制定的配置项和数据显示图表
// // myChart.setOption(option);

// maskImage.onload = function () {
//     // option.series[0].maskImage
//     myChart.setOption(option);
// }
// maskImage.crossOrigin = '';
// maskImage.src = './images/车剪影.png';