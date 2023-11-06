import React from 'react'
import background from '../../assets/Background (1).svg';
import WorkCard from './WorkCard';
import './Work.css';

const Work = () => {
  return (
    <div className='lg:relative my-40 lg:mt-0' >
      <div className='h-screen flex md:flex-none justify-center items-center'>
        <img className='hidden lg:block' src={background} alt='background' />
        <div className='lg:absolute m-auto left-0 right-0 flex md:flex-none justify-center'>
          <WorkCard />
        </div>
      </div>
    </div>
  )
}

export default Work