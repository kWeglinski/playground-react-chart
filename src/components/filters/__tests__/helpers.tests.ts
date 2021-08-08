import { getFilter, toggleFilter } from '../helpers'

describe('filters helpers', () => {
    describe('getFilter', () => {
        const mock = [
            {
                key: 'test',
                value: ['1', '2'],
            },
            {
                key: 'filter',
                value: ['1', '2'],
            },
        ]

        it('returns filter by id', () => {
            expect(getFilter(mock, 'filter')).toEqual(mock[1])
        })
        it('returns undefined when no filter found', () => {
            expect(getFilter(mock, 'something')).toEqual(undefined)
        })
    })

    describe('toggleFilter', () => {
        const mock = [
            {
                key: 'test',
                value: ['1', '2'],
            },
            {
                key: 'filter',
                value: ['1', '2'],
            },
        ]
        const mock2 = [
            {
                key: 'test',
                value: ['1', '2'],
            },
        ]

        it('adds non-existing key to filter array', () => {
            expect(toggleFilter(mock, 'new', ['3'])).toEqual([
                ...mock,
                { key: 'new', value: ['3'] },
            ])
            expect(toggleFilter([], 'new', ['3'])).toEqual([
                { key: 'new', value: ['3'] },
            ])
        })
        it('removes existing key from filter array if target value is empty', () => {
            expect(toggleFilter(mock, 'test', [])).toEqual([mock[1]])
            expect(toggleFilter(mock2, 'test', [])).toEqual([])
        })
        it('overwrites value for existing key in filter array', () => {
            expect(toggleFilter(mock, 'test', ['4', '5'])).toEqual([
                { key: 'test', value: ['4', '5'] },
                mock[1],
            ])
        })
    })
})
