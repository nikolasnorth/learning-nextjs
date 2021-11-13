import {useRouter} from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const id = Number(router.query.id);
  return <h1>Details about product {id}.</h1>;
}
