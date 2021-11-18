import {GetStaticProps, GetStaticPropsContext, GetStaticPropsResult} from "next";
import Link from "next/link";

interface Props {
  posts: any;
}

export async function getStaticProps({params}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    }
  };
}

export default function PostsPage({posts}: Props) {
  if (!posts) {
    return <>No posts.</>;
  }
  return (
    <>
      <h1>All posts:</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          {/* When a child node is not an anchor tag, you must set passHref */}
          <Link href={`posts/${post.id}`} passHref={true}>
            <h2>{post.id}. {post.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
