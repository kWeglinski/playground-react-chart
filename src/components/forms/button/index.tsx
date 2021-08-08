import React from 'react'
import { Props } from './types'
import styles from './styles.module.css'

const Button: React.FC<Props> = ({ label, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {label}
    </button>
)

export default Button
