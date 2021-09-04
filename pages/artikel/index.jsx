import Header from "../components/Header";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Head from "next/head";

export default function Artikel() {
  const router = useRouter();
  const pageName = router.pathname;
  return (
    <Container fluid className="p-0">
      <Head>
        <title>Artikel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageName={pageName} />
      <h1>Artikel Page</h1>
    </Container>
  );
}
