import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className="mx-auto w-25">
        <h1>Please Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              name="name"
              required
              placeholder="Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="email"
              name="photo"
              
              placeholder="Yout photo url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept terms and codtions" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Form.Text className="text-secoundary">
         All Ready have an accout please <Link to="/login">Login</Link>
        </Form.Text> <br />
        <Form.Text className="text-danger">
          danger
        </Form.Text> <br />
        <Form.Text className="text-success">
          success
        </Form.Text>
      </Container>
    );
};

export default Register;