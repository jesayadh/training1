import Link from "next/link";
import { Card } from "react-bootstrap";

export default function ArticleCard(props) {
  return (
    <Link href={"/articles/" + props.id}>
      <Card>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.footer}</small>
        </Card.Footer>
      </Card>
    </Link>
  );
}
