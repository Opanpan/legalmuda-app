import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Branding from "../../assets/img/Page Branding Usaha 1.png";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomCard from "../../components/CustomCard";
import DataProductBranding from "../../data/dataProdukBranding.json";

export default function Home() {
  const router = useRouter();
  const pageName = router.pathname;

  return (
    <>
      <Head>
        <title>Legal Muda. Branding Usaha</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Branding Usaha" />
        <meta name="keywords" content="" />
        <meta name="author" content="Legal Muda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageName={pageName} />
      <Container fluid className="pageContainer">
        {/* ------------------------ FIRST CONTENT ------------------------ */}
        <Row
          className="d-flex justify-content-center"
          style={{ height: "95vh" }}
        >
          <Col className="col-auto  align-self-center">
            <div className="firstLeftContent">
              <h1>
                Branding <span style={{ color: "blue" }}>Usaha</span>
              </h1>
              <br></br>
              <h3>
                Siapkan <span className="fontBold">Kebutuhan Utama </span>
                perusahaan anda, untuk memasuki era digital serba cepat.
              </h3>
            </div>
          </Col>
          <Col className="col-auto firstRightContent justify-content-center align-self-center">
            <Image src={Branding} alt="Branding Usaha Image" />
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
            {DataProductBranding.map((item, i) => {
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
