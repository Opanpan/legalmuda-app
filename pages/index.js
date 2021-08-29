import Head from 'next/head'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import legalitas from '../assets/img/legalitas.svg'
import legalitasPage from '../pages/legalitas/legalitasPage'

export default function Home() {
  return (
    <>
      <Container fluid>
        <Head>
          <title>Create Next Apps</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Link href="/legalitas/legalitasPage">
      <a>test</a>
      </Link>

      </Container>
      </>
  )
}
