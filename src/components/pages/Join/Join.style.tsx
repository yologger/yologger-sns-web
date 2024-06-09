import { ChangeEvent } from 'react';
import styled, { theme } from '~/styledComponents';

interface IInputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput = ({ value, onChange }: IInputProps) => {
    return <>
        <Label>이메일</Label>
        <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={value}
            onChange={onChange}
            error={false}
            onBlur={null}
            ref={null} />
    </>
}

export const NameInput = ({ value, onChange }: IInputProps) => {
    return <>
        <Label>이름</Label>
        <Input
            type="text"
            placeholder="이름을 입력해주세요"
            value={value}
            onChange={onChange}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

export const NicknameInput = ({ value, onChange }: IInputProps) => {
    return <>
        <Label>닉네임</Label>
        <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={value}
            onChange={onChange}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

export const PasswordInput = ({ value, onChange }: IInputProps) => {
    return <>
        <Label>비밀번호</Label>
        <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={value}
            onChange={onChange}
            error={true}
            onBlur={null}
            ref={null} />
    </>
}

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  ${(p) =>
        p.error &&
        `
    border-color: ${p.theme.color.error} !important;
  `};
`

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

export const JoinButton = styled.button`
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