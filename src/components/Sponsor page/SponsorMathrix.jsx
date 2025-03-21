import React from 'react'
import '../../app/globals.css'
import '../../styles/sponsor.css'
import Image from 'next/image'

const SponsorMathrix = () => {
  const Sponsors = [
    {
      image: '/SponsorImage/unstop-logo.png',
      sponsortype: 'Powered By Sponsor',
      name: 'AGS',
    },
    {
      image: '/SponsorImage/poorvika.png',
      sponsortype: 'Certificate Sponsor',
      name: 'Cinemax',
    },
    {
      image: '/SponsorImage/rajams.png',
      sponsortype: 'Printing Sponsor',
      name: 'Viral',
    },
    {
      image: '/SponsorImage/m.png',
      sponsortype: 'Technology and Beverage Sponsor',
      name: 'Viral',
    },
    {
      image: '/SponsorImage/i.png',
      sponsortype: 'Prize Partner',
      name: 'Viral',
    },
  ]

  return (
    <div className='min-h-screen p-4'>
      <div className='flex flex-col gap-2 justify-center items-center py-4'>
        {/* Responsive Grid */}
        <div className='gridcontainer'>
          {Sponsors.map((item, key) => (
            <div key={key} className='book'>
              <p className='sponsortitle dmsans'>{item.sponsortype}</p>
              <div className='cover'>
                <Image
                  src={item.image}
                  alt={item.name}
                  className='sponsor-image h-full w-full object-cover cursor-default'
                  draggable={false}
                  width={64}
                  height={64}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SponsorMathrix
