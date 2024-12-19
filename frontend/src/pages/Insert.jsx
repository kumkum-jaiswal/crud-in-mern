import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/students/studentsave";
    axios.post(api, input).then((res) => {
        alert("data save!!!");
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <>
      <h1> Insert Employee Record</h1>
      <Form className="formSize">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Employee Number:</Form.Label>
          <Form.Control type="text" name="empno" value={input.empno} onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Employee Name:</Form.Label>
          <Form.Control
            type="text"
            name="empname"
            value={input.empname}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Employee Designation:</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={input.designation}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Employee Salary:</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={input.salary}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Insert;
