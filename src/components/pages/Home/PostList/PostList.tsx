import Post from "./Post"
import styled from "styled-components"
import { theme } from '~/styledComponents';
import { IPost } from "~/types/post";

interface IPostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: IPostListProps) => {

  return <>
    {posts.map(post =>
      <Post key={post.id} post={post} />
    )}
  </>
}

export const Wrapper = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    `

export default PostList