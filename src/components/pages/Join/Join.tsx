import styled, { theme } from '~/styledComponents';

const Join = () => {
    return <Wrapper>
        <Page>
            <Groups>
                <Group><EmailInput /></Group>
                <Group><NameInput /></Group>
                <Group><NicknameInput /></Group>
                <Group><PasswordInput /></Group>
                <Group><JoinButton type="button">회원가입</JoinButton></Group>
            </Groups>
        </Page>
    </Wrapper>
}

const EmailInput = () => {
    return <>
        <Label>이메일</Label>
        <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

const NameInput = () => {
    return <>
        <Label>이름</Label>
        <Input
            type="text"
            placeholder="이름을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

const NicknameInput = () => {
    return <>
        <Label>닉네임</Label>
        <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

const PasswordInput = () => {
    return <>
        <Label>비밀번호</Label>
        <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

export const JoinButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
`

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`

const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
`

const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.bgztGrey900};

  & > span {
    color: ${theme.color.bgztRed500};
  }

  & > small {
    color: ${theme.color.bgztGrey300};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 0.25rem;
  }
  ${({ center }) =>
        center &&
        `
    display: flex;
    align-items: center;
  `};
  ${({ pad }) =>
        pad &&
        `
    padding-top: ${pad}px;
  `};
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  ${(p) =>
        p.error &&
        `
    border-color: ${p.theme.color.error} !important;
  `};
`;

const Groups = styled.ul`
  padding-top: 0.5rem;
`;

const Group = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.bgztGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default Join