"use client";

import Header from "@/components/Heading";
import Lists from "@/components/Lists";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";

import Logo from "@/assets/images/logo-ifrn.jpg";

export default function Home() {
  return (
    <div className="container">
      <Header
        logo={Logo}
        title="Workshop"
        subtitle="Introdução aos testes unitários em aplicações web com React, Jest &
        testing library"
        description="Nesse minicurso vamos praticar a escrita de testes unitários para
          aplicações front-end utilizando as ferramentas Jest e a Testing
          Library, através de uma aplicação React de forma simples e objetiva."
      />
      <Lists />
      <Counter description="Contador"   />
      <Footer />
    </div>
  );
}
