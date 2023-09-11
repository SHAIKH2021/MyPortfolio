import React from 'react';
import '../css/services.css';
// import Image1 from '../assets/avatar-1.svg';
// import Image2 from '../assets/avatar-2.svg';
// import Image3 from '../assets/avatar-3.svg';
 const Services=()=>{
    const data =[
        {
            id:1,
            // image:Image1,
            title:"UI/UX Development",
            description:"- JavaScript, TypeScript, ReactJs, Redux, HTML, CSS, Bootstrap ",
        },
        {
            id:2,
            // image:Image2,
            title:"Backend Development",
            description:"- .Net core, ASP.Net MVC, C#, C++",
        },
        {
            id:3,
            // image:Image3,
            title:"Database & Other",
            description:"- SQL, MySQL, git, github, Azure",
        },
    ];
    return(
        <section className="services container section" id='services'>
            <h2 className="section__title">Technical Skills</h2>

            <div className="services__container grid">
                {data.map(({id,title,description})=>{
                    return(
                        <div className="services__card" key={id}>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                            {/* <img src={image} alt="" className="services__img" /> */}
                        </div>
                    );
                })}
            </div>
        </section>
    );
 }
 export default Services;