import { ChangeEvent, FormEvent } from 'react';
import styled, { theme } from '~/styledComponents';
import * as S from './Join.style';

interface IProps {
  email: string
  name: string
  nickname: string
  password: string
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onCancel: () => void
}

const Join = ({ email, name, nickname, password, onEmailChange, onNameChange, onNicknameChange, onPasswordChange, onSubmit, onCancel }: IProps) => {

  return <Wrapper>
    <Form onSubmit={onSubmit}>
      <Groups>
        <Group><S.EmailInput value={email} onChange={onEmailChange} /></Group>
        <Group><S.NameInput value={name} onChange={onNameChange} /></Group>
        <Group><S.NicknameInput value={nickname} onChange={onNicknameChange} /></Group>
        <Group><S.PasswordInput value={password} onChange={onPasswordChange} /></Group>
        <ButtonGroup>
          <S.CancelButton type="button" onClick={onCancel}>취소</S.CancelButton>
          <S.JoinButton type="submit">회원가입</S.JoinButton>
        </ButtonGroup>
      </Groups>
    </Form>
  </Wrapper>
}

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`

const Form = styled.form`
  width: ${({ theme }) => theme.bodyWidth};
`

const Groups = styled.ul`
  padding-top: 0.5rem;
`;

const Group = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

const ButtonGroup = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default Join