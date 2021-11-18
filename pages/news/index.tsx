import {GetServerSideProps, GetServerSidePropsResult} from "next";

interface Props {
  articles: any;
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      articles: data,
    }
  };
}

export default function News({articles}: Props) {
  return (
    <>
      <h1>List of news articles</h1>
      {articles?.map((article: any) => {
        return (
          <div key={article.id}>
            <h2>{article.id} {article.title}</h2>
          </div>
        );
      })}
    </>
  );
}
