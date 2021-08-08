import React from 'react'

export type UseClickOutside = (
    ref: React.RefObject<HTMLElement>,
    handler: (param: any) => any
) => void
