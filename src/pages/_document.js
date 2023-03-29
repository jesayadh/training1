import { Html, Head, Main, NextScript } from "next/document";
import { Container } from "react-bootstrap";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container>
          <Main />
          <NextScript />
        </Container>
      </body>
    </Html>
  );
}
