import styled, { theme } from '~/styledComponents';

const BoardEdit = () => {
    return <Wrapper>
        <Page>
            <Groups>
                <Group>
                    <BoardTitle />
                </Group>
                <Group>
                    <BoardBody />
                </Group>
                <ButtonGroup>
                    <CancelButton
                        type="button"
                    >
                        취소
                    </CancelButton>
                    <SaveButton
                        type="button"
                    >
                        저장하기
                    </SaveButton>
                </ButtonGroup>
            </Groups>
        </Page>
    </Wrapper>
}


export const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`

export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
`

const BoardTitle = () => {

    const error: boolean = false

    return <>
        <Label>제목</Label>
        <NameInput
            type="text"
            placeholder="제목을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            onBlur={null}
            ref={null}
        />
    </>
}

const BoardBody = () => {
    return <>
        <Label>본문</Label>
        <BodyInput
            rows={6}
            placeholder="본문을 입력해주세요"
            value={null}
            onChange={null}
            error={true}
            ref={null}
            onBlur={null}
        />
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

export const SaveButton = styled.button`
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

export const Groups = styled.ul`
  padding-top: 0.5rem;
`;

export const Group = styled.li`
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

export const Label = styled.div<{ center?: boolean; pad?: number }>`
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

export const NameInput = styled.input<{ error: boolean }>`
  width: 100%;
  ${(p) =>
    p.error &&
    `
    border-color: ${p.theme.color.error} !important;
  `};
`;

export const BodyInput = styled.textarea<{ error: boolean }>`
  width: 100%;
  ${(p) =>
    p.error &&
    `
    border-color: ${p.theme.color.error} !important;
  `};
`;

export default BoardEdit