import React from "react";

const Card = ({ colorSocial, imageSocial, nickname, followers, textSuscribes, arrow, unsuscribe = false, number  }) => {
  return (
    <div className="relative w-[80%] dark:bg-DarkDesaturatedBlueCardBG bg-LightGrayishBlueCardBG  max-w-[340px] overflow-hidden h-auto  py-6 flex flex-col justify-center items-center gap-4 rounded-md">
      <div className={`absolute  top-0 ${colorSocial} w-full h-1 lg:h-2`}></div>
      <div className="flex gap-2">
         <img src={imageSocial} alt="social-networks" />
        <p className="text-DesaturatedBlueText text-sm">{nickname}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[4rem] font-bold dark:text-WhiteText text-DarkGrayishBlueText ">{followers}</p>
        <p className="uppercase text-DesaturatedBlueText text-sm -mt-4">{textSuscribes}</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={arrow} alt="arrow up" />
        <p className={`text-WhiteText ${number > 50 ? 'text-emerald-500' : ''} ${!unsuscribe ? '':'text-red-600'} `}>{number} Today</p>
      </div>
     
    </div>
  );
};

export default Card;
