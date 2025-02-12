import React from 'react'
import NetflixLogo from '../Assets/netflix-logo.svg'
import { SlArrowRight } from "react-icons/sl"

const Home = () => {
  return (
    <section className='home-image'>
      <header className='flex items-center pt-5 px-40'>
        <div>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-44 fill-red-600" />
        </div>

        <button className='ml-auto bg-red-600 text-white text-sm px-4 py-2 rounded'>Sign in</button>
      </header>

      <div className='text-white text-center mt-32'>
        <h1 className='font-netflix font-bold netflix-size'>Unlimited movies, TV </h1>
        <h1 className='font-netflix font-bold netflix-size'>shows, and more</h1>
        <h3>Starts at ₦2,200. Cancel anytime.</h3>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>

        <div className='flex'>
          <input type="text" />
          <div className='flex'>
            <button>Get Started</button>
            <SlArrowRight />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
