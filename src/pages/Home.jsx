import React from "react";
import { Container, Foto, Yazilar,Willkommen, Freelance, WebTasarimi } from "../Style/HomeStyle";
import FotoHome from "../assets/FOTO.jpg";

const Home = () => {
  return (
    <Container>
      <Foto>
        <img
          src={FotoHome}
          alt=""
          style={{ position: "absolute", height: "100vh", width: "100vw" }}
        />
      </Foto>
      <Yazilar>
        <Willkommen>Willkommen!</Willkommen>
        <Freelance> Freelance Web Design</Freelance>
        <WebTasarimi>
          Mobil cihaz uyumlu web tasarımı, SEO, grafik tasarımı ve Wordpress
          işlerinizi profesyonellere bırakın.
        </WebTasarimi>
      </Yazilar>
    </Container>
  );
};

export default Home;
