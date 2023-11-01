import React from 'react'
import './Header.css'
import logo from '../../assets/Logo name.svg';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:gap-[100px] px-[332px] pt-[40px] container'>
      <a className='w-20 text-center'>Home</a>
      <a className='w-20 text-center'>About me</a>
      <img className='' src={logo} alt='logo' />
      <a className='w-20 text-center'>Work</a>
      <a className='w-20 text-center'>Contact</a>
    </div>
  )
}

export default Header