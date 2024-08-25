// https://www.makeapie.cn/echarts_content/xR6euDFntb.html 多色环状图
// https://www.makeapie.cn/echarts_content/xrOHthfgGj.html
// https://www.makeapie.cn/echarts_content/xz4osgVEjb.html

export default [
	{
		title: '环形进度图',
		height: 142,
		width: 142,
		key: '1',

		options: {
			title: [
				{
					text: '75%',
					x: 'center',
					top: '38%',
					textStyle: {
						fontSize: 16,
					},
				},
				{
					text: '已完成',
					x: 'center',
					top: '52%',
					textStyle: {
						fontSize: 12,
						fontWeight: '400',
					}
				},
			],
			polar: {
				radius: ['62%', '82%'],
				center: ['50%', '50%'],
			},
			angleAxis: {
				max: 100,
				show: false,
				startAngle: 230,
			},
			radiusAxis: {
				type: 'category',
				show: true,
				axisLabel: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
			},
			series: [
				{
					name: '内圈',
					zlevel: 100,
					type: 'bar',
					roundCap: true,
					barWidth: 90,
					showBackground: true,
					coordinateSystem: 'polar',
					itemStyle: {
						color: '#1890FF',
						background: 'red',
					},
					data: [60],
				},
				{
					name: '外圈边框',
					type: 'pie',
					startAngle: 80,
					radius: ['99%'],
					hoverAnimation: false,
					center: ['50%', '50%'],
					itemStyle: {
						color: '#fff',
						borderWidth: 1,
						borderColor: '#EAF2FF',
					},
					data: [100],
				},
			],
		}
	},


	{
		title: '风险等级',
		height: 250,
		width: 250,
		key: '2',
		
		options: {
			grid: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			},
			title: {
				x: 'center',
				bottom: '0%',
				text: '综合风险指数',
				textStyle: {
					fontSize: 14,
					fontWeight: '400',
				},
			},
			tooltip: {
				show: false,
			},
			series: [{
				name: '信用分',
				type: 'gauge',
				radius: '100%',
				axisLine: {
					show: true,
					lineStyle: {
						width: 18,
						shadowBlur: 0,
						color: [
							[0.25, '#78cc6a'],
							[0.5, '#61a65c'],
							[0.75, '#e29203'],
							[1, '#d53725'],
						]
					}
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false,
				},
				pointer: {
					show: true,
					width: 3,
					itemStyle: {
						color: '#babbbf',
					}
				},
				anchor: {
					show: true,
					showAbove: true,
					size: 12,
					icon: 'circle',
					itemStyle: {
						color: '#fff',
						borderColor: '#babbbf',
						borderWidth: 3
					}
				},
				detail: {
					formatter: function (v) {
						var level = '';
						if (v <= 25) {
							level = '无'
						} else if (v <= 50) {
							level = '低'
						} else if (v <= 75) {
							level = '中'
						} else {
							level = '高'
						}
						return level;
					},
					offsetCenter: [0, '70%'],
					textStyle: {
						fontSize: 24
					}
				},
				data: [
					{
						name: '',
						value: 25
					}
				]
			}]
		}
	}
]
