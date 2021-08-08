import { Filters } from '../../context/advertisingData/types'
import { DataElem } from './types'

export const filterData = (data: DataElem[], filters: Filters) => {
    if (filters.length === 0) {
        return data
    }
    return data.filter((elem) => {
        const validate = filters
            .map((filter) => {
                const elemValue = elem[filter.key]
                const isValid = filter.value.indexOf(elemValue as string) > -1
                return isValid
            })
            .filter((val) => !val)
        return validate.length === 0
    })
}

export const joinData = (data: DataElem[], metrics: string[]) =>
    [...data].reduce<DataElem[]>((acc, val) => {
        const { Date } = val
        const index = acc.findIndex((a) => a.Date === Date)
        const target = index > -1 ? index : acc.length
        const values: DataElem = {}
        metrics.forEach((metric) => {
            const curr = acc[target] && +acc[target][metric]
            values[metric] = (curr || 0) + +val[metric]
        })
        acc[target] = { ...val, ...values }
        return acc
    }, [])

const date = (elem: DataElem) => elem.Date || ('' as string)

export const parseDate = (elem: DataElem) =>
    // @ts-expect-error: Date allows string[] as param
    new Date(date(elem).split('.').reverse())
