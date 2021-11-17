import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {ParsedUrlQuery} from "querystring";

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
  return {
    props: {
      post: data,
    }
  };
}

// Retrieves data for static pages at build time.
export async function getStaticPaths(): Promise<GetStaticPathsResult<Paths>> {
  return {
    paths: [
      {params: {postId: '1'}},
      {params: {postId: '2'}},
      {params: {postId: '3'}},
    ],
    fallback: false,
  };
}

export default function Post({post}: Props) {
  return (
    <>
      <h2>{post.id} {post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
