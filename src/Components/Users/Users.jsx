import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    //state --> data
    //state --> loader
    //use effect 
    //fetch ---> state set --> set state
    const users =  useLoaderData();
    console.log(users);
    return (
        <div>
            <h2 className="font-bold text-amber-800 text-xl mb-2 ">
                Our Users: {Users.length}</h2>
            <p className="text-amber-800 font-semibold text-2xl mb-5">
                Fantastic And Polite Users</p>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;