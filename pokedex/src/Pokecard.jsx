/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Pokecard({InfoImg, InfoName, InfoPID, InfoType}) {
    const redirectURL = '/pokemon/'+InfoName;
  return (
    <div className="MPItem my-4 col-lg-2 col-md-3 col-xs-3" >
        <a href={redirectURL} className="d-flex justify-content-center">
            <img src={InfoImg} alt={InfoName} className="MPImage"/>
        </a>
        <div className="MPPokeNum">{InfoPID}</div>
        <div className="MPPokeName"> {InfoName} </div>
        <div className="d-flex justify-content-center">
            {Array.from(InfoType).map((i, index)=>{
                return(
                    <div className="MPAbility" key={index}>{i}</div>
                )
            })
            }
        </div>
    </div>
  )
}

export default Pokecard