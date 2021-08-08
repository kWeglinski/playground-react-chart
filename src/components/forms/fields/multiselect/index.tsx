import React, { useEffect, useRef, useState } from 'react'
import Search from '../../search'
import { Filtered, Props } from './types'
import { filter, filterValues, toggleChange } from './helpers'
import Option from './option'
import useOnClickOutside from '../../../../hooks/clickOutside'
import styles from './styles.module.css'

const MultiSelect: React.FC<Props> = ({ id, options, value, onChange }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [results, setResults] = useState<Filtered>([])

    useOnClickOutside(ref, () => setOpen(false))

    useEffect(() => {
        const result = filter(options, search)
        setResults(result)
    }, [search, options])

    const handleChange = (option: string) => {
        const newSet = toggleChange(value, option)
        onChange(newSet)
    }

    const resultsWithoutValue = results.filter(filterValues(value))

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.header} onClick={() => setOpen(!open)}>
                {id}
                <span className={styles.fakeChevron}>
                    {open ? ' /\\' : ' \\/'}
                </span>
            </div>
            <div className={styles.multiselect}>
                {value.map((val: string) => (
                    <Option key={`val-${val}`} value={val} onChange={handleChange} />
                ))}
            </div>
            {open && (
                <div className={styles.dropdown}>
                    <Search value={search} onChange={setSearch} />
                    <ul>
                        {resultsWithoutValue.map((option) => (
                            <li
                                key={`opt-${option}`}
                                onClick={() => handleChange(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MultiSelect
