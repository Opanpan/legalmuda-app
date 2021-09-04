import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header(props) {
  const [isClick, setIsClick] = useState();
  const [getId, setGetId] = useState();

  useEffect(() => {
    setGetId(props.pageName);
    setIsClick(`${styles.navbarClicked}`);
  }, []);

  const hoverHeader = (e) => {
    console.log(e.target.id);
    if (e.target.id !== props.pageName) {
      setIsClick("");
    }
  };

  const unHoveHeader = () => {
    setGetId(props.pageName);
    setIsClick(`${styles.navbarClicked}`);
  };

  return (
    <Container fluid className={`p-0 ${styles.navbarPosition}`}>
      <nav className="navbar navbar-expand-lg">
        <div className={`${styles.navbarRRQ} ${styles.red} `}>
          <Link href="/">
            <a
              id="/"
              onMouseEnter={hoverHeader}
              onMouseLeave={unHoveHeader}
              className={getId === "/" ? isClick : ""}
            >
              Home
            </a>
          </Link>
          <Link href="/artikel">
            <a
              id="/artikel"
              onMouseEnter={hoverHeader}
              onMouseLeave={unHoveHeader}
              className={getId === "/artikel" ? isClick : ""}
            >
              Artikel
            </a>
          </Link>
          <Link href="/legalitas">
            <a
              id="/legalitas"
              onMouseEnter={hoverHeader}
              onMouseLeave={unHoveHeader}
              className={getId === "/legalitas" ? isClick : ""}
            >
              Legal Muda Services
            </a>
          </Link>
        </div>
      </nav>
    </Container>
  );
}
