import styled from "styled-components"
import { theme } from '~/styledComponents';
import PostList from "./PostList";

const Home = () => {
    return <Wrapper>
        <Page>
            <PostList />
        </Page>
    </Wrapper>
}

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`
export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};    
`

export default Home