/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const News = ({ news }) => {
    // console.log(news);
    const { title, image_url,details, _id } = news
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 
                        ? <p>{details.slice(0, 200)} <Link 
                        to={`/news/${_id}`}
                        className="text-blue-700 font-bold">read more...</Link> </p>
                        :
                        <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default News;