/* eslint-disable no-unused-vars */
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import "./stylesheets/MainPage.css";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiRefreshLine,
} from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import "./stylesheets/MainPage.css";
import { FaArrowUp } from "react-icons/fa";
import data from "./pokeList.json";
import { IoClose } from "react-icons/io5";
import Pokecard from "./Pokecard";
import { surpriseMe } from "./helpers/functions.jsx";

function MainPage() {
  const [search, setSearch] = useState(false);
  const [sort, showSort] = useState(false);
  const [surp, setSurp] = useState(false);
  const [lowfirst, setLowfirst] = useState(true);
  const [highfirst, setHighfirst] = useState(false);
  const [atoz, setAtoz] = useState(false);
  const [ztoa, setZtoa] = useState(false);
  const [apply,setApply] = useState(false);
  const [applylist,setApplylist] = useState([]);
  const [text, setText] = useState("");
  const [nullMsg , setNullMsgBox] = useState(0);
  const [typepoke, setPoketype] = useState([]);
  const [loadnumber, setLoadnumber] = useState(0);
  const [surplist, setSurplist] = useState(surpriseMe(data, [], loadnumber));
  const [searchtxt, setSearchtxt] = useState(text);
  const MPSortOnclick = sort ? "MPOnclick" : null;
  const MPTypeOnclick = search ? "MPOnclick" : null;
  const MPSurOnclick = surp ? "MPOnclick" : null;
  const MPLowOnclick = lowfirst ? "MPOnclick" : null;
  const MPHighOnclick = highfirst ? "MPOnclick" : null;
  const MPAtozOnclick = atoz ? "MPOnclick" : null;
  const MPZtoaOnclick = ztoa ? "MPOnclick" : null;
  let mybutton = document.getElementById("btnscrolltop");

  const TypeList = [
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
  ];
  
  const handleChange = (event) => {
    setText(event.target.value);
    // console.log("text>>>",text)
  };

  const handleClick = () => {
    setSearchtxt(text.toLowerCase());
    setSurp(false);
    // console.log("searchtxt>>>>",searchtxt)
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSurp(false);
    if (event.key === "Enter") {
      setSearchtxt(text.toLowerCase());
    }
  }
  };

  const filterList = (event) => {
    if (typepoke.includes(event.target.id) ){
      setPoketype(current => current.filter(id => id !== event.target.id));
    }else{
      setPoketype(current => [...current,(event.target.id)]);
    } 
  }

  // console.log("Type list:",typepoke);
  // console.log("Search text:",searchtxt);
  // console.log("applied list:",applylist);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function compareByName(a, b) {
    return a.Pokemon.localeCompare(b.Pokemon);
  }

  function compareByNameDesc(a, b) {
    return b.Pokemon.localeCompare(a.Pokemon);
  }

  function compareByNum(a, b) {
    return a.PID.localeCompare(b.PID);
  }

  function compareByNumDesc(a, b) {
    return b.PID.localeCompare(a.PID);
  }

  if (lowfirst) {
    data.sort(compareByNum);
  } else if (highfirst) {
    data.sort(compareByNumDesc);
  } else if (atoz) {
    data.sort(compareByName);
  } else if (ztoa) {
    data.sort(compareByNameDesc);
  } else {
    data.sort(compareByNum);
  }

  function loadMorePoke(){
    setSurplist(surpriseMe(data,surplist,loadnumber));
    console.log("loadnumber:",loadnumber);
  }

  useEffect(()=>{
    // if(searchtxt=='')
    // {setNullMsgBox(0);
    // return}
    let c = 0;
    // console.log('else')
    data.forEach(n=>{
      if((n.Pokemon.toLowerCase().startsWith(searchtxt)||
      n.PID.includes(searchtxt)) && (applylist.length == 0)){
        console.log('found' , n)
        console.log('1');
        c += 1;
        return
      }else if((n.Pokemon.toLowerCase().startsWith(searchtxt)||
      n.PID.includes(searchtxt)) && (applylist.length != 0)){
        if (applylist.some((ele)=>{ return n.Poketype.includes(ele)})){
          c += 1;
          return
        }
      }
    })
    console.log('c : ',c);
    setNullMsgBox(c);
  } , [searchtxt, applylist]);

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
            <input
              type="text"
              className="MPSearchText"
              id="txtPokemon"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
          <div>
            <div className="MPSearchButton" onClick={handleClick}>
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="MPText2">Use Types to explore Pokémon by types!</div>
        <div className="MPFeature">
          <p>Search for a Pokémon by name or its National Pokédex number.</p>
        </div>
        <div className="MPAdvanced">
          <div className="MPAdvancedBar pt-2 pb-2 d-flex">
            <div
              className={MPSortOnclick}
              onClick={() => {
                showSort(!sort), setSearch(false), setSurp(false);
              }}
            >
              Sort By <BiSort />
            </div>
            <div
              className={MPSurOnclick}
              onClick={() => {
                setSurp(!surp),
                  setSurplist(surpriseMe(data, [], loadnumber)),
                  setLoadnumber(0),
                  showSort(false),
                  setSearch(false);
              }}
            >
              Surprise Me! <RiRefreshLine />
            </div>
            <div
              className={MPTypeOnclick}
              onClick={() => {
                setSearch(!search), showSort(false), setSurp(false);
              }}
            >
              Types <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        {sort == false ? (
          <></>
        ) : (
          <>
            <div className="MPSort">
              <div
                className={MPLowOnclick}
                onClick={() => {
                  setLowfirst(!lowfirst),
                    setHighfirst(false),
                    setAtoz(false),
                    setZtoa(false);
                    showSort(!sort);
                }}
              >
                Lowest number (first)
              </div>
              <div
                className={MPHighOnclick}
                onClick={() => {
                  setHighfirst(!highfirst),
                    setLowfirst(false),
                    setAtoz(false),
                    setZtoa(false);
                    showSort(!sort);
                }}
              >
                Highest number (first)
              </div>
              <div
                className={MPAtozOnclick}
                onClick={() => {
                  setAtoz(!atoz),
                    setLowfirst(false),
                    setHighfirst(false),
                    setZtoa(false);
                    showSort(!sort);
                }}
              >
                A-Z
              </div>
              <div
                className={MPZtoaOnclick}
                onClick={() => {
                  setZtoa(!ztoa),
                    setLowfirst(false),
                    setHighfirst(false),
                    setAtoz(false);
                    showSort(!sort);
                }}
              >
                Z-A
              </div>
            </div>
          </>
        )}
        {search == false ? (
          <></>
        ) : (
          <>
            <div className="MPHide">
              <div className="MPCloseIcon">
                <IoClose
                  onClick={() => {
                    setSearch(!search);
                  }}
                />
              </div>
              <div className="MPTypeWeak">
                {Array.from(TypeList.keys()).map((n) => {
                  return (
                    <div
                      key={n}
                      className={typepoke.includes(TypeList[n])?"MPTW1 btn":"MPTW btn"}
                      id={TypeList[n]}
                      onClick={filterList}
                    >
                      {TypeList[n]}
                    </div>
                  );
                })}
                <br />
                <div className="MPSubmit btn" onClick={()=>{setApplylist(typepoke)}}>
                  <FaSearch /> Apply
                </div>
                <div className="MPReset btn" onClick={()=>{setApplylist([]),setPoketype([])}}>Reset</div>
              </div>
              <div
                className="p-3"
                onClick={() => {
                  setSearch(!search);
                }}
              >
                Hide Types
                <RiArrowDropUpLine />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="MPContainer4">
        <div className="container MPContainer3">
          <div className="MPList row">
            {surp == false ? (
              <>
                {Array.from(data.keys()).map((n) => {
                  if (searchtxt == ""){
                    if (applylist.length == 0){
                      // console.log("No search No type");
                      return (
                        <Pokecard
                          key={n}
                          InfoImg={data[n].PokeImg}
                          InfoName={data[n].Pokemon}
                          InfoPID={data[n].PID}
                          InfoType={data[n].Poketype}
                        ></Pokecard>
                      );
                    }else{
                      // console.log("No search Has type");
                      if (applylist.some((ele)=>{ return data[n].Poketype.includes(ele)})){
                        return (
                          <Pokecard
                            key={n}
                            InfoImg={data[n].PokeImg}
                            InfoName={data[n].Pokemon}
                            InfoPID={data[n].PID}
                            InfoType={data[n].Poketype}
                          ></Pokecard>
                        );
                      }
                    }
                  }else{
                    if (applylist.length == 0){
                      // console.log("Has search No type");
                      if (
                        data[n].Pokemon.toLowerCase().startsWith(searchtxt) ||
                        data[n].PID.includes(searchtxt)
                        ) {
                        return (
                          <Pokecard
                            key={n}
                            InfoImg={data[n].PokeImg}
                            InfoName={data[n].Pokemon}
                            InfoPID={data[n].PID}
                            InfoType={data[n].Poketype}
                          ></Pokecard>
                        );
                      }
                    }else{
                      // console.log("Has search Has type");
                      if (
                      (data[n].Pokemon.toLowerCase().startsWith(searchtxt) ||
                      data[n].PID.includes(searchtxt)) && 
                      applylist.some((ele)=>{ return data[n].Poketype.includes(ele)})
                      ){
                      return (
                        <Pokecard
                          key={n}
                          InfoImg={data[n].PokeImg}
                          InfoName={data[n].Pokemon}
                          InfoPID={data[n].PID}
                          InfoType={data[n].Poketype}
                        ></Pokecard>
                      );
                    }
                    }
                  }
                  
                })}
                {
                  nullMsg>0 ? <></> : <div className="MPNullMsg container">
                  No Pokémon Found!
                </div>
                }
              </>
            ) : (
              <>
                {Array.from(surplist.keys()).map((n) => {
                  return (
                    <Pokecard
                      key={n}
                      InfoImg={surplist[n].PokeImg}
                      InfoName={surplist[n].Pokemon}
                      InfoPID={surplist[n].PID}
                      InfoType={surplist[n].Poketype}
                    ></Pokecard>
                  );
                })}
                <div className="d-flex  justify-content-center">
                  <div
                    className="MPLoadMore"
                    onClick={() => {
                      setLoadnumber(loadnumber + 1), loadMorePoke(loadnumber);
                    }}
                  >
                    Load more Pokémon...
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div id="btnscrolltop" className="MPScrollTop">
        <a href="#top" className="MPA">
          <FaArrowUp />
        </a>
      </div>
    </div>
  );
}

export default MainPage;
