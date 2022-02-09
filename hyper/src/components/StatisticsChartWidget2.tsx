// @flow
import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

type StatisticsChartWidget2Props = {
  title?: string
  subtitle?: string
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
  colors?: Array<string>
  name?: string
  data?: Array<number>
}

/**
 * Renders the chart in widget area
 */
const StatisticsChartWidget2: FC<StatisticsChartWidget2Props> = (props) => {
  // default options
  const options: ApexOptions = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
      curve: 'straight',
    },
    colors: props.colors || ['#008FFB'],
    title: {
      text: props.title,
      offsetX: 20,
      offsetY: 20,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: props.subtitle,
      offsetX: 20,
      offsetY: 55,
      style: {
        fontSize: '14px',
      },
    },
  }

  // type - defaulted to bar
  const type = props.type || 'bar'

  // chart data
  const series = [{ name: props.name || 'Data', data: props.data || [] }]

  return (
    <Card>
      <Card.Body className="p-0">
        <Chart
          className="apex-charts"
          options={options}
          series={series}
          type={type}
          height={172}
        />
      </Card.Body>
    </Card>
  )
}

export default StatisticsChartWidget2
