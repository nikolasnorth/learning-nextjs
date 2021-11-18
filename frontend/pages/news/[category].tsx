import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {ParsedUrlQuery} from "querystring";

interface Props {
  articles: any;
  category: string;
}

interface PropsContext extends ParsedUrlQuery {
  category: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext<PropsContext>): Promise<GetServerSidePropsResult<Props>> {
  const category = context.params?.category || "";
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?category=${category}`);
  const data = await res.json();
  return {
    props: {
      articles: data,
      category: category,
    }
  };
}

export default function CategoryPage({articles, category}: Props) {
  return (
    <>
      <h1>Showing news for <i>{category}</i></h1>
      {articles?.map((article: any) => {
        return (
          <div key={article.id}>
            <h2>{article.id} {article.title}</h2>
            <p>{article.body}</p>
          </div>
        );
      })}
    </>
  );
}
