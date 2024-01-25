/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import "./stylesheets/MainPage.css";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiRefreshLine,
} from "react-icons/ri";
import { CgPokemon } from "react-icons/cg";

function MainPage() {
  const [search, setSearch] = useState(false);
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
          <div className="MPAdvancedBar pt-2 pb-2 row">
            <div className="col-3" onClick={() => {setSearch(!search);}}>
              Types <RiArrowDropDownLine />
            </div>
            <div className="col-3">
              Surprise Me! <RiRefreshLine />
            </div>
            <div className="col-3">
              Sort By <BiSort />
            </div>
            {search == false ? (
              <></>
            ) : (
              <>
                <div className="MPHide pt-4 pb-1">
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
        </div>
        
      </div>
      <div className="d-flex justify-content-center">
        <div className="MPList row">
          {Array.from(Array(10).keys()).map((n) => {
            return (
              <div className="MPItem col-lg-2 col-md-3 col-xs-3" key={n}>
                <a href="" className="d-flex justify-content-center">
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
                    className="MPImage"
                  />
                </a>
                <div className="MPPokeNum">#0001</div>
                <div className="MPPokeName"> Balbasaur </div>
                <div className="d-flex justify-content-center">
                  <div className="MPAbility">Grass</div>
                  <div className="MPAbility">Poison</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex  justify-content-center">
        <div className="MPLoadMore">Load more Pokémon</div>
      </div>
    </div>
  );
}

export default MainPage;
