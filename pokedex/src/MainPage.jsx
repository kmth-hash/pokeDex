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
import { IoClose } from "react-icons/io5";
import Pokecard from "./Pokecard";

function MainPage() {
  const [search, setSearch] = useState(false);
  const [sort,showSort] = useState(false);
  const [surp, setSurp] = useState (false) ;
  const [text,setText] = useState("");
  const [searchtxt,setSearchtxt] = useState(text);
  const [count,setCount]=useState("false");
  const MPSortOnclick = sort ? "MPOnclick" : null;
  const MPTypeOnclick = search ? "MPOnclick" : null;
  const MPSurOnclick = surp ? "MPOnclick" : null;
  let mybutton = document.getElementById("btnscrolltop");

  const handleChange = (event) => {
    setText(event.target.value);
    // console.log("text>>>",text)
  };

  const handleClick = () => {
    setSearchtxt(text.toLowerCase());
    // console.log("searchtxt>>>>",searchtxt)
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Get input value
      setSearchtxt(text.toLowerCase());
    }
  };

  window.onscroll = function() {scrollFunction()};

  function incCount() {
    setCount(count+1);
  }

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
            <input type="text" className="MPSearchText" id="txtPokemon" onChange={handleChange} onKeyDown={handleKeyDown}></input>
          </div>
          <div>
            <div className="MPSearchButton" onClick={handleClick}>
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
            <div  className={MPSortOnclick} onClick={() => {showSort(!sort),setSearch(false),setSurp(false);}}>
              Sort By <BiSort />
            </div>
            <div className={MPSurOnclick} onClick={() => {setSurp(!surp),showSort(false),setSearch(false);}}>
              Surprise Me! <RiRefreshLine />
            </div>
            <div className={MPTypeOnclick} onClick={() => {setSearch(!search),showSort(false),setSurp(false);}}>
              Types <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        {sort == false? (
          <></>
        ):(
        <>
        <div className="MPSort">
            <div>Lowest number (first)</div>
            <div>Highest number (first)</div>
            <div>A-Z</div>
            <div>Z-A</div>
        </div>
        
        </>)}
        {search == false ? (
              <></>
            ) : (
              <>
                <div className="MPHide">
                  <div className="MPCloseIcon"><IoClose onClick={() => {setSearch(!search);}} /></div>
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
                  <div className="p-3" onClick={() => {setSearch(!search);}}>
                    Hide Types<RiArrowDropUpLine />
                  </div>
                </div>
              </>
            )}
      </div>
      <div className="MPContainer4">
      <div className="container MPContainer3">
        <div className="MPList row">
          {
          Array.from(data.keys()).map((n) => {
            // console.log("n>>>>",data[n]);
            if(searchtxt == ""){
              return (
                <Pokecard key={n} InfoImg={data[n].PokeImg} InfoName={data[n].Pokemon} InfoPID={data[n].PID} InfoType={data[n].Poketype}></Pokecard>
              );
            }
            else{
                if (data[n].Pokemon.toLowerCase().startsWith(searchtxt) || data[n].PID.includes(searchtxt)) {
                return (
                  <Pokecard key={n} InfoImg={data[n].PokeImg} InfoName={data[n].Pokemon} InfoPID={data[n].PID} InfoType={data[n].Poketype}></Pokecard>
                );
              }
            } 
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
