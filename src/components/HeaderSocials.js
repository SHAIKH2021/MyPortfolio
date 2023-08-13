import React from 'react';
const HeaderSocials=()=>{
    return(
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/sahil-shaikh-2023dajuri" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/SHAIKH2021" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://leetcode.com/Shaikh0514/" className="home__social-link" target='_blank'>
                <i class="fa-solid fa-code"></i>
            </a>
            <a href="https://wa.me/917738604742" className="home__social-link" target='_blank'>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    );
}
export default HeaderSocials;
