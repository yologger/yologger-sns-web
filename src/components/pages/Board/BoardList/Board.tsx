import styled from 'styled-components';
import { IBoard } from '~/types/board';

interface IBoardProps {
    board: IBoard
}

const Board = ({ board }: IBoardProps) => {

    return <Wrapper>
        <BoardHeader nickname={board.nickname} email={board.email} />
        <BoardTitle>TITLE: {board.title}</BoardTitle>
        <BoardBody>BODY: {board.body}</BoardBody>
        <BoardFooter>This is footer</BoardFooter>
    </Wrapper>
}

const BoardHeader = ({ nickname, email }) => {
    return <>
        <div>NICKNAME: {nickname}</div>
        <div>EMAIL: {email}</div>
    </>
}

const Wrapper = styled.div`
  width: 100%;
  background-color: cyan;
  display: flex;
  /* background: ${({ theme }) => theme.color.white}; */
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px
`

const BoardTitle = styled.div`
    
`

const BoardBody = styled.div`
    
`

const BoardFooter = styled.div`
    
`

export default Board