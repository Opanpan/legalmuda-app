import styles from "./ProductCard.module.scss";
import { Row, Col } from "react-bootstrap";
import Arrow from "../../assets/img/arrow-card.svg";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <Link href={props.link}>
      <Col
        className={`${styles.card} d-flex justify-content-center align-items-center col-auto`}
      >
        <div>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              {props.img}
            </Col>
          </Row>
          <Row
            className="d-flex align-items-center justify-content-center"
            style={{ marginTop: "15px" }}
          >
            <Col className="col-auto">
              <h3 className={`fontBold ${styles.cardTitle}`}>{props.tittle}</h3>
            </Col>
            <Col className="col-auto">
              <Arrow className={styles.arrowIcon} />
            </Col>
          </Row>
        </div>
      </Col>
    </Link>
  );
}
