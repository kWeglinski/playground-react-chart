import React, { useEffect, useState } from 'react'
import { CtxType, Props, Data, Filters, FilterOptions } from './types'
import { DIMENSIONS } from './constants'
import { getDimension } from './model'
import useFetchCSV from '../../hooks/fetchCSV'

export const CtxAdvertisingData = React.createContext<CtxType>({
    data: [],
    filters: [],
    setFilters: () => {},
    filterOptions: [],
    isLoading: false,
})

const WithAdvertisingData: React.FC<Props> = ({ children }) => {
    const { data, isLoading } = useFetchCSV<Data>(
        'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv'
    )
    const [filters, setFilters] = useState<Filters>([])
    const [filterOptions, setFilterOptions] = useState<FilterOptions>([])

    useEffect(() => {
        const options = DIMENSIONS.map((id) => ({
            id,
            options: getDimension(data, id),
        }))
        setFilterOptions(options)
    }, [data])

    const ctx = {
        data,
        filters,
        setFilters,
        filterOptions,
        isLoading,
    }

    return (
        <CtxAdvertisingData.Provider value={ctx}>
            {children}
        </CtxAdvertisingData.Provider>
    )
}

export default WithAdvertisingData
