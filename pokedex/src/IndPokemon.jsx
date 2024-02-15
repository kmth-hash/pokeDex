/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import "./stylesheets/IndPokemon.css";
import { GrFormPrevious, GrFormNext} from "react-icons/gr";

function IndPokemon() {
  return (
    <div>
      <div className="IPContainer1 d-flex ">
        <div className="IPBackIcon">
          <IoMdArrowRoundBack />  
        </div>
        <div className="IPTitle">
          <h3>Victini</h3>
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
          <img src="https://img.pokemondb.net/artwork/victini.jpg" width="322" height="400" alt="Victini artwork by Ken Sugimori" />
        </div>
        <div className='IPPokeData col-sm'>
          <div className='IPDataTitle1'>Pokédex data</div>
          <table className='IPPokeTable'>
            <tbody>
              <tr>
                <th>National No. </th>
                <td><strong>0494</strong></td>
              </tr>
              <tr>
                <th>Type</th>
                <td>
                  <div className='d-flex'>
                    <div className="IPType">Grass</div>
                    <div className="IPType">Poison</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Species</th>
                <td>Victory Pokémon</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>0.4 m (1'04")</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>4.0 kg (8.8 lbs)</td>
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