import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HomeOption from "../components/HomeOption";
import CreateGameModal from "../components/modals/CreateGameModal";
import gameImage from "../assets/game1.jpg";
import gameImage2 from "../assets/game3.jpg";
import gameImage4 from "../assets/game4.jpg";
import gear from "../assets/gear.jpg";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    console.log("click");
    setOpenModal(!openModal);
  }

  return (
    <div className="width-85">
      <CreateGameModal open={openModal} onClose={() => setOpenModal(false)} />
      <Header />
      <section className="section-game">
        <Link to="/misjuegos">
          <HomeOption title={"Mis Juegos"} image={gameImage} />
        </Link>

        <HomeOption
          title={"Crear Juego"}
          onClick={handleModal}
          image={gameImage2}
        />

        <Link to="/historialpartidas">
          <HomeOption title={"Historial de Partidas"} image={gameImage4} />
        </Link>
        <Link to="/configuracionjuegos">
          <HomeOption title={"Configuracion de Juegos"} image={gear} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
