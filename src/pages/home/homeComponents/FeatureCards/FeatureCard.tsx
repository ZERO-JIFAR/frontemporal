import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  text: string;
  image: string;
}
function FeatureCard(props: Props) {
  return (
    <Card style={{ width: "40vh" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
