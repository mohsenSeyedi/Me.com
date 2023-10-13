import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2';


export default function Project(props) {
  return (
    <>
      <main className='text-left pl-24 w-1/2 md:w-full md:pl-40 sm:pl-32'>
          <span className='text-yellow-color text-5xl sm:text-4xl'>{props.title}</span>
          <p className='text-3xl mt-4 inline text-white font-bold'></p>
          <p className='mt-3 text-[20px] font-swap w-9/12 text-[#ababab] sm:text-[15px]'>{props.description}</p> 
          <div  className="flex-wrap flex gap-2 !mt-6 text-white">
            <span className='text-3xl'>tag :</span>     
              {props.tags.map(tag => (
                <p className='bg-yellow-color text-2xl text-black rounded-sm px-2 py-1'>{tag}</p>
              ))}
          </div>
          <div className='flex items-center mt-5'>
              <p className=' text-white font-swap text-3xl'>See View</p>
              <a  href={props.href}><button className='bg-red-600 text-3xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight /></button></a>
          </div>
      </main>
      <section className="pr-24 md:mb-10 md:w-full md:pl-40 sm:pl-32"> 
          <img className="mr-6  h-[250px] rounded-md" width={"400"} src={props.img} alt="" />
      </section>
    </>
  )
}
