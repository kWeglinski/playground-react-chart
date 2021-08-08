import React, { useContext, useState } from 'react'
import { CtxAdvertisingData } from '../../context/advertisingData'
import {
    FilterOption,
    Filters as FiltersType,
} from '../../context/advertisingData/types'
import Button from '../forms/button'
import MultiSelect from '../forms/fields/multiselect'
import { getFilter, toggleFilter } from './helpers'
import { TITLE, APPLY } from './strings'
import styles from './styles.module.css'
import { FilterSetter } from './types'

const Filters: React.FC = () => {
    const [currentFilters, setCurrentFilters] = useState<FiltersType>([])
    const { filterOptions, setFilters } = useContext(CtxAdvertisingData)

    const filterSetter: FilterSetter = (id) => (value) =>
        setCurrentFilters((filters) => toggleFilter(filters, id, value))

    const updateFilters = () => {
        setFilters(currentFilters)
    }

    return (
        <div className={styles.filters}>
            {TITLE}
            {filterOptions.map((filter: FilterOption) => (
                <MultiSelect
                    key={filter.id}
                    id={filter.id}
                    options={filter.options}
                    value={getFilter(currentFilters, filter.id)?.value || []}
                    onChange={filterSetter(filter.id)}
                />
            ))}
            <Button label={APPLY} onClick={() => updateFilters()} />
        </div>
    )
}

export default Filters
