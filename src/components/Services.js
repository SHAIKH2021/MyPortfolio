import React from 'react';
import '../css/services.css';
import Image1 from '../assets/avatar-1.svg';
import Image2 from '../assets/avatar-2.svg';
import Image3 from '../assets/avatar-3.svg';
 const Services=()=>{
    const data =[
        {
            id:1,
            image:Image1,
            title:"UI/UX design",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ad molestiae ratione veritatis cum, quibusdam eum explicabo.",
        },
        {
            id:2,
            image:Image2,
            title:"web development",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ad molestiae ratione veritatis cum, quibusdam eum explicabo.",
        },
        {
            id:3,
            image:Image3,
            title:"Photography",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ad molestiae ratione veritatis cum, quibusdam eum explicabo.",
        },
    ];
    return(
        <section className="services container section" id='services'>
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id,image,title,description})=>{
                    return(
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
 }
 export default Services;