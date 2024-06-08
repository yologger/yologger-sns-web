import { Link } from "react-router-dom"
import styled from '~/styledComponents';

interface IHeaderProps {
    isLoggedIn: boolean
}

const Header = ({ isLoggedIn }: IHeaderProps) => {

    return <>
        <HeaderTop>
            <h1>ENV: {process.env.REACT_APP_ENV}</h1>
            <h1>API_URL: {process.env.REACT_APP_API}</h1>
            <HeaderTopContent>
            </HeaderTopContent>
        </HeaderTop>
        <HeaderBottom>
            <HeaderBottomContent>
                <HeaderMenuGroup>
                    <HeaderMenuLink to="/">Home</HeaderMenuLink>
                    <HeaderMenuLink to="/board/new">Write</HeaderMenuLink>
                </HeaderMenuGroup>
                {isLoggedIn ? (
                    <HeaderMenuGroup>
                        <HeaderMenuButton>Logout</HeaderMenuButton>
                        <HeaderMenuLink to="/account">Account</HeaderMenuLink>
                    </HeaderMenuGroup>
                ) : (
                    <HeaderMenuGroup>
                        <HeaderMenuLink to="/login">Login</HeaderMenuLink>
                        <HeaderMenuLink to="/join">Join</HeaderMenuLink>
                    </HeaderMenuGroup>
                )}
            </HeaderBottomContent>
        </HeaderBottom>
    </>
}

const HeaderTop = styled.div`
    display: flex;
    justify-content: center;
    background: ${(p) => p.theme.color.white};
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${(props) => props.theme.color.shadow};
`
const HeaderTopContent = styled.div`
    width: ${(p) => p.theme.bodyWidth};
    display: flex;
    justify-content: space-between;
`;

const HeaderBottom = styled.div`
    display: flex;
    justify-content: center;
    background: ${(p) => p.theme.color.white};
    height: 50px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.color.shadow};
    position: sticky;
    top: 0;
`

const HeaderBottomContent = styled.div`
    display: flex;
    height: 40px;
    width: ${(p) => p.theme.bodyWidth};
    justify-content: space-between;
`;

const HeaderMenuGroup = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const HeaderMenuLink = styled(Link)`
    height: 50px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
`

const HeaderMenuButton = styled.button`
    padding: 0 15px;
    line-height: 1.4;
`

export default Header