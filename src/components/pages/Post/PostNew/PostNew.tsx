import styled from 'styled-components';

import { PostBody } from './PostBody';
import { PostSaveButton } from './PostSaveButton';
import { PostTitle } from './PostTitle';
import * as S from './PostNew.style';

const PostNew = () => {
    return <Wrapper>
        <Page>
            <S.Groups>
                <S.Group>
                    <PostTitle />
                </S.Group>
                <S.Group>
                    <PostBody />
                </S.Group>
                <S.Group>
                    <PostSaveButton
                        type="button"
                    >
                        등록하기
                    </PostSaveButton>
                </S.Group>
            </S.Groups>
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

export default PostNew