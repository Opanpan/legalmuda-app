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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Branding Usaha | Pembuatan Web Murah | Jasa Web Jabodetabek | Jasa Web Company Profile | Pembuatan Web Company Profile | Jasa Web Jakarta"
        />
        <meta name="author" content="Legal Muda" />
        <meta property="og:url" content="https://legalmuda.co.id/legalitas" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legal Muda. Branding Usaha" />
        <meta
          property="og:description"
          content="Branding Usaha | Pembuatan Web Murah | Jasa Web Jabodetabek | Jasa Web Company Profile | Pembuatan Web Company Profile | Jasa Web Jakarta"
        />

        <link rel="icon" href="/faveico.ico" />
      </Head>
      <Header pageName={pageName} />
      <Container fluid className="pageContainer">
        {/* ------------------------ FIRST CONTENT ------------------------ */}
        <Row
          className="d-flex justify-content-center"
          style={{ height: "90vh" }}
        >
          <Col className="col-auto  align-self-center">
            <div className="firstLeftContent">
              <h1>
                Branding <span style={{ color: "blue" }}>Usaha</span>
              </h1>
              <br></br>
              <h3>
                Siapkan <span className="fontBold">KEBUTUHAN UTAMA </span>
                perusahaan anda, untuk memasuki era digital serba cepat.
              </h3>
            </div>
          </Col>
          <Col className="col-auto firstRightContent justify-content-center align-self-center">
            <Image src={Branding} alt="Branding Usaha Image" quality={100} />
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
