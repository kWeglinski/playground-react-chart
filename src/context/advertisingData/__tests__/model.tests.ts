import { getDimension } from '../model'

const genElem = (DataSource, Campaign) => ({
    Clicks: 1,
    Impressions: 2,
    DataSource,
    Campaign,
})

describe('ctx - AdvertisingData model', () => {
    describe('getDimension', () => {
        const cases = [
            [
                [genElem('a', 'b'), genElem('a', 'd'), genElem('e', 'f')],
                'DataSource',
                ['a', 'e'],
            ],
            [
                [genElem('a', 'b'), genElem('c', 'd'), genElem('e', 'd')],
                'Campaign',
                ['b', 'd'],
            ],
            [
                [genElem('a', 'b'), genElem('c', 'd'), genElem('e', 'f')],
                'Test',
                [undefined],
            ],
        ]

        test.each(cases)(
            'given %p data and %p dimension returns %p unrepeated options',
            (data, dimension, result) => {
                expect(getDimension(data, dimension)).toEqual(result)
            }
        )
    })
})
