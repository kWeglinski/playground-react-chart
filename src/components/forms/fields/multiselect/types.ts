import { Filter as GlobalFilter } from '../../../../context/advertisingData/types'

export type Props = {
    id: string
    options: string[]
    value: string[] | []
    onChange: (value: GlobalFilter['value']) => void
}

export type OptionProps = { value: string; onChange: (value: string) => void }

export type Filtered = string[] | []

export type Filter = (arr: string[], search: string) => Filtered

export type ToggleChange = (
    value: Props['value'],
    option: string
) => Props['value']
