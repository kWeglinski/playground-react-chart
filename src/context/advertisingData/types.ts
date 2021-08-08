import { ReactChildren, ReactChild } from 'react'

export type FilterOption = {
    id: string
    options: string[]
}

export type FilterOptions = FilterOption[] | []

type DataElem = {
    [key: string]: string
}

export type Filter = {
    key: string
    value: string[]
}

export type Data = DataElem[] | []
export type Filters = Filter[]

export type CtxType = {
    data: Data
    filters: Filters
    setFilters: (filters: Filters) => void
    filterOptions: FilterOptions
    isLoading: boolean
}

export type Props = {
    children: ReactChild | ReactChildren
}
