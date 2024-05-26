import styled from "styled-components"
import { theme } from '~/styledComponents';
import BoardList from "../Board/BoardList";

const Home = () => {
    return <Wrapper>
        <Page>
            <h1>ENV: {process.env.REACT_APP_ENV}</h1>
            <h1>API_URL: {process.env.REACT_APP_API}</h1>
            <BoardList />
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