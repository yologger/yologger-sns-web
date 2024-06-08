import styled from 'styled-components';
import { IBoard } from '~/types/board';

interface IBoardProps {
    board: IBoard
}

const Board = ({ board }: IBoardProps) => {

    return <Wrapper>
        <BoardHeader nickname={board.nickname} email={board.email} />
        <BoardTitle>{board.title}</BoardTitle>
        <BoardBody>{board.body}</BoardBody>
        {/* <BoardFooter>This is footer</BoardFooter> */}
    </Wrapper>
}

const BoardHeader = ({ nickname, email }) => {
    return <>
        <BoardNickname>{nickname}</BoardNickname>
        <BoardEmail>{email}</BoardEmail>
    </>
}

const BoardNickname = styled.div`
    font-size: ${(props) => props.theme.font.large};
`

const BoardEmail = styled.div`
    
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.theme.margin.base};
  padding: ${(props) => props.theme.padding.base};
  border: 1px solid ${(props) => props.theme.color.shadow};
  border-radius: 5px;
`

const BoardTitle = styled.div`
    font-size: ${(props) => props.theme.font.xlarge};
`

const BoardBody = styled.div`
    
`

const BoardFooter = styled.div`
    
`

export default Board