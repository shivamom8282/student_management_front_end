import Form from 'react-bootstrap/Form';
import React from 'react'
function Form1() {

  return (
    <>
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>age</Form.Label>
        <Form.Control type="email" placeholder="age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>course</Form.Label>
        <Form.Control type="email" placeholder="course" />
      </Form.Group>
      <input type="submit" />
      
    </Form>
    </>
  );
}
export default Form1;