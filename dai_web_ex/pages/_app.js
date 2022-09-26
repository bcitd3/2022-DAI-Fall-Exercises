import 'semantic-ui-css/semantic.min.css'
import Head from 'next/head'
import * as React from "react";

function MyApp({ Component, pageProps }) {
<<<<<<< Updated upstream
  return <>
    <Head>
=======
 
  return  <Component {...pageProps} />

    /*{ <Head>
=======
  return <>
    <Head>

>>>>>>> Stashed changes
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
      rel="stylesheet"
      href="path/to/node_modules/normalize.css/normalize.css"
      />


    </Head>
    

    <Component {...pageProps} />
 </>
 }

export default MyApp
