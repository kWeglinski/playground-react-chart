import { filterData, joinData, parseDate } from '../helpers'

const genElem = (DataSource, Campaign, Date = '01.01.2019') => ({
    Clicks: 1,
    Impressions: 2,
    DataSource,
    Campaign,
    Date,
})

const genFilter = (key, value) => ({
    key,
    value,
})

describe('lineChart helpers', () => {
    describe('filterData', () => {
        const cases = [
            //simple, single filter
            [
                [genElem('a', 'b'), genElem('c', 'd')],
                [genFilter('DataSource', 'a')],
                [genElem('a', 'b')],
            ],
            //no filter
            [
                [genElem('a', 'b'), genElem('c', 'd')],
                [],
                [genElem('a', 'b'), genElem('c', 'd')],
            ],
            //filters 2 params that fit one element
            [
                [genElem('a', 'b'), genElem('c', 'd')],
                [genFilter('DataSource', 'a'), genFilter('Campaign', 'b')],
                [genElem('a', 'b')],
            ],
            //exclusive filters
            [
                [genElem('a', 'b'), genElem('c', 'd')],
                [genFilter('DataSource', 'a'), genFilter('Campaign', 'c')],
                [],
            ],
        ]

        test.each(cases)(
            'given elements: %p and active filters: %p returns filtered %p, using AND operator for filters',
            (data, filters, filtered) => {
                expect(filterData(data, filters)).toEqual(filtered)
            }
        )
    })

    describe('joinData', () => {
        const metrics = ['Clicks', 'Impressions']
        const cases = [
            [
                [
                    genElem('a', 'b', '1'),
                    genElem('a', 'b', '1'),
                    genElem('a', 'b', '2'),
                ],
                [
                    { d: '1', c: 2, i: 4 },
                    { d: '2', c: 1, i: 2 },
                ],
            ],
            [
                [
                    genElem('a', 'b', '1'),
                    genElem('a', 'b', '2'),
                    genElem('a', 'b', '2'),
                ],
                [
                    { d: '2', c: 2, i: 4 },
                    { d: '1', c: 1, i: 2 },
                ],
            ],
            [
                [
                    genElem('a', 'b', '2'),
                    genElem('a', 'b', '2'),
                    genElem('a', 'b', '2'),
                ],
                [{ d: '2', c: 3, i: 6 }],
            ],
        ]

        test.each(cases)(
            'given data %p returns sum of metrics for each day: %p',
            (data, results) => {
                const assertion = joinData(data, metrics)
                results.forEach((result) => {
                    expect(assertion).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                Date: result.d,
                                Clicks: result.c,
                                Impressions: result.i,
                            }),
                        ])
                    )
                })
            }
        )
    })

    describe('parseDate', () => {
        const cases = [
            [{ Date: '01.01.2019' }, new Date('2018-12-31T23:00:00.000Z')],
            [{ Date: '30.06.2020' }, new Date('2020-06-29T22:00:00.000Z')],
            [{ Date: '11.12.2021' }, new Date('2021-12-10T23:00:00.000Z')],
        ]

        test.each(cases)(
            'parses string date to Date object',
            (date, result) => {
                expect(parseDate(date)).toEqual(result)
            }
        )
    })
})
