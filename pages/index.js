import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import styles from "./Index.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import HomeImagePNG from "../assets/img/Legalitas.png";
import ProductCard from "../components/ProductCard";
import DataProduct from "../data/dataProduk";
import Image from "next/image";
import Reliability from "../assets/img/reliability 1.svg";
import Pricing from "../assets/img/pricing 1.svg";
import Professional from "../assets/img/professional 1.svg";
import useInput from "../hooks/useInput";
import urlencode from "urlencode";

export default function Home() {
  const router = useRouter();
  const pageName = router.pathname;

  const fullname = useInput("");
  const email = useInput("");
  const subject = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = urlencode(
      `Hallo saya ${fullname.value} dan email saya ${email.value}, saya ingin konsultasi tentang ${subject.value}`,
      "gbk"
    );

    window.open(`https://wa.me/6285155113647?text=${message}`);

    console.log(message);
  };

  return (
    <>
      <Head>
        <title>Legal Muda</title>
        <meta name="description" content="Legal Muda  Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageName={pageName} />
      <Container fluid className="pageContainer">
        {/* ------------------------ FIRST CONTENT ------------------------ */}
        <Row
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col className="col-auto align-self-center">
            <div className="firstLeftContent">
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
                  <a href="#konsultasi">
                    <Button
                      className={`${styles.btnKonsultasi}`}
                      bsPrefix="super-btn"
                    >
                      Free Konsultasi
                    </Button>
                  </a>
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
          <Col className="col-auto firstRightContent align-self-center">
            <Image src={HomeImagePNG} alt="Home Page Image" />
          </Col>
          {/* ------------------------ FIRST CONTENT ------------------------ */}
        </Row>
        <Row
          className="d-flex justify-content-center secondContentHome"
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
                  alt={item.alt}
                  link={item.link}
                />
              );
            })}
          </Row>
        </Row>
        <Row id="konsultasi" className="d-flex justify-content-center">
          <Col className="col-auto p-0">
            <div
              className={`${styles.kenapaLegalMuda} d-flex justify-content-center`}
            >
              <div>
                <Col className="col-auto p-0">
                  <div className={styles.kenapaLegalMudaTittle}>
                    <h3 className="fontMedium" style={{ textAlign: "center" }}>
                      <span style={{ color: "#1C04FC" }}>
                        Kenapa Harus LegalMuda.com
                      </span>
                    </h3>
                    <h2 className="fontBold" style={{ textAlign: "center" }}>
                      Legalitas Mudah Anti Ribet
                    </h2>
                  </div>
                  <Container style={{ marginTop: "50px" }}>
                    <Row>
                      <Col className="col-auto">
                        <Reliability />
                      </Col>
                      <Col>
                        <h3 className="fontMedium">
                          <span style={{ color: "#1C04FC" }}>
                            Tercepat dan Terpercaya
                          </span>
                        </h3>
                        <div className={styles.kenapaLegalMudaItem}>
                          <h4>
                            Kami mampu mendirikan usaha anda hanya dalam waktu 2
                            Hari kerja dari waktu penanda tanganan Akta selesai
                            anda lakukan.
                          </h4>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Container style={{ marginTop: "50px" }}>
                    <Row>
                      <Col className="col-auto">
                        <Pricing />
                      </Col>
                      <Col>
                        <h3 className="fontMedium">
                          <span style={{ color: "#1C04FC" }}>
                            Harga Terjangkau
                          </span>
                        </h3>
                        <div className={styles.kenapaLegalMudaItem}>
                          <h4>
                            Kami mampu mendirikan usaha anda hanya dalam waktu 2
                            Hari kerja dari waktu penanda tanganan Akta selesai
                            anda lakukan.
                          </h4>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Container style={{ marginTop: "50px" }}>
                    <Row>
                      <Col className="col-auto">
                        <Professional />
                      </Col>
                      <Col>
                        <h3 className="fontMedium">
                          <span style={{ color: "#1C04FC" }}>Profesional</span>
                        </h3>
                        <div className={styles.kenapaLegalMudaItem}>
                          <h4>
                            Kami mampu mendirikan usaha anda hanya dalam waktu 2
                            Hari kerja dari waktu penanda tanganan Akta selesai
                            anda lakukan.
                          </h4>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </div>
            </div>
          </Col>
          <Col className="col-auto p-0">
            <div
              className={`${styles.konsultasiLegalMuda} d-flex justify-content-center`}
            >
              <Col>
                <div className={styles.konsultasiLegalMudaTittle}>
                  <h2
                    className="fontBold"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Konsultasi Gratis
                  </h2>
                  <h4
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: "30px",
                    }}
                  >
                    Konsultasikan perizinan dan legalitas perusahaan anda dengan
                    kami tanpa biaya sedikitpun, kapanpun, dan dimanapun.
                  </h4>
                </div>
                <div>
                  <Container>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <Form
                          className={styles.formContainer}
                          onSubmit={handleSubmit}
                        >
                          <Form.Group
                            className={styles.formBox}
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Email"
                              required
                              className={styles.formInput}
                              {...email}
                            />
                          </Form.Group>
                          <Form.Group
                            className={styles.formBox}
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Fullname"
                              required
                              className={styles.formInput}
                              {...fullname}
                            />
                          </Form.Group>
                          <Form.Group
                            className={styles.formBox}
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Subject"
                              required
                              className={styles.formInput}
                              {...subject}
                            />
                          </Form.Group>
                          <Button
                            className={`${styles.btnSubmit}`}
                            bsPrefix="super-btn"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
