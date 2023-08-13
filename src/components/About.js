import React from 'react';
import '../css/about.css';
import Image from '../assets/avatar-2.svg';
import AboutBox from './AboutBox';
const About=()=>{
    return(
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ad molestiae ratione veritatis cum, quibusdam eum explicabo.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">BE</h3>
                                <span className="skills__number">85%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HSC</h3>
                                <span className="skills__number">67%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">SSC</h3>
                                <span className="skills__number">82%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox/>
        </section>
    );
 }
 export default About;