import { projects } from "@/data"
import { PinContainer } from "./ui/Card3D"
import Image from "next/image"
import { FaLocationArrow } from "react-icons/fa6"

const Projects = () => {
  return (
    <section id='projects' className="py-24">
      <h1 className="heading">
        The <span className="text-purple">Projects</span> I&apos;m Most Proud Of
      </h1>
      <p className="text-xl mt-4 text-center">
        A curated selection of my favorite creations — blending clean code, modern design, and AI-driven innovation to turn ideas into impactful digital experiences.
      </p>

      <div className="flex justify-center items-center flex-wrap gap-x-16 gap-y-8 p-4 mt-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[500px] w-[80vw]"
            key={id}
          >
            <PinContainer
              title="Visit"
              href={link}
            >
              <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" height={300} width={300} />
                </div>
                <Image
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  height={500} width={340}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" height={16} width={16} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
