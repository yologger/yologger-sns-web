import Board from "./Board"
import styled from "styled-components"
import { theme } from '~/styledComponents';
import { IBoard } from "~/types/board";

interface IBoardListProps {
  boards: IBoard[]
}

const BoardList = ({ boards }: IBoardListProps) => {

  return <>
    {boards.map(board =>
      <Board key={board.id} board={board} />
    )}
  </>
}

export const Wrapper = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    `

export default BoardList