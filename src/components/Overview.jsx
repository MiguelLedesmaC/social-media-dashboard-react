import React from 'react'
import CardOverview from './CardOverview'

const Overview = () => {

    const facebook = '../../public/images/icon-facebook.svg'
    const instagram = '../../public/images/icon-instagram.svg'
    const youtube = '../../public/images/icon-youtube.svg'
    const twitter = '../../public/images/icon-twitter.svg'

  return (
    <div className='w-[80%] flex flex-wrap items-center justify-center gap-4 px-8 '>
        <h2 className='dark:text-WhiteText text-DarkGrayishBlueText font-bold text-2xl text-left w-full mt-12'>Overview - Today</h2>
        <CardOverview 
        textLikes={'Page Views'}
        socialLogo={facebook}
        total={'87'}
        arrow={'../../public/images/icon-up.svg'}
        percentage={'3'} />

    <CardOverview 
            textLikes={'likes'}
            socialLogo={facebook}
            total={'52'}
            arrow={'../../public/images/icon-down.svg'}
            percentage={'2'} />

    <CardOverview 
            textLikes={'likes'}
            socialLogo={instagram}
            total={'5462'}
            arrow={'../../public/images/icon-up.svg'}
            percentage={'2257'} />

    <CardOverview 
            textLikes={'profile views'}
            socialLogo={instagram}
            total={'52k'}
            arrow={'../../public/images/icon-up.svg'}
            percentage={'1375'} />

    <CardOverview 
            textLikes={'retweets'}
            socialLogo={twitter}
            total={'117'}
            arrow={'../../public/images/icon-up.svg'}
            percentage={'303'} />

    <CardOverview 
            textLikes={'likes'}
            socialLogo={twitter}
            total={'507'}
            arrow={'../../public/images/icon-up.svg'}
            percentage={'553'} />

    <CardOverview 
            textLikes={'likes'}
            socialLogo={youtube}
            total={'107'}
            arrow={'../../public/images/icon-down.svg'}
            percentage={'19'} />

    <CardOverview 
            textLikes={'total Views'}
            socialLogo={youtube}
            total={'1407'}
            arrow={'../../public/images/icon-down.svg'}
            percentage={'12'} />
    </div>
  )
}

export default Overview