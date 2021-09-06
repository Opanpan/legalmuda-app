import Head from "next/head";
import styles from "./Legalitas.module.scss";
import { Col, Container, Row, Card, Button,ListGroup, ListGroupItem } from "react-bootstrap";
import Image from "next/image";
import Legalitas from "../../assets/img/legalitas.svg";

import Ceklis from "../../assets/img/ceklis2.svg";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  const pageName = router.pathname;
  return (
    <>
    <Head>
    <title>Create Next Apps</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Header pageName={pageName} />
  
    <Container className={styles.container}>
      <Row className={styles.row1}>
        <Row style={{position:"relative", height:"200px"}}>
        <div style={{position:"absolute", width:"500px"}}>
          <h1 className={styles.h1}>
            Legalitas <span style={{ color: "blue" }}>Usaha</span>
          </h1><br></br>
          <h3 className={styles.h3}>
            Pelayanan{" "}
            <span className={styles.fontBold}>
              Tercepat, Terbaik, dan Terpercaya{" "}
            </span>
            Dalam pembuatan legalitas usaha baik dalam bentuk PT / CV / PMA /
            Koperasi / Yayasan / Perkumpulan / Firma.
          </h3>
        </div>
          <div style={{ position:"absolute" , width:"755px", left:"430",top:"-45px", float:"right"}}>
          {/* <Col md={7} style={{ textAlign: "right" }}> */}
          {/* <Image src={legalitas} alt="Contract" width={755} height={468} /> */}
            <Legalitas width={755} height={468}/>
          {/* </Col> */}
          </div>
        </Row>
      </Row>
      <Row style={{ backgroundColor: "#e4eefc", height: "2000px"}}>

        <Row style={{ height: "50px", textAlign: "center" }}>
          <Row style={{ marginLeft:"auto", marginRight:"auto",}}>
            <h2 className={styles.h2}
            >
              Pilih <span style={{ color: "blue" }}>Paket Pendirian </span>Anda
            </h2>
            <h4 className={styles.h4}>
              Pilih paket pendirian anda dengan harga yang sangat terjangkau
            </h4>
            <hr size="1" className={styles.hr1} />
          </Row>

          <Row style={{ paddingLeft:"110px",paddingRight:"110px", height:"600px", paddingTop:"40px"}}>
            <Col md={4}>
              <Card className={styles.card}>
                <Card.Body>
                <Row style={{ marginLeft:"auto", marginRight:"auto", position:"absolute", left:"0", right:"0"}}>
                  <Row style={{marginLeft:"auto", marginRight:"auto", height:"150px"}}>
                    <Card.Title  className={styles.titleCard}>IDR 7 JT</Card.Title>
                    <Card.Subtitle className={styles.subtitleCard}>Pendirian PT Kecil</Card.Subtitle>
                    <hr size="1" className={styles.hrCard}/>
                  </Row>
                  <Row style={{marginLeft:"auto", marginRight:"auto", height:"200px", marginTop:"-15px"}}>
                      <ListGroup>
                        <ListGroup.Item className={styles.listItem}>
                          <Row  className={styles.rowItem}> 
                            <Col md={2}>
                              <Ceklis className={styles.iconColorCard}/>
                            </Col>
                            <Col md={10}>
                              <p style={{textAlign:"left"}}>Akta Perseroan dari Notaris</p>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className={styles.listItem}>
                          <Row   className={styles.rowItem}> 
                            <Col md={2}>
                              <Ceklis className={styles.iconColorCard}/>
                            </Col>
                            <Col md={10}>
                              <p style={{textAlign:"left"}}>Akta Perseroan dari Notaris</p>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className={styles.listItem}>
                          <Row   className={styles.rowItem}> 
                            <Col md={2}>
                              <Ceklis className={styles.iconColorCard}/>
                            </Col>
                            <Col md={10}>
                              <p style={{textAlign:"left"}}>Akta Perseroan dari Notaris</p>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                  </Row>
                  <Button className={styles.buttonCard}>
                    Hubungi Kami
                    </Button>
                </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Row>
      </Row>
    </Container>
    </>
  );
}
