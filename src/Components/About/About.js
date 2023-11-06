import React from 'react'
import photo from '../../assets/Frame 3524.png';

const About = () => {
  return (
    <div className='container'>
      <div className='mt-96 lg:mt-60'>
        <div className='col-span-12 md:py-20 lg:py-0 flex-none md:flex-none lg:flex px-8 items-center justify-center'>
          <img src={photo} alt='me' />
          <div className='py-8 text-center md:text-center lg:text-left'>
            <h3 className='py-4 font-bold text-xl'>About me</h3>
            <p>My name is Shreyas Kulkarni. I’m a UX/UI Designer and a instrutor based in Montreal. I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...read more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About