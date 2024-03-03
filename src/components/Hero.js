import { DownloadIcon } from '@heroicons/react/outline';
import React from 'react'

function Hero() {
  return (
    <div className="landing1 pb-8 md:pb-0">
      <div className=" landing2  md:h-[83vh] md:flex relative">
        <div className=" landing3  md:max-w-md lg:max-w-none    lg:justify-center ">
          <h1 className=" land_h1 ">Your place to talk</h1>
          <h2 className=" land_h2  lg:max-w-3xl w-full">
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </h2>
          <div className="land_part1 flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
             <button className="land_button1 items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
             <DownloadIcon style={{ width: '1.5rem', marginRight: '0.5rem' }} />
                 Download for Mac
            </button>
            <button className="land_button1 rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">
             Open Discord in your browser
            </button>
        </div>
        </div>
        <div className="flex-grow">
          <img
            src="C:\amigos\image_amigo.svg"
            alt=""
            className="absolute -left-36 mt-16 sm:-left-44 md:hidden"
          />
          <img
            src="https://rb.gy/gjs8ch"
            alt=""
            className="hidden md:inline absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
