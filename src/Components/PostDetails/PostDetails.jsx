import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div className="font-bold my-4">
            <h3 className="font-extrabold text-3xl mb-3">Post Details about:{id}</h3>
            <p className="text-xl mb-3">Title:{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;