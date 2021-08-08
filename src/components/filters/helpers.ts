import { FilterOption, Filters } from '../../context/advertisingData/types'

export const getFilter = (filters: Filters, filter: FilterOption['id']) =>
    filters?.find((f) => filter === f.key)

export const toggleFilter = (filters: Filters, id: string, value: string[]) => {
    const newSet = [...filters]
    let elem = newSet.findIndex((el) => el.key === id)
    const index = elem === -1 ? newSet.length : elem
    if (value.length === 0) {
        if (index > -1) {
            newSet.splice(index, 1)
        }
    } else {
        newSet[index] = { key: id, value }
    }
    return newSet
}
