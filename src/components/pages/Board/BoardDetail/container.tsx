import useHttpRequest from "~/hooks/useHttpRequest";
import { useParams } from 'react-router'
import { ApiParameters } from "~/types/utils";
import { getBoard } from "~/api/bms";
import BoardDetail from "./BoardDetail";

interface PathParams {
    bid: string;
}

const Container = () => {

    const { bid } = useParams<PathParams>();
    
    const result = getBoard({ bid: bid })

    result.then(data => 
        console.log(data)
    )
    

    // const [data, fetch, isLoading] = useHttpRequest(async () => {
        
    // })

    // console.log(data)
    // console.log(fetch)
    // console.log(isLoading)

    const email = "samuel@gmal.com"
    const nickname = "samuel"
    const title = "This is title"
    const body = "This is body"

    return <>
        <BoardDetail email={email} nickname={nickname} title={title} body={body} />
    </>
}

export default Container