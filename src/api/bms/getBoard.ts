import bms from "."

type Params = {
    bid: string
}

type Data = {
    bid: number
    uid: number
    title: string
    body: string
    createDate: string
    modifiedAt: string
}

type Response = {
    data: Data
}

export const getBoard = (params: Params) => {
    return bms.get<Response>(`/board/${params.bid}`, {})
}