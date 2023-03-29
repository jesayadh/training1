import React from "react";
import { Button, Card } from "react-bootstrap";

export default class SingleArticlePage extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Header as="h5">Single Article</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
