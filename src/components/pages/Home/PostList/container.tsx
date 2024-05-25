import { IPost } from "~/types/post";
import PostList from "./PostList";

const Container = () => {

    const posts: IPost[] = [
        { "id": 1, "uid": 1, "nickname": "user1", "email": "user1@gmail.com", "title": "title1", "body": "body1" },
        { "id": 2, "uid": 2, "nickname": "user2", "email": "user2@gmail.com", "title": "title2", "body": "body2" },
        { "id": 3, "uid": 1, "nickname": "user3", "email": "user1@gmail.com", "title": "title3", "body": "body3" },
        { "id": 4, "uid": 2, "nickname": "user2", "email": "user2@gmail.com", "title": "title4", "body": "body4" }
    ]

    return <PostList posts={posts} />
}

export default Container