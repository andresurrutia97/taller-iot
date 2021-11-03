import { Form, Button } from 'react-bootstrap';

const LogIn = ({ logIn }) => (
  <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <Form className="border rounded p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={logIn}>
        LogIn
      </Button>
    </Form>
  </div>
);

export default LogIn;
