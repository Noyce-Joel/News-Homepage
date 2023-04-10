import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | QR code component</title>
        <Link
          rel="icon"
          sizes="32x32"
          href="../images/favicon-32x32.png"
        ></Link>
      </Head>
      <div>
        <div className="container">
          
            <img
            src="../images/image-qr-code.png" alt=""
            />
            <h1>Improve your front-end skills by building projects</h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level{" "}
            </p>
          </div>
        </div>
     
    </div>
  );
}
