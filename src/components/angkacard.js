import ArticleCard from "./card";

export default function AngkaCard({ dataArticle }) {
  console.log(dataArticle);
  return (
    <>
      {dataArticle.map((e) => (
        <ArticleCard
          title={e.title}
          url={e.url}
          text={e.text}
          footer={e.footer}
        ></ArticleCard>
      ))}
    </>
  );
}
