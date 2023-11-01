import React from 'react'
import design1 from '../../assets/1.png';
import design2 from '../../assets/2.png';
import design3 from '../../assets/3.png';
import d2 from '../../assets/3d 2.png';
import d3 from '../../assets/Comp 38 2.png';

const WorkCard = () => {
    return (
        <div className='flex-none md:flex lg:flex'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-4 flex-none md:flex justify-center items-center'>
                    <div class="absolute lg:z-10 lg:left-40 max-w-md">
                        <div class="px-11 pt-3 pb-16 bg-white border-none bg-opacity-40 rounded-t-3xl border-2 backdrop-blur-lg justify-center items-center">
                            <div class="grow shrink basis-0 flex justify-center items-center pt-2 pb-2">
                                <img class="h-1/2 py-4 shadow" src={d2} alt='designs' />
                            </div>
                        </div>
                        <div class="w-full py-3.5 left-0 top-[270px] bg-gray-400 bg-opacity-30 rounded-bl-3xl rounded-br-3xl border-none border-opacity-30 justify-center items-center inline-flex">
                            <div class="text-white text-2xl font-bold font-['Poppins'] leading-loose">Designs</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4'>
                    <div class="relative lg:z-50">
                        <div class="px-11 pt-3 pb-16 bg-cyan-200 border-none bg-opacity-40 rounded-t-3xl border-2 backdrop-blur-lg justify-center items-center">
                            <div class="grow shrink basis-0 flex justify-center items-center">
                                <img class="h-1/2 py-4 shadow" src={design1} alt='ui design1' />
                                <img class="px-4 shadow" src={design2} alt='ui design2' />
                                <img class="h-1/2 py-4 shadow" src={design3} alt='ui design3' />
                            </div>
                        </div>
                        <div class="w-full py-3.5 left-0 top-[270px] bg-green-200 bg-opacity-30 rounded-bl-3xl rounded-br-3xl border-none border-opacity-30 justify-center items-center inline-flex">
                            <div class="text-white text-2xl font-bold font-['Poppins'] leading-loose">UI Designs</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4 flex-none md:flex justify-center items-center'>
                    <div class="absolute lg:right-40 lg:z-10 max-w-md">
                        <div class="px-11 pt-3 pb-16 bg-white border-none bg-opacity-40 rounded-t-3xl border-2 backdrop-blur-lg justify-center items-center">
                            <div class="grow shrink basis-0 flex justify-center items-center">
                                <img class="h-1/2 py-4 shadow" src={d3} alt='mockups' />
                            </div>
                        </div>
                        <div class="w-full py-3.5 left-0 top-[270px] bg-gray-400 bg-opacity-30 rounded-bl-3xl rounded-br-3xl border-none border-opacity-30 justify-center items-center inline-flex">
                            <div class="text-white text-2xl font-bold font-['Poppins'] leading-loose">Mockups</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard