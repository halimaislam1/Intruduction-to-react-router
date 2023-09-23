import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className=" border-2 border-purple-900 rounded-lg p-5 bg-amber-100">
            <h4 className="font-extrabold mb-4">Post Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details </Link>
            <Link to={`/post/${id}`}>
                <button className="bg-purple-500 text-white p-2
                text-sm mt-2 ml-2"> Show Details</button>
                <button onClick={handleShowDetails} className="mt-2 bg-gray-700 text-white">
                    Click to see details
                </button>
            </Link>
        </div>
    );
};

export default Post;