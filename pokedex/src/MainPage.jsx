/* eslint-disable no-unused-vars */
import {GiHamburgerMenu} from "react-icons/gi";
import {FaUserCircle,FaSearch} from "react-icons/fa";
import './stylesheets/MainPage.css';
import { RiArrowDropDownLine,RiArrowDropUpLine,RiRefreshLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import "./stylesheets/MainPage.css";
import { FaArrowUp } from "react-icons/fa";
import data from "./pokeList.json";

function MainPage() {
  const [search, setSearch] = useState(false);
  const [sort,showSort] = useState(false);
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
            <div onClick={() => {setSearch(!search),showSort(false);}}>
              Types <RiArrowDropDownLine />
            </div>
            <div onClick={() => {showSort(false),setSearch(false);}}>
              Surprise Me! <RiRefreshLine />
            </div>
            <div  onClick={() => {showSort(!sort),setSearch(false);}}>
              Sort By <BiSort />
            </div>
          </div>
        </div>
        {sort == false? (
          <></>
        ):(
        <>
        <div className="MPSort d-flex flex-row-reverse">
        <select>
            <option>Lowest number (first)</option>
            <option>Highest number (first)</option>
            <option>A-Z</option>
            <option>Z-A</option>
        </select>
        </div>
        
        </>)}
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
          {Array.from(data.keys()).map((n) => {
            // console.log("n>>>>",data[n]);
            return (
              <div className="MPItem my-4 col-lg-2 col-md-3 col-xs-3" key={n}>
                <a href="" className="d-flex justify-content-center">
                  <img
                    src={data[n].PokeImg} alt={data[n].Pokemon}
                    className="MPImage"
                  />
                </a>
                <div className="MPPokeNum">{data[n].PID}</div>
                <div className="MPPokeName"> {data[n].Pokemon} </div>
                <div className="d-flex justify-content-center">
                  {Array.from(data[n].Poketype).map((i)=>{
                    return(
                      <div className="MPAbility" key={i}>{i}</div>
                    )
                  })
                  }
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
