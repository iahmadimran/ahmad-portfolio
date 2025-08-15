export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I turn ideas into pixel-perfect, high-performance experiences that look and feel amazing.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Working across time zones with ease to keep collaboration efficient.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always learning, always improving — my toolkit evolves with every project.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about creating digital solutions that truly make an impact.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS animation library to make the web more alive",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s turn your vision into a powerful, well-crafted product",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Intellecta - AI-Powered Teaching Assisstant Saas App",
    des: "A real-time EdTech SaaS platform with conversational AI assistants using speech synthesis & live voice interaction using Next.js.",
    img: "/intellecta-screenshot.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://intellecta-pink.vercel.app",
  },
  {
    id: 2,
    title: "Draftly - A Live Docs App",
    des: "A collaborative document editor with real-time sync and user presence using Liveblocks and Lexical.",
    img: "/draftly-screenshot.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://draftly-ten.vercel.app",
  },
  {
    id: 3,
    title: "Rezoom AI - An AI-Powered Resume Analyzer",
    des: "An AI-powered resume analyzer using GPT to evaluate resumes against job descriptions with feedback on ATS readiness.",
    img: "/rezoomai-screenshot.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://rezoomai-eight.vercel.app",
  },
  {
    id: 4,
    title: "Vibra - A Social Media Platform",
    des: "A modern social platform that lets users share moments, connect in real time, and build communities through photos, videos, and interactive posts.",
    img: "/snapgram-screenshot.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://snapgram-kappa-one.vercel.app",
  },
  {
    id: 5,
    title: "Next Bulls - A Modern Trading Portfolio For Client",
    des: "A learning trading community delivering expert crypto and stock market insights, where members grow together through accurate trade signals and shared gains.",
    img: "/nextbulls-screenshot.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://nextbulls.xyz",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Ahmad was a seamless experience from start to finish. His ability to understand our vision and translate it into a polished, functional product exceeded all expectations. He not only delivered on time but went above and beyond to ensure every detail was perfect.",
    name: "Sarah Mitchell",
    title: "CEO of BrightPath Solutions",
  },
  {
    quote:
      "Ahmad’s work ethic and creativity are unmatched. He approached our project with a problem-solving mindset, suggesting innovative solutions we hadn’t even considered. The end result was a sleek, high-performing platform that our clients love using every day.",
    name: "David Carter",
    title: "Product Manager at InnovateX",
  },
  {
    quote:
      "From the first meeting to the final launch, Ahmad made the process effortless. His technical expertise, clear communication, and dedication to quality made him an invaluable partner. I’m already planning our next project together.",
    name: "Emily Ross",
    title: "Founder of StudioWave",
  },
  {
    quote:
      "Ahmad is the kind of developer every team wishes they had. He quickly understood our goals, communicated clearly at every stage, and delivered a product that was not only functional but exceeded our design expectations",
    name: "Mark Reynolds",
    title: "CTO at HorizonWorks",
  },
  {
    quote:
      "What impressed me most about Ahmad was his attention to detail and commitment to delivering the best possible outcome. He treated our project as if it were his own, and the results speak for themselves — fast, reliable, and beautifully built.",
    name: "Linda Parker",
    title: "Marketing Director at BluePeak Digital",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: 'https://github.com/iahmadimran'
  },
  {
    id: 2,
    img: "/twit.svg",
    href: 'https://x.com/aamepubg'
  },
  {
    id: 3,
    img: "/link.svg",
    href: 'https://www.linkedin.com/in/iahmadimran'
  },
];