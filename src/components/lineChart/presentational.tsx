import React, { useMemo } from 'react'
import { PresentationalProps } from './types'
import { parseDate } from './helpers'
import { Chart } from 'react-charts'

const Presentational: React.FC<PresentationalProps> = ({ data, metrics }) => {
    const dataSet = metrics.map((metric) => {
        return {
            secondaryAxisID: metric,
            label: metric,
            data: data
                .map((elem) => ({ x: parseDate(elem), y: elem[metric] }))
                .filter((e) => !Number.isNaN(e.y)),
        }
    })

    const axes = useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left', id: metrics[0], min: 0 },
            { type: 'linear', position: 'right', id: metrics[1], min: 0 },
        ],
        [metrics]
    )

    return (
        <div
            style={{
                flex: 2,
                height: '300px',
            }}
        >
            <Chart data={dataSet} axes={axes} tooltip />
        </div>
    )
}

export default Presentational
