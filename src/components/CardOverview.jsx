import React from 'react'

const CardOverview = ( { textLikes, socialLogo, total, arrow, percentage } ) => {
  return (
    <div className='w-[100%] lg:w-[280px] h-auto dark:bg-DarkDesaturatedBlueCardBG bg-LightGrayishBlueCardBG  p-6 flex flex-col items-center gap-7 rounded-md'>
        <div className='flex  w-full justify-between items-center'>
            <p className='text-DesaturatedBlueText font-bold capitalize'>{textLikes}</p>
            <img src={socialLogo} alt="image social networks" />
        </div>
        <div className='flex justify-between items-center w-full '>
            <p className='text-4xl dark:text-WhiteText text-DarkGrayishBlueText  font-bold'>{total}</p>
            <p className={`flex items-center gap-1 ${arrow == '../../public/images/icon-up.svg' ? 'text-green-700' : 'text-red-600'}`}> <img src={arrow} alt="arrow"/> {percentage}%</p>
        </div>
    </div>
  )
}

export default CardOverview