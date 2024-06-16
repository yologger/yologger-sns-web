import { ChangeEvent } from 'react';
import styled, { theme } from '~/styledComponents';

interface IInputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TestInput = ({ value, onChange }: IInputProps) => {
    return <>
        <Label>Test</Label>
        <Input
            type="text"
            placeholder="test"
            value={value}
            onChange={onChange}
            error={false}
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

export const TestButton = styled.button`
      height: 3.5rem;
      width: 10rem;  
      font-size: 20px;
      font-weight: 700;
      border-radius: 2px;    
      display: flex;
      align-items: center;
      justify-content: center;     
      margin: 5px ;
      background: ${theme.color.yologgerBlue100};
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