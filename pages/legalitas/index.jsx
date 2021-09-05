import Head from "next/head";
import styles from "./Legalitas.module.scss";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import legalitas from "../../assets/img/legalitas.svg";

import ceklis from "../../assets/img/ceklis2.svg";
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
      <Row className={styles.row1}
      >
        <Col md={5} className={styles.col}>
          <h1 className={styles.h1}>
            Legalitas <span style={{ color: "blue" }}>Usaha</span>
          </h1>
          <h3 className={styles.h3}>
            Pelayanan{" "}
            <span style={{ fontWeight: "bold" }}>
              Tercepat, Terbaik, dan Terpercaya{" "}
            </span>
            Dalam pembuatan legalitas usaha baik dalam bentuk PT / CV / PMA /
            Koperasi / Yayasan / Perkumpulan / Firma.
          </h3>
        </Col>
        <Col md={7} style={{ textAlign: "right" }}>
          <Image src={legalitas} alt="Contract" width={755} height={468} />
          {/* <Legalitas width={755} height={468}/> */}
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#e4eefc", height: "2000px" }}>
        <Row style={{ height: "50px", textAlign: "center" }}>
          <h2 className={styles.h2}
          >
            Pilih <span style={{ color: "blue" }}>Paket Pendirian </span>Anda
          </h2>
          <h4 className={styles.h4}>
            Pilih paket pendirian anda dengan harga yang sangat terjangkau
          </h4>
          <hr size="1" className={styles.hr1} />


          <Row style={{ paddingLeft:"110px",paddingRight:"110px",paddingTop:"35px"}}>
            <Col md={4}>
              <Card className={styles.card}>
                <Card.Body>
                <Row style={{minHeight:"400px", marginLeft:"auto", marginRight:"auto"}}>
                  <Card.Title style={{paddingTop:"28px",marginBottom:"-10px", fontSize:"24px", fontWeight:"700"}}>IDR 7 JT</Card.Title>
                  <Card.Subtitle className="mb-2" style={{fontSize:"22px", fontWeight:"400"}}>Pendirian PT Kecil</Card.Subtitle>
                  
                  <hr size="1" className={styles.hrCard}/>
                      <Row  style={{ textAlign: "right", fontSize:"14px", fontWeight:"400", marginBottom:"-25px", marginLeft:"auto", marginRight:"auto"}}> 
                        <Col md={2}>
                          <Image src={ceklis} alt="ceklis" width={24} height={24}/>
                          {/* <Ceklis className={styles.iconColorCard}/> */}
                        </Col>
                        <Col md={10}>
                        <p style={{textAlign:"left"}}>Akta Perseroan dari Notaris</p>
                        </Col>
                      </Row>
                      <Row  style={{ textAlign: "right", fontSize:"14px", fontWeight:"400", marginBottom:"-25px", marginLeft:"auto", marginRight:"auto"}}> 
                        <Col md={2}>
                          <Image src={ceklis} alt="ceklis" width={24} height={24}/>
                          {/* <Ceklis className={styles.iconColorCard}/> */}
                        </Col>
                        <Col md={10}>
                        <p style={{textAlign:"left"}}>Akta Perseroan dari Notaris</p>
                        </Col>
                      </Row>
                      <Row  style={{ textAlign: "right", fontSize:"14px", fontWeight:"400", marginLeft:"auto", marginRight:"auto"}}> 
                        <Col md={2}>
                          <Image src={ceklis} alt="ceklis" width={24} height={24}/>
                          {/* <Ceklis className={styles.iconColorCard}/> */}
                        </Col>
                        <Col md={10}>
                        <p style={{textAlign:"left"}}>Akta Perseroan dari Notaris</p>
                        </Col>
                      </Row>
                    
                  <Button className="align-self-end" style={{color:"#1C04FC", backgroundColor:"white", border:"0", borderRadius:"15px", width:"160px", height:"58px", fontWeight:"600", fontSize:"15px", verticalAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
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
