import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='pt-52 pb-28'>
      <h1 className='heading'>
        About <span className='text-purple'>Me</span>
      </h1>
      <p className="text-xl mt-4 text-center">
        I’m a passionate frontend & full-stack developer who loves turning complex problems into simple, elegant solutions. With a strong focus on modern design, AI integration, and user experience, I create digital products that are fast, scalable, and impactful.
      </p>
      <div className='mt-24'>
        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              id={item.id}
              title={item.title}
              img={item.img}
              spareImg={item.spareImg}
              titleClassName={item.titleClassName}
              imgClassName={item.imgClassName}
              description={item.description}
              key={item.id}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default Grid
