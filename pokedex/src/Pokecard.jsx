/* eslint-disable no-unused-vars */
import React from 'react';

function Pokecard() {
  return (
    <div className="MPItem my-4 col-lg-2 col-md-3 col-xs-3" key={n}>
        <a href="" className="d-flex justify-content-center">
            <img src={data[n].PokeImg} alt={data[n].Pokemon} className="MPImage"/>
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
  )
}

export default Pokecard