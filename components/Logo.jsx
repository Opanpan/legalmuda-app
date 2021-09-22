import { Container, Row, Col } from "react-bootstrap";
import LogoLegalMuda from "../assets/img/Logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image src={LogoLegalMuda} quality={100} />
        </Col>
      </Row>
    </Container>
  );
}
