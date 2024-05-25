import { Link } from "react-router-dom"
import styled from '~/styledComponents';

const Header = () => {

    const isLoggedIn: Boolean = false

    return <>
        <HeaderTop>
            <HeaderTopContent>
            </HeaderTopContent>
        </HeaderTop>
        <HeaderMain>
            <HeaderMainContent>
                <HeaderMenuGroup>
                    <HeaderMenuLink to="/">Home</HeaderMenuLink>
                    <HeaderMenuLink to="/post/new">Write</HeaderMenuLink>
                </HeaderMenuGroup>
                {isLoggedIn ? (
                    <HeaderMenuGroup>
                        <HeaderMenuButton>Logout</HeaderMenuButton>
                        <HeaderMenuLink to="/account">Account</HeaderMenuLink>
                    </HeaderMenuGroup>
                ) : (
                    <HeaderMenuGroup>
                        <HeaderMenuLink to="/login">Login</HeaderMenuLink>
                        <HeaderMenuLink to="/signup">Signup</HeaderMenuLink>
                    </HeaderMenuGroup>
                )}
            </HeaderMainContent>
        </HeaderMain>
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

const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    background: ${(p) => p.theme.color.white};
    height: 40px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.color.shadow};
    position: sticky;
    top: 0;
`

const HeaderMainContent = styled.div`
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
    display: flex;
    align-items: center;
    padding: 0 15px;
    position: relative;
    line-height: 1.4;
`

const HeaderMenuButton = styled.button`
    padding: 0 15px;
    line-height: 1.4;
`

export default Header