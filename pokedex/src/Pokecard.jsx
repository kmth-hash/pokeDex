/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Pokecard({key,InfoImg, InfoName, InfoPID, InfoType}) {
  return (
    <div className="MPItem my-4 col-lg-2 col-md-3 col-xs-3" key={key}>
        <a href="" className="d-flex justify-content-center">
            <img src={InfoImg} alt={InfoName} className="MPImage"/>
        </a>
        <div className="MPPokeNum">{InfoPID}</div>
        <div className="MPPokeName"> {InfoName} </div>
        <div className="d-flex justify-content-center">
            {Array.from(InfoType).map((i)=>{
                return(
                    <div className="MPAbility" key={i}>{i}</div>
                )
            })
            }
        </div>
    </div>
  )
}

export default Pokecard