import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div >
            <h2 className="font-extrabold text-3xl mb-3"> 
            Post:{posts.length} </h2>
            <div className="font-bold text-xl grid grid-cols-1 
            lg:grid-cols-3 gap-3 ">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;