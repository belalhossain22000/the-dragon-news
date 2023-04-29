import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import EditorsInshot from "./EditorsInshot";

const News = () => {
  const News = useLoaderData();
  //   const p= useParams()
  console.log(News);
  const {
    _id,
    title,
    details,
    image_url,
    category_id,
    author,
    total_view,
    rating,
  } = News;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/cetegory/${category_id}`}>
            {" "}
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft>
              All news this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInshot></EditorsInshot>
    </div>
  );
};

export default News;
