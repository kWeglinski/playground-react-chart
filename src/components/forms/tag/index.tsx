import React from 'react'
import { Props } from './types'
import styles from './styles.module.css'

const Tag: React.FC<Props> = ({ children }) => {
    return <div className={styles.tag}>{children}</div>
}

export default Tag
