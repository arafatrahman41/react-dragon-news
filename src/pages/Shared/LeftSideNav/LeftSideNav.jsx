import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold">All Categories</h2>
      {
        categories.map(category => <Link to={`./category/${category.id}`} className="block px-8 my-5 text-lg font-medium text-[#9F9F9F] hover:bg-[#E7E7E7] hover:text-[#403F3F] py-4 rounded-xl" key={category.id}>{category.name}</Link>)
      }
    </div>
  );
};

export default LeftSideNav;
