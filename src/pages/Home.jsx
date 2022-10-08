import React from "react";
import {
  Container,
  Yazilar,
  Willkommen,
  Freelance,
  WebTasarimi,
  Img,
} from "../Style/HomeStyle";
import FotoHome from "../assets/FOTO.jpg";

const Home = () => {
  return (
    <Container>
      <Img src={FotoHome} alt="" />
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
