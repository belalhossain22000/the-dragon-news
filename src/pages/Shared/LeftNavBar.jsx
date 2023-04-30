import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInshot from "../Home/NewsCard/EditorsInshot";

const LeftNavBar = () => {
  const [cetegorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://the-dragon-news-server-fuz036mgu-belalhossain22000.vercel.app/cetegorys")
      .then((res) => res.json())
      .then((data) => setCategorys(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {cetegorys.map((cetegory) => (
        <p key={cetegory.id}>
          <Link
            to={`/cetegory/${cetegory.id}`}
            className="text-decoration-none"
          >
            {cetegory.name}
          </Link>
        </p>
      ))}
      <EditorsInshot></EditorsInshot>
    </div>
  );
};

export default LeftNavBar;
