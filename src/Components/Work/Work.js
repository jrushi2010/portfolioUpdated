import React from 'react'
import background from '../../assets/Background (1).svg';
import WorkCard from './WorkCard';
import './Work.css';

const Work = () => {
  return (
    <div className='relative bgImage' >
      <div className='h-screen flex justify-center items-center'>
        {/* <img src={background} alt='background' /> */}
        <div className='absolute m-auto left-0 right-0 flex justify-center'>
          <WorkCard />
        </div>
      </div>
    </div>
  )
}

export default Work