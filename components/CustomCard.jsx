import { Col, Row, Button, Card } from "react-bootstrap";
import Ceklis from "../assets/img/ceklis.svg";
import styles from "./CustomCard.module.scss";
import urlencode from "urlencode";

export default function CustomCard(props) {
  const text = urlencode(`${props.text}`, "gbk");
  return (
    <Card className={`${styles.customCard} mx-5`}>
      <Card.Body>
        <Card.Title>
          <h2>{props.price}</h2>
          <h3 style={{ color: props.color }}>
            <span className="fontBold">{props.name}</span>
          </h3>
          <hr size="1" className={styles.lineCard} />
        </Card.Title>
        {props.packetItem.map((item, i) => {
          return (
            <Row key={i} style={{ marginTop: "5px" }}>
              <Col className="col-auto">
                <Ceklis className={styles.iconCeklis} />
              </Col>
              <Col>{item.item}</Col>
            </Row>
          );
        })}
      </Card.Body>
      <div
        style={{ backgroundColor: "none" }}
        className={`d-flex justify-content-center ${styles.footerCard}`}
      >
        <a href={`https://wa.me/6281296480098?text=${text}`}>
          <Button bsPrefix="super-btn" className={styles.btnContactUs}>
            Hubungi Kami
          </Button>
        </a>
      </div>
    </Card>
  );
}
