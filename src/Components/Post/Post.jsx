import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id , title, body} = post;
    return (
        <div className="border-2 border-purple-400 rounded-lg p-5">
            <h4>Post Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details </Link>
            <Link to={`/post/${id}`}> 
            <button className="bg-black text-white p-2 text-sm mt-2 "> Show Details</button>
            </Link>
            {/* <p>{body}</p> */}
        </div>
    );
};

export default Post;