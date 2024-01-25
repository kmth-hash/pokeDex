/* eslint-disable no-unused-vars */
import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {FaUserCircle,FaSearch} from "react-icons/fa";
import './stylesheets/MainPage.css';
import { RiArrowDropDownLine,RiArrowDropUpLine,RiRefreshLine } from "react-icons/ri";
import { CgPokemon } from "react-icons/cg";

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
            <div className='MPAdvanced'>
                <div>Show Advanced Search<div className='MPExpand'><RiArrowDropDownLine /></div></div>
                <div className='MPHide'>
                    <div className='MPTypeWeak'>
                        <p>Type & Weakness</p>
                        <div className='btn btn-primary'>Bug</div>
                        <div className='btn btn-primary'>Dark</div>
                        <div className='btn btn-primary'>Dragon</div>
                        <div className='btn btn-primary'>Electic</div>
                        <div className='btn btn-primary'>Fairy</div>
                        <div className='btn btn-primary'>Fighting</div>
                        <div className='btn btn-primary'>Fire</div>
                        <div className='btn btn-primary'>Flying</div>
                        <div className='btn btn-primary'>Ghost</div>
                        <div className='btn btn-primary'>Grass</div>
                        <div className='btn btn-primary'>Ground</div>
                        <div className='btn btn-primary'>Ice</div>
                        <div className='btn btn-primary'>Normal</div>
                        <div className='btn btn-primary'>Poison</div>
                        <div className='btn btn-primary'>Psychic</div>
                        <div className='btn btn-primary'>Rock</div>
                        <div className='btn btn-primary'>Steel</div>
                        <div className='btn btn-primary'>Water</div>
                        <div className='MPSubmit btn btn-primary'><FaSearch/>  Apply</div>
                    </div>
                <div>
                    <div className='MPExpand'><RiArrowDropUpLine /></div>Hide Advanced Search 
                </div> 
                </div>
                
            </div>
                
            
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