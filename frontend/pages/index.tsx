import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={"/blog"}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href={"/products"}>
            <a>Products</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
