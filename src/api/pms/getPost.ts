import pms from '.'

type Params = {
    pid: string
}

type Data = {
    pid: number
    uid: number
    title: string
    body: string
    createDate: string
    modifiedAt: string
}

type Response = {
    data: Data
}

export const getPostUrl = () => {
    return '/post/:pid' as const
}

export const getPost = (params: Params) => {
    return pms.get<Response>(`/post/${params.pid}`, {})
}