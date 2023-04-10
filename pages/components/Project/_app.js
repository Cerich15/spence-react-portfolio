import React from 'react'
import Container from '../../../components/Container/_app'
import Image from "next/image";
import { projects } from '../../../constants/const';

const Project = ({title, className}) => {
  return (
   <>
      {
        title?.map((t, tIndex) => 
          <Container 
            key={tIndex}
            id="glass-morphism"
            className={`text-xs sm:text-base basis-2/5 dark:bg-gray-800 justify-center p-5 sm:p-8 flex flex-1 flex-col gap-3 sm:gap-5 dark:text-white rounded-lg shadow-lg ${className}`}
          >
              <Image src={projects[t].image} alt=''/>
              <h2 className='text-teal-500'>{projects[t].name.toUpperCase()}</h2>
              <p className="py-2 leading-5 sm:leading-8">{projects[t].description}</p>
              <Container className="flex gap-2 text-xs flex-row whitespace-nowrap flex-wrap">
                {
                  projects[t].stack.map((s, sIndex) => 
                    <Container key={sIndex}  className="dark:bg-slate-900 p-2 sm:p-3 rounded-md drop-shadow-md text-teal-500 border-black border-[1px]">
                      {s}
                    </Container>)
                }
              </Container>
          </Container>)
      }
  </>
  )
}

export default Project