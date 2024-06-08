
import styled, { theme } from '~/styledComponents';

const Login = () => {
    return <Wrapper>
        <Page>
            <Groups>
                <Group><EmailInput /></Group>
                <Group><PasswordInput /></Group>
                <ButtonGroup>
                  <CancelButton type="button">취소</CancelButton>
                  <LoginButton type="button">로그인</LoginButton>
                </ButtonGroup>
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

export const CancelButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
    background: ${theme.color.lightGrey};
`

export const LoginButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
    color: ${theme.color.basic0};
    background: ${theme.color.yologgerBlue200};
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
  color: ${theme.color.yologgerGrey900};

  & > span {
    color: ${theme.color.yologgerRed500};
  }

  & > small {
    color: ${theme.color.yologgerGrey300};
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
`;

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

export const ButtonGroup = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default Login