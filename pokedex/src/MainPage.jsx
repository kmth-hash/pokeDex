/* eslint-disable no-unused-vars */
import {GiHamburgerMenu} from "react-icons/gi";
import {FaUserCircle,FaSearch} from "react-icons/fa";
import './stylesheets/MainPage.css';
import { RiArrowDropDownLine,RiArrowDropUpLine,RiRefreshLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import "./stylesheets/MainPage.css";
import { FaArrowUp } from "react-icons/fa";

function MainPage() {
  const [search, setSearch] = useState(false);
  let mybutton = document.getElementById("btnscrolltop");
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div>
      <div className="MPContainer1 d-flex ">
        <div className="MPMenuIcon">
          <GiHamburgerMenu />
        </div>
        <div className="MPTitle">
          <h3>Pokédex</h3>
        </div>
        <div className="MPLoginIcon">
          <FaUserCircle />
        </div>
      </div>
      <div className="MPContainer2">
        <div className="MPText1">Name or Number</div>
        <div className="MPSearch d-flex">
          <div>
            <input type="text" className="MPSearchText"></input>
          </div>
          <div>
            <div className="MPSearchButton">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="MPText2">
          Use Types to explore Pokémon by types!
        </div>
        <div className="MPFeature">
          <p>Search for a Pokémon by name or its National Pokédex number.</p>
        </div>
        <div className="MPAdvanced">
          <div className="MPAdvancedBar pt-2 pb-2 d-flex">
            <div onClick={() => {setSearch(!search);}}>
              Types <RiArrowDropDownLine />
            </div>
            <div>
              Surprise Me! <RiRefreshLine />
            </div>
            <div>
              Sort By <BiSort />
            </div>
          </div>
        </div>
        {search == false ? (
              <></>
            ) : (
              <>
                <div className="MPHide">
                  <div className="MPTypeWeak">
                    <div className="MPTW btn">Bug</div>
                    <div className="MPTW btn">Dark</div>
                    <div className="MPTW btn">Dragon</div>
                    <div className="MPTW btn">Electic</div>
                    <div className="MPTW btn">Fairy</div>
                    <div className="MPTW btn">Fighting</div>
                    <div className="MPTW btn">Fire</div>
                    <div className="MPTW btn">Flying</div>
                    <div className="MPTW btn">Ghost</div>
                    <div className="MPTW btn">Grass</div>
                    <div className="MPTW btn">Ground</div>
                    <div className="MPTW btn">Ice</div>
                    <div className="MPTW btn">Normal</div>
                    <div className="MPTW btn">Poison</div>
                    <div className="MPTW btn">Psychic</div>
                    <div className="MPTW btn">Rock</div>
                    <div className="MPTW btn">Steel</div>
                    <div className="MPTW btn">Water</div>
                    <br />
                    <div className="MPSubmit btn">
                      <FaSearch /> Apply
                    </div>
                    <div className="MPReset btn">
                      Reset
                    </div>
                  </div>
                  <div className="pt-3" onClick={() => {setSearch(!search);}}>
                    Hide Types<RiArrowDropUpLine />
                  </div>
                </div>
              </>
            )}
      </div>
      <div className="MPContainer4">
      <div className="container MPContainer3">
        <div className="MPList row">
          {Array.from(Array(18).keys()).map((n) => {
            return (
              <div className="MPItem col-lg-2 col-md-3 col-xs-3" key={n}>
                <a href="" className="d-flex justify-content-center">
                  <img
                    src="https://img.pokemondb.net/sprites/black-white/normal/victini.png" alt="Victini"
                    className="MPImage"
                  />
                </a>
                <div className="MPPokeNum">#000</div>
                <div className="MPPokeName"> Victini </div>
                <div className="d-flex justify-content-center">
                  <div className="MPAbility">Psychic</div>
                  <div className="MPAbility">Fire</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex  justify-content-center">
        <div className="MPLoadMore">Load more Pokémon...</div>
      </div>
      </div>
      </div>
      <div id="btnscrolltop" className="MPScrollTop"><a href="#top" className="MPA"><FaArrowUp/></a></div>
    </div>
  );
}

export default MainPage;
