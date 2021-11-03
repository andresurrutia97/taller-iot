import { Card } from 'react-bootstrap';

const CustomCard = ({ name, username, email }) => (
  <Card style={{ width: '100%', height: '100%' }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{username}</Card.Subtitle>
      <Card.Text>{email}</Card.Text>
    </Card.Body>
  </Card>
);

export default CustomCard;
