import { AppProps } from "next/app";
import Head from "next/head";

// Yellow
import "../src/css/global.css";
import { Wrapper } from "../src/components/layout/Wrapper";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lembaga Penyedia Jasa Penyusun (LPJP) AMDAL bersertifikat</title>
        <meta
          name="description"
          content="Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia, Greenfield Environment Solution akan membantu Anda untuk menerbitkan izin lingkungan hidup dengan mudah dan praktis."
        />
        <meta name="author" content="Fadhil Muhammad" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://ik.imagekit.io/lgntlo62o6w/Group_11_lVka9Q-gk5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644226677630"
        />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Lembaga Penyedia Jasa Penyusun (LPJP) AMDAL bersertifikat"
        />
        <meta property="og:url" content="https://www.ges-consultant.co.id/" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/lgntlo62o6w/IMG20190201163214_kd-SsVyLJJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644154886629"
        />
        <meta
          property="og:description"
          content="Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia, Greenfield Environment Solution akan membantu Anda untuk menerbitkan izin lingkungan hidup dengan mudah dan praktis."
        />
        <meta
          property="business:contact_data:street_address"
          content="Jl. Raya Tj. Barat No. 07"
        />
        <meta
          property="business:contact_data:locality"
          content="Jakarta Selatan"
        />
        <meta
          property="business:contact_data:region"
          content="Daerah Khusus Ibukota Jakarta"
        />
        <meta property="business:contact_data:postal_code" content="12510" />
        <meta
          property="business:contact_data:country_name"
          content="Indonesia"
        />
      </Head>

      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}
