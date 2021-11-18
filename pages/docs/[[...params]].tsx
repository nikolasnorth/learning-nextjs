import {useRouter} from "next/router";

export default function Doc() {
  const router = useRouter();
  const {params = []} = router.query;

  if (params.length === 2) {
    return <h1>Viewing docs for {params.at(0)} version {params.at(1)}.</h1>;
  } else if (params.length === 1) {
    return <h1>Viewing docs for {params.at(0)}.</h1>
  } else {
    return <h1>Docs Home Page</h1>;
  }
}
