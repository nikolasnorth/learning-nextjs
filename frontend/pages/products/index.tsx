import Link from "next/link";

interface ProductsProps {
  productId: number;
}

export default function Products({productId = 100}: ProductsProps) {
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>  {/* link to external websites by using the <a> tag */}
          </Link>
        </li>
        <li>
          <Link href={"/products/1"}>
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href={"/products/2"} replace={true}>  {/* replace clears the history stack and sends the user back to the homepage */}
            <a>Product 2</a>
          </Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>
            <a>Product {productId.toString()}</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
