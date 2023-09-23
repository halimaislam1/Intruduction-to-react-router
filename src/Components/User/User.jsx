import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, email, phone } = user;
    return (
        <div className="border-2 border-l-red-500
         border-r-red-500 border-t-yellow-500 border-b-amber-300
         p-14 rounded-2xl text-xl font-bold bg-green-200">
            <h2 className="text-emerald-500 mb-3">{name}</h2>
            <p className="text-blue-500 mb-3">Email: {email} </p>
            <p className="text-blue-500 mb-3"> Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button className="bg-black text-white p-2 ml-2"> Click Me</button>
            </Link>
        </div>
    );
};

export default User;