import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;

    console.log(postId);
    

    const handleGoBack =() =>{
        navigate(-1);
    }

    return (
        <div className="font-bold my-4">
            <h3 className="font-extrabold text-3xl mb-3">Post Details about:{id}</h3>
            <p className="text-xl mb-3">Title:{title}</p>
            <p><small>{body}</small></p>
            <button className="bg-black text-xl p-3 mt-3 text-white" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;