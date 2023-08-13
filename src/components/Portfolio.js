import React, { useState } from 'react';
import '../css/protfolio.css';
import Menu from './Menu';
 const Portfolio=()=>{
    const [item,setItem]=useState(Menu);
    const filterItem=(categoryItem)=>{
        const updatedItem=Menu.filter((currElement)=>{
            return currElement.category===categoryItem?true:false;
        })
        setItem(updatedItem);
    }
    return(
     <section className="work container section" id='portfolio'>
        <h2 className="section__title">Recent Work</h2>

        <div className="work__filters">
            <span className="work__item" onClick={()=>setItem(Menu)}>Everything</span>
            <span className="work__item"  onClick={()=>filterItem("Creative")}>Creative</span>
            <span className="work__item"  onClick={()=>filterItem("Art")}>Art</span>
            <span className="work__item"  onClick={()=>filterItem("Design")}>Design</span>
            <span className="work__item"  onClick={()=>filterItem("Branding")}>Branding</span>
        </div>

        <div className="work__container grid">
            {item.map((val)=>{
                return(
                    <div className="work__card" key={val.id}>
                        <div className="work__thumbnail">
                            <img src={val.image} alt="" className="work__img" />
                            <div className="work__mask"></div>
                        </div>

                        <span className="work__category">{val.category}</span>
                        <h3 className="work__title">{val.title}</h3>
                        <a href="#" className="work__button">
                            <i className="icon-link work__button-icon"></i>
                        </a>
                    </div>
                )
            })
            }
        </div>
     </section>   
    );
 }
 export default Portfolio;