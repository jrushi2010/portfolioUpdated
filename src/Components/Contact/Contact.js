import React from 'react'
import working from '../../assets/working.png';
import ContactCard from './ContactCard';
import illustation from '../../assets/Illustration.png';

const Contact = () => {
  return (
    <div className='relative mt-20  lg:w-9/12 mx-auto py-40'>
      <div className='max-w-sm absolute z-50 -top-80 -left-28 md:-top-80 md:-left-20 lg:-top-80 lg:-left-20'>
        <img src={working} alt='' />
      </div>
      <ContactCard />
      <div className='absolute -bottom-48 md:-bottom-80 lg:top-20 lg:-right-36 -z-10'>
        <img src={illustation} alt='illustration' />
      </div>
    </div>
  )
}

export default Contact