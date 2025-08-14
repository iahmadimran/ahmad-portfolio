import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="pb-24 pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div> */}

      <div className='flex justify-center items-center relative my-10'>
        <div className='max-w-[89vw] md:max-w-6xl lg:max-w-[60vw] flex flex-col items-cemter justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-blue-100 text-center w-full'>
            The saviour of your broken web apps
          </h2>

          <TextGenerateEffect
            className='text-center text-[34px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts Into Intelligent Digital Experiences.'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-lg'>
            I&apos;m Ahmad Imran, An AI-Full Stack Developer based in Pakistan.
          </p>

          <a href="#projects" className='text-center w-full'>
            <MagicButton 
              title='Check My Work'
              position='right'
              icon={<FaLocationArrow />}
            />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Hero
