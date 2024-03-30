import { Link } from "react-router-dom"
import styled from '~/styledComponents';

const Header = () => {
    return <>
        <HeaderTop>

        </HeaderTop>
        <HeaderMain>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </HeaderMain>
    </>
}

const HeaderTop = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
`

const HeaderMain = styled.div`
    display: flex;
    align-items: center;
`


export default Header