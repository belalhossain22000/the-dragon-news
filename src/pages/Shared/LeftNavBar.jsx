import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavBar = () => {
  const [cetegorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cetegorys")
      .then((res) => res.json())
      .then((data) => setCategorys(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {cetegorys.map((cetegory) => (
        <p key={cetegory.id}><Link className="text-decoration-none">{cetegory.name}</Link></p>
      ))}
    </div>
  );
};

export default LeftNavBar;
