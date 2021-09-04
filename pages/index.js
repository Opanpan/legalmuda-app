import Head from "next/head";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const pageName = router.pathname;
  return (
    <>
      <Container fluid className="p-0">
        <Head>
          <title>Legal Muda</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header pageName={pageName} />
        <h1>Home Page</h1>
      </Container>
    </>
  );
}
