import styled from "styled-components"
import { theme } from '~/styledComponents';

interface IProps {
    email: string
    nickname: string
    title: string
    body: string
}

const BoardDetail = ({ email, nickname, title, body }: IProps) => {
    return <Wrapper>
        <Page>
            <div>EMAIL: {email}</div>
            <div>NICKNAME: {nickname}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
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

export default BoardDetail