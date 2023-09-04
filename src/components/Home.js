import React from 'react';
import '../css/home.css';
import me from '../assets/MY FAV.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
 const Home=()=>{
    return(
        <section className="home container" id='home'>
            <div className="intro">
                <img src={me} alt="" className="home__img" />
                <h1 className="home__name">Sahil Shaikh</h1>
                <span className="home__education">I'm full stack developer</span>
                <HeaderSocials/>
                <ScrollDown/>
            </div>
        </section>
    );
 }
 export default Home;