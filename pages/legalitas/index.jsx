import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Legalitas from "../../assets/img/Page Legalitas 1.png";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomCard from "../../components/CustomCard";
import DataProductLegalitas from "../../data/dataProdukLegalitas.json";

export default function Home() {
  const router = useRouter();
  const pageName = router.pathname;

  return (
    <>
      <Head>
        <title>Legal Muda. Legalitas Usaha</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="legalmuda.co.id | legal muda |  Legalitas Usaha | Pembuatan PT 6 Juta | Pembuatan PT/ CV/ Akta Cuma 2 Hari | Pembuatan PT/ CV/ Akta Murah | Pembuatan PT/ CV/ Akta Jabodetabek"
        />
        <meta name="author" content="Legal Muda" />
        <meta property="og:url" content="https://legalmuda.co.id/legalitas" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legal Muda. Legalitas Usaha" />
        <meta
          property="og:description"
          content="legalmuda.co.id | legal muda |Legalitas Usaha | Pembuatan PT 6 Juta | Pembuatan PT/ CV/ Akta Cuma 2 Hari | Pembuatan PT/ CV/ Akta Murah | Pembuatan PT/ CV/ Akta Jabodetabek"
        />
        <link rel="icon" href="/faveico.ico" />
      </Head>
      <Header pageName={pageName} />
      <Container fluid className="pageContainer">
        {/* ------------------------ FIRST CONTENT ------------------------ */}
        <Row
          className="d-flex justify-content-center"
          style={{ height: "95vh" }}
        >
          <Col className="col-auto align-self-center">
            <div className="firstLeftContent">
              <h1>
                Legalitas <span style={{ color: "blue" }}>Usaha</span>
              </h1>
              <br></br>
              <h3>
                Pelayanan{" "}
                <span className="fontBold">
                  TERCEPAT, TERBAIK, DAN TERPERCAYA{" "}
                </span>
                dalam pembuatan legalitas usaha baik dalam bentuk PT / CV / PMA
                / Koperasi / Yayasan / Perkumpulan / Firma.
              </h3>
            </div>
          </Col>
          <Col className="col-auto firstRightContent justify-content-center align-self-center">
            <Image src={Legalitas} alt="Legalitas Image" quality={100} />
          </Col>
        </Row>
        {/* ------------------------ FIRST CONTENT ------------------------ */}

        {/* ------------------------ SECOND CONTENT ------------------------ */}
        <Row className="d-flex justify-content-center secondContent">
          <Row style={{ marginTop: "105px" }}>
            <Col className="d-flex justify-content-center">
              <div>
                <h2 style={{ textAlign: "center" }}>
                  Pilih <span style={{ color: "blue" }}>Paket Pendirian </span>
                  Anda
                </h2>
                <h4 style={{ textAlign: "center", marginTop: "35px" }}>
                  Pilih paket pendirian anda dengan harga yang sangat terjangkau
                </h4>
                <hr size="1" className="line" />
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            {DataProductLegalitas.map((item, i) => {
              return (
                <CustomCard
                  key={i}
                  id={item.id}
                  name={item.Nama}
                  color={item.Color}
                  price={item.Harga}
                  text={item.Text}
                  packetItem={item.PacketItems}
                />
              );
            })}
          </Row>
        </Row>
        {/* ------------------------ SECOND CONTENT ------------------------ */}
      </Container>
      <Footer />
    </>
  );
}
