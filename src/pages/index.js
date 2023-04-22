import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "../../components/grid";
import Header from "../../components/header";



export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | QR code component</title>
        <link rel="icon" sizes="32x32" href="favicon-32x32.png"></link>
      </Head>
        
        <Header />
       
        <main>
        <Grid />
      </main>
    </>
  );
}
