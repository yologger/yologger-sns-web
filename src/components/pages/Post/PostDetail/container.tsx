import useHttpRequest from "~/hooks/useHttpRequest";
import PostDetail from "./PostDetail"
import { useParams } from 'react-router'
import { ApiParameters } from "~/types/utils";
import { getPost } from "~/api/pms";

interface PathParams {
    pid: string;
}

const Container = () => {

    const { pid } = useParams<PathParams>();
    
    const result = getPost({ pid: pid })

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
        <PostDetail email={email} nickname={nickname} title={title} body={body} />
    </>
}

export default Container