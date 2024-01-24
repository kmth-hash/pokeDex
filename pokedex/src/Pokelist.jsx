import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
// import './MainPage.css';
import "./stylesheets/Pokelist.css";

function Pokelist() {
  return (
    <div className="pokepage">
      <div className="MPContainer1 d-flex ">
        <div className="MPMenuIcon">
          <GiHamburgerMenu />
        </div>
        <div className="MPTitle">
          <h3>Pokedex</h3>
        </div>
        <div className="MPLoginIcon">
          <FaUserCircle />
        </div>
      </div>

      <div>
        <h3 className="text-center bg-dark text-white py-2 ">
          Pokemon Black & White
        </h3>
      </div>
      <div className="container my-3 bg-dark text-white">
        <div className="pokegrid row">
          <div className="pokeblock col-lg-2 col-md-3 col-xs-3">
            <div className="pokeImg text-center">
              <img
                src="https://img.pokemondb.net/sprites/black-white/normal/victini.png"
                alt="Victini"
                className=" img-fluid "
              />
            </div>
            <h6 className="text-center m-0">#0000</h6>
            <h4 className="text-center fw-bold m-0">Victini</h4>
            <h6 className="text-center m-0">Psychic · Fire</h6>
          </div>
          <div className="pokeblock col-lg-2 col-md-3 col-xs-3">
            <div className="pokeImg text-center">
              <img
                src="https://img.pokemondb.net/sprites/black-white/normal/victini.png"
                alt="Victini"
                className=" img-fluid "
              />
            </div>
            <h6 className="text-center m-0">#0000</h6>
            <h4 className="text-center fw-bold m-0">Victini</h4>
            <h6 className="text-center m-0">Psychic · Fire</h6>
          </div>
          {Array.from(Array(10).keys()).map((n) => {
            return (
              <div className="pokeblock col-lg-2 col-md-3 col-xs-3" key={n}>
                <div className="pokeImg text-center">
                  <img
                    src="https://img.pokemondb.net/sprites/black-white/normal/victini.png"
                    alt="Victini"
                    className=" img-fluid "
                  />
                </div>
                <h6 className="text-center m-0">#0000</h6>
                <h4 className="text-center fw-bold m-0">Victini</h4>
                <h6 className="text-center m-0">Psychic · Fire</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pokelist;
