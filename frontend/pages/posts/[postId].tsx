import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {ParsedUrlQuery} from "querystring";
import {useRouter} from "next/router";

interface Props {
  post: any;
}

interface Paths extends ParsedUrlQuery {
  postId: string;
}

// Informs Next.js which pages should be statically generated at build time.
export async function getStaticProps({params}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  if (!params?.postId) {
    throw new Error("Expected params.id, but received none.");
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await res.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    }
  };
}

// Retrieves data for static pages at build time.
export async function getStaticPaths(): Promise<GetStaticPathsResult<Paths>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post: any) => {
    return {
      params: {postId: `${[post.id]}`}
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export default function Post({post}: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>{post.id} {post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
