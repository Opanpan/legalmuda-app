import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./Footer.module.scss";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";

export default function Footer() {
  return (
    <Container fluid style={{ padding: "3%" }}>
      <Row>
        <Col className={`col-auto ${styles.Footer}`}>
          <h3 style={{ marginBottom: "24px" }} className="fontBold">
            Head Office
          </h3>
          <h3>
            18 Office Park Building, 12th Floor Unit A & H Jl. Tb Simatupang
            Kav. 18
          </h3>
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
        <Col className={`col-auto`} style={{ marginTop: "40px" }}>
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
        <Col className={`col-auto ${styles.Footer}`}>
          <h3 className="fontBold" style={{ marginBottom: "24px" }}>
            Follow us
          </h3>
          <Row>
            <Col className="col-auto">
              <UseAnimations animation={facebook} size={30} />
            </Col>
            <Col className="col-auto">
              <UseAnimations animation={instagram} size={30} />
            </Col>
            <Col className="col-auto">
              <UseAnimations animation={twitter} size={30} />
            </Col>
          </Row>
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
