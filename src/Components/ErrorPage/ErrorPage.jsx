import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h2 className="text-4xl mb-2 font-bold">Oops!!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && 
                <div className="my-3 text-2xl">
                    <h3 className="mb-2 ">Page not found</h3>
                    <p>Go Back where you from</p>
                    <Link to='/'>
                        <button className="bg-black text-white mt-5">
                        Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;