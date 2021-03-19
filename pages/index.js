import Head from "next/head";
import styles from "../styles/Home.module.css";
import QrReader from "react-qr-scanner";
import { useState, useEffect, useRef } from "react";

function Example() {
  let codeRead = useRef("");

  const [scanning, setScanning] = useState(true);
  const [qr, setqr] = useState("");
  function onScan(result) {
    console.clear();
    console.log(`Identified: ${result}`);
    console.log(result);
    if (result) {
      setScanning(false);
      codeRead = result;
      setqr(result);
    }
    // setCodeRead(result);
  }

  function onError(error) {
    console.error(error);
  }
  console.log(codeRead);
  if (scanning) {
    return (
      <QrReader
        delay={500}
        style={{
          width: 320,
          height: 240,
        }}
        onError={onError}
        onScan={onScan}
      />
    );
  } else {
    return <p className='bg-yellow-700 text-3xl'>Text: {JSON.stringify(qr.text)}</p>;
  }
}

export default function Home() {
  const [result, setResult] = useState("No result");

  const previewStyle = {
    height: 240,
    width: 320,
  };

  function handleScan(data) {
    setResult({ result: data });
  }

  function handleError(err) {
    console.error(err);
  }

  function IsBrowser() {
    if (typeof window === "undefined") {
      return null;
    }
    return <Example />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <IsBrowser />
      </main>

      <footer className={styles.footer}>
        <a href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
