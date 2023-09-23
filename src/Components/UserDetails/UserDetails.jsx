import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user
    return (
        <div>
            <h2 className="font-extrabold text-3xl mb-3">
                Details About User: {name} </h2>
            <p className="font-bold text-xl text-gray-500">
                Website: {website}</p>
               
        </div>
    );
};

export default UserDetails;