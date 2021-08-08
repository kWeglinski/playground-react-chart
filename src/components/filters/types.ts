import { Filter } from '../../context/advertisingData/types'

export type FilterSetter = (id: string) => (val: Filter['value']) => void
