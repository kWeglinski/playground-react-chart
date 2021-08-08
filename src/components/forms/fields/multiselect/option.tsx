import React from 'react'
import Tag from '../../tag'
import { OptionProps } from './types'
import styles from './styles.module.css'

const Option: React.FC<OptionProps> = ({ value, onChange }) => (
    <Tag>
        <>
            {value}
            <span className={styles.close} onClick={() => onChange(value)}>
                X
            </span>
        </>
    </Tag>
)

export default Option
