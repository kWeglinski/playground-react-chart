import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { UseFetchCSV } from './types'

const useFetchCSV: UseFetchCSV = (path: string) => {
    const [data, setData] = useState<{ data: any | void; isLoading: boolean }>({
        data: [],
        isLoading: true,
    })

    useEffect(() => {
        const response = fetch(path)
            .then((response) => response.text())
            .then((v) =>
                Papa.parse(v, {
                    header: true,
                    dynamicTyping: true,
                })
            )
            .catch((err) => console.log(err))

        response.then((data) => {
            setData({ isLoading: false, data: (data as unknown as any).data })
        })
    }, [path])

    return data
}

export default useFetchCSV
