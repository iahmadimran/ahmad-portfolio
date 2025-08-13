import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
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
    </section>
  )
}

export default Grid
