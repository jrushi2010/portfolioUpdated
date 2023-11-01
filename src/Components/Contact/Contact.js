import React from 'react'
import working from '../../assets/working.png';
import ContactCard from './ContactCard';
import illustation from '../../assets/Illustration.png';

const Contact = () => {
  return (
    <div className='relative container md:px-10 py-40 lg:px-60 lg:py-72'>
      <div className='w-1/4 absolute z-50 -left-10 -top-20 lg:left-20 lg:-top-40'>
        <img src={working} alt='' />
      </div>
      <ContactCard />
      <div className='absolute -bottom-48 md:-bottom-80 lg:top-60 -z-10'>
        <img src={illustation} alt='illustration' />
      </div>
    </div>
  )
}

export default Contact