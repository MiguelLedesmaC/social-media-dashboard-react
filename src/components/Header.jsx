
import React, { useState } from "react";
import '../styles/Header.css'


const Header = () => {
  const [lightMode, setLightMode] = useState(true)

 const toggleTheme = () => {

const body = document.querySelector('body')
  if(lightMode) {
    body.classList.add('dark')
  }else{
    body.classList.remove('dark')
  }
  setLightMode(!lightMode)
 }

  return (
  <header  className=" dark:bg-VeryDarklueTopBGPattern bg-LightGrayishBlueCardBG  dark:text-WhiteText text-DarkGrayishBlueText  rounded-b-3xl w-[100%] flex flex-col pb-32 lg:flex-row items-start lg:items-center justify-center lg:justify-around p-8 gap-4 ">
      <div className="w-full">
        <h1 className="capitalize text-2xl font-semibold w-full">Social media dashboard</h1>
        <p  className="capitalize text-DesaturatedBlueText">Total followers: 23,004 </p>
      </div>
      <div className="w-full border-b-[.1rem] border-DesaturatedBlueText lg:hidden "></div>
        {/* <div className="flex justify-between items-center w-full lg:justify-end lg:gap-5 ">
          <p className="capitalize text-DesaturatedBlueText ">Dark Mode</p> */}
    
    {/* Toogle Video */}
      <div className="toggle  lg:w-60" >
        <label htmlFor="checkbox" className={`font-bold dark:text-WhiteText text-DarkGrayishBlueText  cursor-pointer`}>{!lightMode ? 'Dark Mode' : 'Light Mode'}</label>
        <input type="checkbox" className="checkbox" id="checkbox" checked={!lightMode} onChange={toggleTheme} />
        <label htmlFor="checkbox" className="label" >
          <div className="ball"></div>
        </label>
      </div>
  </header>
  )
};

export default Header;
