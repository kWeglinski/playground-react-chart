import React, { useContext, useEffect, useMemo, useState } from 'react'
import { CtxAdvertisingData } from '../../context/advertisingData'
import { filterData, joinData } from './helpers'
import Presentational from './presentational'
import { IndexProps, DataElem } from './types'

const LineChart: React.FC<IndexProps> = () => {
    const [toDisplay, setToDisplay] = useState<DataElem[]>([])
    const { data, filters, isLoading } = useContext(CtxAdvertisingData)
    const metrics = useMemo(() => ['Clicks', 'Impressions'], [])

    useEffect(() => {
        const filteredData = filterData(data, filters)
        const joinedData = joinData(filteredData, metrics)
        setToDisplay(joinedData)
    }, [data, filters, metrics])

    if (isLoading) {
        return <div>loading...</div>
    }

    return <Presentational data={toDisplay} metrics={metrics} />
}

export default LineChart
