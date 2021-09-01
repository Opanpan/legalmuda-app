import Head from 'next/head'
import Link from 'next/link'
import style from '../legalitas/styleLegalitas.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import legalitas from '//Bisnis/legal-muda-app/assets/img/legalitas.svg'

export default function Home() {
  return (
      <Container style={{maxWidth:"1440px"}}>
        <Head>
          <title>Create Next Apps</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Body */}
          <Row style={{paddingTop:"100px", paddingBottom:"150px",paddingLeft:"110px", paddingRight:"110px"}}>
            <Col md={5} style={{justifyContent:"center", marginTop:"100px"}}>
              <h1 style={{fontSize:"61px", fontWeight:"700"}}>
              Legalitas <span style={{color:"blue"}}>Usaha</span>
              </h1>
              <h3 style={{fontSize:"22px", fontWeight:"300"}}>
              Pelayanan <span style={{fontWeight:"bold"}}>Tercepat, Terbaik, dan Terpercaya </span>
              Dalam pembuatan legalitas usaha baik dalam bentuk PT / CV / PMA / Koperasi / Yayasan / Perkumpulan / Firma.
              </h3>
            </Col>
            <Col md={7} style={{textAlign:"right"}}>
              <Image
                src={legalitas}
                alt="Contract"
                width={755}
                height={468}
              />
            </Col>
          </Row>

          <Row style={{backgroundColor:"#d2e4f9", height:"500px"}}>
            <Row style={{height:"50px", textAlign:"center"}}>
              <h2 style={{fontSize:"45px", fontWeight:"700", paddingTop:"60px",paddingBottom:"20px"}}>
                  Pilih <span style={{color:"blue"}}>Paket Pendirian </span>Anda
              </h2>
              <h4 className={style.h4}>
              Pilih paket pendirian anda dengan harga yang sangat terjangkau
              </h4>
              <hr size="1" className={style.hr1}/>
            </Row>
              
          </Row>

      </Container>
  )
}
