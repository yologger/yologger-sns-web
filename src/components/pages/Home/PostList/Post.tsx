import styled from 'styled-components';
import { IPost } from '~/types/post';

interface IPostProps {
    post: IPost
}

const Post = ({ post }: IPostProps) => {

    return <PostWrapper>
        <PostHeader nickname={post.nickname} email={post.email} />
        <PostTitle>TITLE: {post.title}</PostTitle>
        <PostBody>BODY: {post.body}</PostBody>
        <PostFooter>This is footer</PostFooter>
    </PostWrapper>
}

const PostHeader = ({ nickname, email }) => {
    return <>
        <div>NICKNAME: {nickname}</div>
        <div>EMAIL: {email}</div>
    </>
}

const PostWrapper = styled.div`
  width: 100%;
  background-color: orange;
  display: flex;
  /* background: ${({ theme }) => theme.color.white}; */
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px
`

export const PostTitle = styled.div`
    
`

export const PostBody = styled.div`
    
`

export const PostFooter = styled.div`
    
`


export default Post