import React from 'react'
import { Props, InputChange } from './types'

const Search: React.FC<Props> = ({ value, onChange }) => {
    const changeHandler = (e: InputChange) => onChange(e.target.value)
    return (
        <input
            value={value}
            onChange={changeHandler}
            type="text"
            placeholder="search"
        />
    )
}

export default Search
