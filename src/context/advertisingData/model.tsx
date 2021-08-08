export const getDimension = (data: any, id: any) =>
    [...new Map(data.map((item: any) => [item[id], item])).values()].map(
        (item: any) => item[id]
    )
