import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header"
import RightSidenav from "../shared/RightSideNav/RightSidenav"
import Navbar from "../shared/Navbar/Navbar";

const NewsDetails = () => {

    const { id } = useParams()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>
                    {id}
                </div>
                <div>
                    <RightSidenav></RightSidenav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;