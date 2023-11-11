import React from 'react'
import home from '../../assets/footer/home.svg'
import about from '../../assets/footer/person_outline.svg'
import work from '../../assets/footer/work.svg'
import contact from '../../assets/footer/Vector 189.svg'
import instagram from '../../assets/footer/social media/Instagram.png';
import facebook from '../../assets/footer/social media/Facebook.png';
import twitter from '../../assets/footer/social media/Twitter.png';
import linkedin from '../../assets/footer/social media/Linkedin.png';
import youtube from '../../assets/footer/social media/YouTube.png';
import footerimg from '../../assets/6.png';



const Footer = () => {
  return (
    <div className='relative lg:top-[100rem] pb-20 -z-50'>
      <div className='absolute left-0 -top-12 md:-top-20 lg:-top-20'>
        <img className='w-28 md:w-52' src={footerimg} alt='' />
      </div>
      <div className='bg-[#1C1C65]'>
        <div className='grid grid-cols-12 pt-32 place-items-center'>
          <div className='col-span-12 md:flex'>
            <div className='flex py-4 md:px-8'>
              <img className='px-4 text-center' src={home} alt=''></img>
              <p className=''>Home</p>
            </div>
            <div className='flex py-4 md:px-8'>
              <img className='px-4 text-center' src={about} alt=''></img>
              <p className=''>About me</p>
            </div>
            <div className='flex py-4 md:px-8'>
              <img className='px-4 text-center' src={work} alt=''></img>
              <p className=''>Work</p>
            </div>
            <div className='flex py-4 md:px-8'>
              <img className='px-4 text-center' src={contact} alt=''></img>
              <p className=''>Contact</p>
            </div>

          </div>
        </div>
        {/* <div className='flex-none text-center md:flex lg:flex justify-center items-center pt-32'>
          <div className='flex justify-center px-4 lg:px-10 py-4'>
            <img className='px-4 md:px-2' src={home} alt=''></img>
            <p className=''> Home</p>
          </div>
          <div className='flex justify-center px-4 lg:px-10 py-4'>
            <img className='px-4 md:px-2' src={about} alt=''></img>
            <p className=''> About me</p>
          </div>
          <div className='flex justify-center px-4 lg:px-10 py-4'>
            <img className='md:px-2' src={work} alt=''></img>
            <p className=''> Work</p>
          </div>
          <div className='flex justify-center px-4 lg:px-10 py-4'>
            <img className='md:px-2' src={contact} alt=''></img>
            <p className=''> Contact</p>
          </div>
        </div> */}
        <div className='py-20 flex justify-center items-center'>
          <img className='px-2' src={instagram} alt='' />
          <img className='px-2' src={twitter} alt='' />
          <img className='px-2' src={linkedin} alt='' />
          <img className='px-2' src={facebook} alt='' />
          <img className='px-2' src={youtube} alt='' />
        </div>
        <div className='flex justify-center items-center'>
          <hr className='h-0.5 w-2/3 lg:w-[1360px] bg-white bg-opacity-20'></hr><br></br>
        </div>
        <p className='px-2 py-2 text-center lg:text-right text-white text-opacity-70'>Terms of Service - Privacy Policy</p>

      </div>

    </div>
  )
}

export default Footer