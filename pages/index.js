import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Index.module.scss";
import Header from "./components/Header";
import { useRouter } from "next/router";
import HomeImagePNG from "../assets/img/Legalitas.png";
import ProductCard from "./components/ProductCard";
import DataProduct from "../data/dataProduk";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const pageName = router.pathname;

  return (
    <>
      <Head>
        <title>Legal Muda</title>
        <meta name="description" content="Legal Muda  Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageName={pageName} />
      <Container fluid className={`${styles.title}`}>
        <Row className="d-flex justify-content-center">
          <Col className="col-auto">
            <div className={styles.firstContent}>
              <h1>
                Bikin Perusahaan Impianmu Dalam{" "}
                <span style={{ color: "#1800FC" }}>2 Hari</span>
              </h1>
              <h3 style={{ marginTop: "20px" }}>
                Mau bikin perusahaan tapi bingung urus berkas ? LegalMuda solusi
                pembuatan PT / CV / PMA / YAYASAN
                <br />
                <span className="fontBold">
                  CEPAT , MUDAH DAN GAK PAKE RIBET
                </span>
              </h3>
              <h3 style={{ marginTop: "30px" }}>
                <span className="fontBold">CUKUP KTP dan NPWP </span>
                saja legalitas usaha anda dapat selesai dalam {""}
                <span className="fontBold">2 Hari kerja</span>
                <br />
              </h3>
              <Row
                className="d-flex align-items-center"
                style={{ marginTop: "20px" }}
              >
                <Col className="col-auto">
                  <Button
                    className={`${styles.btnKonsultasi}`}
                    bsPrefix="super-btn"
                  >
                    Free Konsultasi
                  </Button>
                </Col>
                <Col>
                  <Row className="d-flex align-items-center">
                    <Col className="col-auto">
                      <a href="#produk">
                        <span
                          className={`${styles.circle} d-flex align-items-center`}
                        >
                          <span className={styles.arrow}></span>
                        </span>
                      </a>
                    </Col>
                    <Col>
                      <h3 style={{ fontWeight: "700" }}>Pelajari Produk</h3>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col className="col-auto">
                  <div style={{ width: "63px" }}>
                    <h3 style={{ marginBottom: "0px" }}>
                      <span className="fontBold">+500</span>
                    </h3>
                    <h4>Projects Done</h4>
                  </div>
                </Col>
                <Col>
                  <div style={{ width: "63px" }}>
                    <h3 style={{ marginBottom: "0px" }}>
                      <span className="fontBold">+1000</span>
                    </h3>
                    <h4>Happy Client</h4>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className={`col-auto ${styles.imageContainer}`}>
            <Image src={HomeImagePNG} />
          </Col>
        </Row>
        <Row
          className={`d-flex justify-content-center ${styles.secondContent}`}
          id="produk"
        >
          <Col className="d-flex justify-content-center">
            <div>
              <h3>
                <span style={{ color: "#1C04FC" }} className="fontMedium">
                  Buat Perusahaan Kamu Sekarang
                </span>
              </h3>
              <h1>
                Pilih Produk Untuk{" "}
                <span style={{ color: "#1800FC" }}>Kebutuhan</span> Anda
              </h1>
            </div>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center"
          style={{ marginTop: "75px" }}
        >
          <Row
            className="d-flex justify-content-center"
            style={{ width: "1000px" }}
          >
            {DataProduct.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  id={item.id}
                  tittle={item.tittle}
                  img={item.img}
                  link={item.link}
                />
              );
            })}
          </Row>
        </Row>
      </Container>
    </>
  );
}
