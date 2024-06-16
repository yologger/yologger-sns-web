import { IUserInfo } from "~/types"
import Header from "./Header"

interface IContainerProps {
    isLoggedIn: boolean,
    accessToken?: string,
    userInfo: IUserInfo
}

const Container = ({ isLoggedIn, accessToken, userInfo }: IContainerProps) => {
    return <>
        <h1>isLoggedIn: {isLoggedIn.toString() }</h1>
        <h1>accessToken: {accessToken}</h1>
        <Header isLoggedIn = {isLoggedIn}/>
    </>
}

export default Container