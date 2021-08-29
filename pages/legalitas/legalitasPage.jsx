import Head from 'next/head'
import Link from 'next/link'
import style from '../legalitas/styleLegalitas.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import legalitas from '//Bisnis/legal-muda-app/assets/img/legalitas.svg'

export default function Home() {
  return (
      <Container fluid>
        <Head>
          <title>Create Next Apps</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Body */}
          <Row style={{paddingTop:"50px", paddingLeft:"110px", paddingRight:"110px", paddingBottom:"150px"}}>
            <Col md={4} style={{justifyContent:"center", marginTop:"60px"}}>
              <h1 style={{fontSize:"64px", fontWeight:"700"}}>
              Legalitas <span style={{color:"blue"}}>Usaha</span>
              </h1>
              <h3 style={{fontSize:"22px", fontWeight:"300"}}>
              Pelayanan <span style={{fontWeight:"bold"}}>Tercepat, Terbaik, dan Terpercayaaa </span>
              Dalam pembuatan legalitas usaha baik dalam bentuk PT / CV / PMA / Koperasi / Yayasan / Perkumpulan / Firma.
              </h3>
            </Col>
            <Col md={8} style={{textAlign:"right"}}>
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
              <h2 style={{fontSize:"45px", fontWeight:"700", paddingTop:"60px"}}>
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
