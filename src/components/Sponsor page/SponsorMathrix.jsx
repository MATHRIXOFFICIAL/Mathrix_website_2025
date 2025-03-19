import React from 'react'
import '../../app/globals.css'
import { ags, image1, viral } from '../../../public/SponsorImage/index'
import SponsorCard from './SponsorCard'
import '../../styles/sponsor.css'

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
      image: '/SponsorImage/magnipower.jpg',
      sponsortype: 'Technology and Beverage Sponsor',
      name: 'Viral',
    },
    {
      image: '/SponsorImage/images.png',
      sponsortype: 'Printing Sponsor',
      name: 'Viral',
    },
  ]

  return (
    <div className='min-h-screen p-4'>
      <div className='flex flex-col gap-5 justify-center items-center py-4'>
        <p className='text-4xl font-extrabold text-red-500 text-center'>
          Our Sponsors
        </p>
        <p className='text-neutral-600 text-xl text-center'>
          We are proud to present our incredible lineup of sponsors!
        </p>

        {/* Responsive Grid */}
        <div className='gridcontainer'>
          {Sponsors.map((item, key) => (
            <div key={key} className='book'>
                <p className='sponsortitle'>{item.sponsortype}</p>
              <div className='cover'>
              <img src={item.image} alt={item.name} className='sponsor-image' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SponsorMathrix
