import React from 'react'
import photo from '../../assets/Frame 3524.png';

const About = () => {
  return (
    <div className='container mt-10'>
      <div className='col-span-12 flex-none md:flex-none lg:flex px-8 items-center justify-center'>
        <img src={photo} alt='me' />
        <div className='py-8 text-center md:text-center lg:text-left'>
          <h3 className='py-4'>About me</h3>
          <p>My name is Shreyas Kulkarni. I’m a UX/UI Designer and a instrutor based in Montreal. I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...read more</p>
        </div>
      </div>

    </div>
  )
}

export default About