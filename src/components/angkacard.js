import { CardGroup } from "react-bootstrap";
import ArticleCard from "./card";

export default function AngkaCard({ dataArticle }) {
  return (
    <>
      {dataArticle.map((e) => (
        <ArticleCard
          title={e.title}
          text={e.text}
          footer={e.footer}
        ></ArticleCard>
      ))}
    </>
  );
}
