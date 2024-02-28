/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import "./stylesheets/IndPokemon.css";
import { GrFormPrevious, GrFormNext} from "react-icons/gr";
import infoData from "./pokeInfo.json";
import { useParams } from 'react-router-dom';

function IndPokemon() {
  // const pokemon = useLocation().pathname.split("/").pop().toLowerCase();
  // console.log("pokemon",pokemon);
  const {Individual} = useParams();

  const found = infoData.find(ele => {
    return ele.pokemon === Individual.toLowerCase();
  })

  let prevpoke = '';
  let nextpoke = '';
  {found.NationalID != '0494' ? prevpoke='0'+(parseInt(found.NationalID)-1).toString() : prevpoke = '0649';}
  {found.NationalID != '0649' ? nextpoke='0'+(parseInt(found.NationalID)+1).toString() : nextpoke = '0494';}
  // const prevpoke = '0'+(parseInt(found.NationalID)-1).toString();
  // const nextpoke = '0'+(parseInt(found.NationalID)+1).toString();

  const foundprev = infoData.find(ele => {
    return ele.NationalID === prevpoke;
  })

  const foundnext = infoData.find(ele => {
    return ele.NationalID === nextpoke;
  })

  const redirectprev = '/Individual/'+foundprev.pokemon;
  const redirectnext = '/Individual/'+foundnext.pokemon;

  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // console.log("prevpoke:",prevpoke);
  // console.log("foundprev:",foundprev);
  // console.log("nextpoke:",nextpoke);
  // console.log("foundnext:",foundnext);
  // console.log("current:",found);
  return (
    <div className='IPMain'>
      <div className="IPContainer1 d-flex ">
        <a href='/' ><div className="IPBackIcon">
          <IoMdArrowRoundBack />  
        </div></a>
        <div className="IPTitle">
          {Capitalize(found.pokemon)}
        </div>
      </div>
      <div className='IPNavigate'>
        <a href = {redirectprev}>
          <div className='IPPrevious'>
            <GrFormPrevious /> #{prevpoke} {Capitalize(foundprev.pokemon)}
          </div>
        </a>
        <div className='IPEmpty'></div>
        <a href = {redirectnext}>
          <div className='IPNext'>
            {Capitalize(foundnext.pokemon)} #{nextpoke} <GrFormNext />
          </div>
        </a>
      </div>
      <div className='container'>
      <div className='IPDataContainer row'>
        <div className='IPImage col-lg-6 col-md-6 col-xs-3'>
          <img src={found.pokeImg} width="300" height="400" alt="Victini artwork by Ken Sugimori" />
        </div>
        <div className='IPPokeData col-sm'>
          <div className='IPDataTitle1'>Pokédex data</div>
          <table className='IPPokeTable'>
            <tbody>
              <tr>
                <th>National No. </th>
                <td><strong>{found.NationalID}</strong></td>
              </tr>
              <tr>
                <th>Type</th>
                <td>
                  <div className='d-flex'>
                  {Array.from(found.pokeTypes).map((i, index)=>{
                    return(
                      <div className="IPType" key={index}>{i}</div>
                    )
                    })
                  }
                  </div>
                </td>
              </tr>
              <tr>
                <th>Species</th>
                <td>{found.Species}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{found.Height}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{found.Weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
  </div>
  )
}

export default IndPokemon