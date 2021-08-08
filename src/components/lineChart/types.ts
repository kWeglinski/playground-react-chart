export type DataElem = { [key: string]: string | number }
export type DataSet = DataElem[]

export type IndexProps = {}

export type PresentationalProps = {
    data: DataSet
    metrics: string[]
}
