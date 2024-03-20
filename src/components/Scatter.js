import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './common.css'
import { data } from '../constants/data'

const Scatter = () => {
  const colorIntensityArray = data.map((item) => item['Color intensity'])
  const hueArray = data.map((item) => item['Hue'])

  const option = {
    xAxis: {
      type: 'category',
      name: 'Color Intensity',
      data: colorIntensityArray,
    },
    yAxis: {
      type: 'value',
      name: 'Hue Values',
    },
    series: [
      {
        data: hueArray,
        type: 'scatter',
      },
    ],
  }
  return (
    <>
      <h1 className="Heading">This is Scatter Chart</h1>
      <ReactEcharts option={option} />
    </>
  )
}

export default Scatter
