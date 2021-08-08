import { Filter, ToggleChange } from './types'

export const filter: Filter = (arr, search) => {
    if (search === '') {
        return arr
    }
    const lowArr = arr.map((el) => ({ el, key: el.toLowerCase() }))
    const lowSearch = search.toLowerCase()
    return lowArr.filter((x) => x.key.includes(lowSearch)).map((el) => el.el)
}

export const toggleChange: ToggleChange = (value, option) => {
    let newSet = [...value]
    const index = newSet.indexOf(option)
    if (index > -1) {
        newSet.splice(index, 1)
    } else {
        newSet.push(option)
    }
    return newSet
}

export const filterValues = (value: string[]) => (elem: string) =>
    [...value].indexOf(elem) === -1
