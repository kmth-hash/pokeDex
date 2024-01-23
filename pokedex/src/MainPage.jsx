/* eslint-disable no-unused-vars */
import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {FaUserCircle,FaSearch} from "react-icons/fa";
import './MainPage.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiRefreshLine } from "react-icons/ri";
import { CgPokemon } from "react-icons/cg";
import Select from "react-select";

function MainPage() {
  return (
    <div>
        <div className='MPContainer1 d-flex '>
            <div className='MPMenuIcon'>
                <GiHamburgerMenu/>
            </div>
            <div className='MPTitle'><h3>Pokédex</h3></div>
            <div className='MPLoginIcon'>
                <FaUserCircle/>
            </div>
        </div>
        <div className='MPContainer2'>
            <div className='MPText1'>Name or Number</div>
            <div className='MPSearch d-flex'>
                <div><input type='text' className='MPSearchText'></input></div>
                <div><div className='MPSearchButton'><FaSearch/></div></div>
            </div>
            <div className='MPText2'>Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</div>
            <div className='MPFeature'>
                <p>Search for a Pokémon by name or its National Pokédex number.</p>
            </div>
            <div className='MPAdvanced'>Show Advanced Search<div className='MPExpand'><RiArrowDropDownLine /></div></div>
        </div> 
        <div className='MPFilter'>
            <div className='MPSurprise'><RiRefreshLine/> <b>Surprise Me!</b></div>
            <h4>Sort By</h4>
            <div className='d-flex'>
                <div className='MPPokeLogo'><CgPokemon /></div>
                    <select id='PokeSort' className='MPDropdown'>
                        <option selected value="numAsc">Lowest Number (First)</option>
                        <option value="numDesc">Highest Number (First)</option>
                        <option value="nameAsc">A-Z</option>
                        <option value="nameDesc">Z-A</option>
                    </select>
            </div>
        </div>
        <ul className='MPList'>
                <li className='MPItem'><a href=''><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" className='MPImage'/></a>
                <div className='MPPokeNum'>#0001</div>
                <div className='MPPokeName'> Balbasaur </div>
                <div className='d-flex'>
                    <div className='MPAbility'>Grass</div>
                    <div className='MPAbility'>Poison</div>
                </div></li>
        </ul>  
        <div className='MPLoadMore'>
            Load more Pokémon
        </div>   
    </div>
  )
}

export default MainPage