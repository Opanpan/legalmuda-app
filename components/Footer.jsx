import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";

export default function Footer() {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col className={`col-auto ${styles.Footer}`}>
          <h3 style={{ marginBottom: "24px" }} className="fontBold">
            Head Office
          </h3>
          <h3>
            Bukit Pamulang Indah Blok G/8 No.6 Tangerang Selatan, Pamulang 13520
          </h3>
          <Row style={{ marginTop: "18px" }}>
            <Col className="col-auto">
              <h4 className={`fontBold ${styles.footerItem}`}>Phone</h4>
              <h4 className={`fontBold ${styles.footerItem}`}>Email</h4>
            </Col>
            <Col>
              <h4 className={styles.footerItem}>+62 9999999</h4>
              <h4 className={styles.footerItem}>fanalriansyah@gmail.com</h4>
            </Col>
          </Row>
        </Col>
        <Col className={`col-auto ${styles.Footer}`}>
          <h3 className="fontBold" style={{ marginBottom: "24px" }}>
            Our Service
          </h3>
          <h3>Legalitas Usaha</h3>
          <h3>Virutal Office</h3>
          <h3>Branding Usaha</h3>
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
