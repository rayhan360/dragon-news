import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h1 className="text-3xl">All Category: {categories.length}</h1>
            {
                categories.map(category => <Link
                    className="block ml-4 text-xl font-semibold"
                    to={`/category/${category.id}`}
                    key={category.id}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;