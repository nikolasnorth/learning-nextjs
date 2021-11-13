import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  function handleClick() {
    console.log("Placing your order...");
    router.push("/products").then();
    // or
    // router.replace("/products");  // will clear the stack and push /products
  }

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
      <button onClick={handleClick}>
        Place Order
      </button>
    </>
  );
}
