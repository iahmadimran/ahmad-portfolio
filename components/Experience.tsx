import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import Image from 'next/image'

const Experience = () => {
  return (
    <section className="py-24">
      <h1 className="heading">
        My <span className="text-purple">Practical Experience</span>
      </h1>
      <p className="text-xl text-white-100 mt-4 text-center">
        Highlights of projects and roles where I’ve applied my skills to create impactful, high-quality products.
      </p>

      <div className="w-full mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                width={150}
                height={150}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  )
}

export default Experience
