
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div className="my-3">
            <Header></Header>
            {
                navigation.state === 'loading'?
                <p className="text-5xl font-bold mt-3">Loading...</p> : 
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
             {/* <h2>This is the home component</h2> */}
             {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Home;