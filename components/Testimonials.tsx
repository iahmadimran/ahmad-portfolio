import React from 'react'
import { InfiniteMovingCards } from './ui/InifiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section id='testimonials' className="py-24">
      <h1 className="heading">
        What People Say <span className="text-purple">About My Work</span>
      </h1>
      <p className="text-xl mt-4 text-center">
        Real feedback from clients, and collaborators who’ve experienced my work firsthand. Their words reflect my dedication, creativity, and passion for delivering results that matter.
      </p>

      <div className="flex flex-col gap-8 justify-center items-center mt-12 px-4 md:px-12">
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  width={50}
                  height={50}
                  unoptimized
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                  height={50}
                  unoptimized
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
