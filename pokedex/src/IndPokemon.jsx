/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import "./stylesheets/IndPokemon.css";
import { GrFormPrevious, GrFormNext} from "react-icons/gr";
import infoData from "./pokeInfo.json";
import { useLocation } from 'react-router-dom';

function IndPokemon() {
  const pokemon = useLocation().pathname.split("/").pop().toLowerCase();
  console.log("pokemon",pokemon);

  const found = infoData.find(ele=>{
    return ele.pokemon === pokemon;
  })

  console.log("pokemon data:",found);
  return (
    <div>
      <div className="IPContainer1 d-flex ">
        <div className="IPBackIcon">
          <IoMdArrowRoundBack />  
        </div>
        <div className="IPTitle">
          <h3>{found.pokemon}</h3>
        </div>
      </div>
      <div className='IPNavigate'>
        <div className='IPPrevious'>
          <GrFormPrevious /> Previous
        </div>
        <div className='IPEmpty'></div>
        <div className='IPNext'>
          Next <GrFormNext />
        </div>
      </div>
      <div className='container'>
      <div className='IPDataContainer row'>
        <div className='IPImage col-lg-6 col-md-6 col-xs-3'>
          <img src={found.pokeImg} width="322" height="400" alt="Victini artwork by Ken Sugimori" />
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