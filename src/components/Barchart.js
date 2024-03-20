import React, { useState, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import './common.css'
import { data } from '../constants/data'

const Barchart = () => {
  const [averages, setAverages] = useState({})

  useEffect(() => {
    calculateAverages()
  }, [])

  const calculateAverages = () => {
    const avgMap = {}

    data.forEach((items) => {
      const alcoholCategory = items['Alcohol']
      const malicAcid = parseFloat(items['Malic Acid'])

      if (!avgMap[alcoholCategory]) {
        avgMap[alcoholCategory] = {
          total: malicAcid,
          count: 1,
        }
      } else {
        avgMap[alcoholCategory].total += malicAcid
        avgMap[alcoholCategory].count++
      }
    })

    for (const category in avgMap) {
      avgMap[category] = avgMap[category].total / avgMap[category].count
    }

    setAverages(avgMap)
  }

  const alcohol = Object.keys(averages)
  const average = Object.values(averages)

  const option = {
    xAxis: {
      type: 'category',
      name: 'Alcohol Category',
      data: alcohol,
    },
    yAxis: {
      type: 'value',
      name: 'Average of malicAcid for Alcohol',
    },
    series: [
      {
        data: average,
        type: 'bar',
      },
    ],
  }
  return (
    <>
      <h1 className="Heading">This is Bar Chart</h1>
      <ReactEcharts option={option} />
    </>
  )
}

export default Barchart
