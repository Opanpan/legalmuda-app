import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import VirtualOfficeImage from "../../assets/img/Page Virtual Office 1.png";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomCard from "../../components/CustomCard";
import DataProductVirtualOffice from "../../data/dataProdukVirtualOffice.json";

export default function VirtualOffice() {
  const router = useRouter();
  const pageName = router.pathname;

  return (
    <>
      <Head>
        <title>Legal Muda. Virtual Office</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Virtual Office" />
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
          <Col className="col-auto align-self-center">
            <div className="firstLeftContent">
              <h1>
                Virtual <span style={{ color: "blue" }}>Office</span>
              </h1>
              <br></br>
              <h3>
                Kembangkan bisnis anda dengan{" "}
                <span className="fontBold">Lokasi yang Strategis </span>
                dan berbagai macam{" "}
                <span className="fontBold">Fasiltas Lengkap</span> dan{" "}
                <span className="fontBold">Terbaik </span>
                dari LegalMuda.com
              </h3>
            </div>
          </Col>
          <Col className="col-auto firstRightContent justify-content-center align-self-center">
            <Image src={VirtualOfficeImage} alt="Virtual Office Image" />
          </Col>
        </Row>
        {/* ------------------------ FIRST CONTENT ------------------------ */}

        {/* ------------------------ SECOND CONTENT ------------------------ */}
        <Row className="d-flex justify-content-center secondContent">
          <Row style={{ marginTop: "105px" }}>
            <Col className="d-flex justify-content-center">
              <div>
                <h2 style={{ textAlign: "center" }}>
                  Pilih <span style={{ color: "blue" }}>Virtual Office </span>
                  Anda
                </h2>
                <h4 style={{ textAlign: "center", marginTop: "35px" }}>
                  Pilih Paket Virtual Office Terbaik Untuk Kemajuan Usaha Anda
                </h4>
                <hr size="1" className="line" />
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            {DataProductVirtualOffice.map((item, i) => {
              return (
                <CustomCard
                  key={i}
                  id={item.id}
                  color={item.Color}
                  name={item.Nama}
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
