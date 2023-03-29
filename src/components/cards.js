import { CardGroup } from "react-bootstrap";
import ArticleCard from "./card";
import {data} from "@/data/data";

export default function Cards() {
  return (
    <>
      <CardGroup>
        {data.dataArticle.map((e) => (
          <ArticleCard
            id={e.id}
            title={e.title}
            text={e.text}
            footer={e.footer}
          />
        ))}
      </CardGroup>
    </>
  );
}
