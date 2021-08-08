import React from 'react'

export type InputChange = React.ChangeEvent<HTMLInputElement>

export type Props = {
    value: string
    onChange: (val: string) => void
}
