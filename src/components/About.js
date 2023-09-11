import React from 'react';
import '../css/about.css';
// import me from '../assets/MY FAV.jpeg';
// import AboutBox from './AboutBox';
const About=()=>{
    return(
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am a full-stack developer with two years of experience in front-end and back-end development of quality e-commerce web applications and products.
                        I am proficient in React JS, Redux, Javascript, Typescript, Bootstrap, HTML, and CSS and have experience working with .Net core, ASP.Net MVC and SQL. 
                        My expertise in these technologies enables me to deliver efficient and high-quality web solutions.                        
                       </p>
                        <a href="https://drive.google.com/file/d/1M_1GEJva5ZUDwGZ6v-ZiytFqp3eImUvq/view?usp=sharing" className="btn">Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Development</h3>
                                <span className="skills__number">8/10</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Backend Development</h3>
                                <span className="skills__number">7/10</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">SQL</h3>
                                <span className="skills__number">8/10</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
 }
 export default About;