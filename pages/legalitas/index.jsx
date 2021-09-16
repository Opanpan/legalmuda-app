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
        <meta name="description" content="Legalitas Usaha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageName={pageName} />
      <Container fluid className="pageContainer">
        {/* ------------------------ FIRST CONTENT ------------------------ */}
        <Row className="d-flex justify-content-center">
          <Col className="col-auto">
            <div className="firstLeftContent align-self-center">
              <h1>
                Legalitas <span style={{ color: "blue" }}>Usaha</span>
              </h1>
              <br></br>
              <h3>
                Pelayanan{" "}
                <span className="fontBold">
                  Tercepat, Terbaik, dan Terpercaya{" "}
                </span>
                Dalam pembuatan legalitas usaha baik dalam bentuk PT / CV / PMA
                / Koperasi / Yayasan / Perkumpulan / Firma.
              </h3>
            </div>
          </Col>
          <Col className="col-auto firstRightContent">
            <Image src={Legalitas} alt="Legalitas Image" />
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
