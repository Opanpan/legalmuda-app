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

  const [scrollPosition, setScrollPosition] = useState(0);

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

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className={`p-0 ${styles.navbarPosition} `}>
      <nav
        className={`navbar navbar-expand-lg ${
          scrollPosition > 0
            ? styles.navbarBackgroundScroll
            : styles.navbarBackground
        } `}
      >
        <div className={`${styles.navbarLegal} `}>
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
          <Link href="/legalitas">
            <a
              id="/legalitas"
              onMouseEnter={hoverHeader}
              onMouseLeave={unHoveHeader}
              className={getId === "/legalitas" ? isClick : ""}
            >
              Legalitas
            </a>
          </Link>
          <Link href="/virtual-office">
            <a
              id="/virtual-office"
              onMouseEnter={hoverHeader}
              onMouseLeave={unHoveHeader}
              className={getId === "/virtual-office" ? isClick : ""}
            >
              Virtual Office
            </a>
          </Link>
          <Link href="/branding-usaha">
            <a
              id="/branding-usaha"
              onMouseEnter={hoverHeader}
              onMouseLeave={unHoveHeader}
              className={getId === "/branding-usaha" ? isClick : ""}
            >
              Branding Usaha
            </a>
          </Link>
        </div>
      </nav>
    </Container>
  );
}
