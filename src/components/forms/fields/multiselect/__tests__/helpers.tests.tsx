import { filter, toggleChange, filterValues } from '../helpers'

describe('multiselect helpers', () => {
    describe('filter', () => {
        const filter_mock = ['one', 'two', 'three']

        type Filter_Case = [string, string[]]
        const filter_cases: Filter_Case[] = [
            ['o', ['one', 'two']],
            ['on', ['one']],
            ['one', ['one']],
            ['th', ['three']],
        ]

        it('returns untouched data when no search', () => {
            expect(filter(filter_mock, '')).toEqual(filter_mock)
        })
        test.each(filter_cases)(
            'given %p as search arg, returns %p',
            (search, expectation) => {
                expect(filter(filter_mock, search)).toEqual(expectation)
            }
        )
    })

    describe('toggleChange', () => {
        const toggle_mock = [
            'GND',
            'GDN Prospecting - Desktop - India Offer',
            'New Years Offer 2019 | Extension Mail #2',
        ]

        it('removes existing element passed as an option', () => {
            expect(toggleChange(toggle_mock, toggle_mock[1])).toEqual([
                toggle_mock[0],
                toggle_mock[2],
            ])
        })

        it('adds non-existing element passed as an option', () => {
            expect(toggleChange(toggle_mock, 'hello')).toEqual([
                ...toggle_mock,
                'hello',
            ])
        })
    })

    describe('filterValue', () => {
        const cases = [
            //2 of 3 picked
            [['2', '3'], ['1', '2', '3'], ['1']],
            //no other option left, all picked
            [['1', '2', '3'], ['1', '2', '3'], []],
            //all options left, none picked
            [[], ['1', '2', '3'], ['1', '2', '3']],
        ]
        test.each(cases)(
            'given %p as value and %p as options reutrns $p as avaliable options',
            (value, options, available) => {
                const assert = options.filter(filterValues(value))
                expect(assert).toEqual(available)
            }
        )
    })
})
