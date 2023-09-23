
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="my-3">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
             {/* <h2>This is the home component</h2> */}
             {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Home;