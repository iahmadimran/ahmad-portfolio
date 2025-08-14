import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Contact = () => {
  const today = new Date()
  return (
    <footer id='contact' className="pt-24 pb-8 w-full">
      <div className='flex flex-col items-center'>
        <h1 className="heading lg:max-w-[50vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-xl text-white-100 mt-5 text-center lg:max-w-[65vw]">
          Have a project in mind or just want to say hello? I’m always open to discussing new opportunities, creative ideas, or ways to bring your vision to life.
        </p>

        <a className='mt-14' href='https://www.linkedin.com/in/iahmadimran' target='_blank'>
          <MagicButton
            title="Let's Connect"
            position='right'
            icon={<FaLocationArrow />}
          />
        </a>
      </div>

      <div className='flex justify-between gap-y-3 flex-col md:flex-row mt-16 px-4 md:px-6 items-center'>
        <h1>
          Copyright © {today.getFullYear()} Ahmad Imran
        </h1>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              target='_blank'
              href={info.href}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Contact
