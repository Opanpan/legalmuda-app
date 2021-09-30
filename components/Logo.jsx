import { Container, Row, Col } from "react-bootstrap";
import LogoLegalMuda from "../assets/img/Logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Container>
      <Row>
        <Col
          className="d-flex justify-content-center"
          style={{ margin: "50px 0 0 0" }}
        >
          <Image src={LogoLegalMuda} quality={100} alt="Legal Muda Logo" />
        </Col>
      </Row>
    </Container>
  );
}
