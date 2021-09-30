import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./Footer.module.scss";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";
import Logo from "./Logo";
import LogoWhatsapp from "../assets/img/logo-whatsapp 1.png";
import Image from "next/image";

export default function Footer() {
  return (
    <Container fluid style={{ padding: "3%" }}>
      <Row className="d-flex justify-content-between">
        <Col className={`col-auto ${styles.Footer}`}>
          <h3 style={{ marginBottom: "24px" }} className="fontBold">
            Head Office
          </h3>
          <h3>18 Office Park Building, Jl. Tb Simatupang Kav. 18</h3>
          <Row style={{ marginTop: "18px" }}>
            <Col className="col-auto">
              <h4 className={`fontBold ${styles.footerItem}`}>Phone</h4>
              <h4 className={`fontBold ${styles.footerItem}`}>Email</h4>
            </Col>
            <Col>
              <h4 className={styles.footerItem}>+62 812 9648 0098</h4>
              <h4 className={styles.footerItem}>sales.legalmuda@gmail.com</h4>
            </Col>
          </Row>
        </Col>
        <Col
          className={`col-auto ${styles.footerService}`}
          style={{ marginTop: "40px" }}
        >
          <h3 className="fontBold" style={{ marginBottom: "24px" }}>
            Our Service
          </h3>
          <Link href="/legalitas">
            <h3 className={styles.serviceItem}>Legalitas Usaha</h3>
          </Link>
          <Link href="/virtual-office">
            <h3 className={styles.serviceItem}>Virtual Office</h3>
          </Link>
          <Link href="/branding-usaha">
            <h3 className={styles.serviceItem}>Branding Usaha</h3>
          </Link>
        </Col>
        <Col
          className={`col-auto `}
          style={{ marginTop: "40px", width: "200px" }}
        >
          <h3 className="fontBold" style={{ marginBottom: "24px" }}>
            Follow us
          </h3>
          <Row>
            <Col className="col-auto">
              <Link href="https://www.facebook.com/LegalMuda-109969094773629">
                <a>
                  <UseAnimations animation={facebook} size={30} />
                </a>
              </Link>
            </Col>
            <Col className="col-auto">
              <Link href="https://www.instagram.com/legalmuda_com/">
                <a>
                  <UseAnimations animation={instagram} size={30} />
                </a>
              </Link>
            </Col>
            <Col className="col-auto">
              <Link href="https://twitter.com/legalmudacoid">
                <a>
                  <UseAnimations animation={twitter} size={30} />
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col className={`col-auto ${styles.footerPromo}`}>
          <h3 className="fontBold" style={{ marginBottom: "24px" }}>
            Promo Menarik
          </h3>
          <a
            className={`${styles.linkWa}`}
            href={`https://wa.me/6281296480098?text=Promo hari ini ada apa saja?`}
          >
            <div
              className={`${styles.waContainer} d-flex justify-content-center align-items-center`}
            >
              <Row>
                <Col className="col-auto p-0">
                  <Image src={LogoWhatsapp} />
                </Col>
                <Col className="d-flex  align-items-center">
                  <h2 style={{ color: "white" }} className="fontLight">
                    Hubungi Kami
                  </h2>
                </Col>
              </Row>
            </div>
          </a>
          <h3 className={styles.footerItem}>
            Dapatkan informasi tentang promo menarik tentang Layanan Legalitas
            atau Website dan informasi Mengenai Bisnis Lainnya
          </h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <h4>
            <span className="fontLight">
              Copyright 2021. LegalMuda. All rights resrved
            </span>
          </h4>
        </Col>
      </Row>
    </Container>
  );
}
