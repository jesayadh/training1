import Cards from "@/components/cards";
import Router  from "next/router";
import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

export default class ArticlePage extends React.Component {
  render() {
    return (
      <>
        <h1>Articles</h1>
        <Button onClick={() => Router.back()}>Go Back</Button>
        <Cards />
      </>
    );
  }
}
