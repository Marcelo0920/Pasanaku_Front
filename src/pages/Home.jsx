import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HomeOption from "../components/HomeOption";
import CreateGameModal from "../components/modals/CreateGameModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    console.log("click");
    setOpenModal(!openModal);
  }

  return (
    <>
      <CreateGameModal open={openModal} onClose={() => setOpenModal(false)} />
      <Header />
      <section className="section-game">
        <Link to="/misjuegos">
          <HomeOption title={"Mis Juegos"} />
        </Link>

        <HomeOption title={"Crear Juego"} onClick={handleModal} />

        <Link to="/historialpartidas">
          <HomeOption title={"Historial de Partidas"} />
        </Link>
        <Link to="/configuracionjuegos">
          <HomeOption title={"Configuracion de Juegos"} />
        </Link>
      </section>
    </>
  );
};

export default Home;
