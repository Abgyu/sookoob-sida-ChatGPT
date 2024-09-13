import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        II SOOKOOB SIDA <br className='max-md:hidden' />
        <span className='orange_gradient '>chatgpt oo kale </span>
      </h1>
      <h2 className='desc'>
      wuxuu kuu aqrinayaa links  si add Summize ugu samaysid, soo koobid, sidoo kale maqaal il-furan oo maqaallo dhaadheer u rogaya qoraal cad oo kooban.
      </h2>
    </header>
  );
};

export default Hero;
