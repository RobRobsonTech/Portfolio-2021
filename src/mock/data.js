import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rob Robson | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Rob Robson',
  subtitle: "I'm a versatile Full-Stack Engineer based in London.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'rob.jpg',
  paragraphOne:
    'After achieving a First in my UG Degree, Computer Systems Integration, I decided to pursue a Masters in Technology Leadership & Entrepreneurship at the Hong Kong University of Science & Technology. I jumped in at the deep end to gain a better understanding of how to make stronger technology products for businesses.',
  paragraphTwo:
    "Over my 4 years in industry I've worked with websites, computer networks and software products covering many languages and frameworks.",
  paragraphThree:
    'I am now looking for an innovative and ambitious company based in London which are looking to take their software products to the next level.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'asmond.jpg',
    title: 'Asmond',
    info:
      "My Master's Thesis project involved creating an innovative solution to existing network security setups. I proposed a scalable network security device which utilized individual security modules to provide businesses of any size with the best level of network security for each size of company. These modules were designed to provide small, midsized, large and enterprise sized businesses with the most essential security features for each specific company size.",
    info2:
      'During the process of this project I learnt much more about computer networks both during the product’s development and specific network courses I chose to take. It was an enjoyable challenge where I built on both my business and technical skills. As the scope of this project was very large, I am proud to have covered so much ground in the short time I had on my Masters program.',
    url: '',
    repo: 'https://github.com/RobRobsonTech/Asmond', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sb.jpg',
    title: 'Soundbrenner Website',
    info:
      'I joined Soundbrenner in the Summer of 2019 to upgrade their company website in time for their new product release. I worked alongside the design team to implement an effective website which can be used to easily promote products.',
    info2: '',
    url: 'https://www.soundbrenner.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jts.png',
    title: 'Journey Time System',
    info:
      'Whilst working as a software engineer I helped create a product which allowed our client to estimate journey time on custom routes using the Google Maps API.',
    info2:
      'Routes could be quickly edited by setting a start, end, and optional waypoints to calculate journey time including diversion routes in a matter of clicks. The data from this system was then inserted into smart road signs to give the general public an accurate reading of the estimated journey time. This system has been deployed on multiple motorways and important roads across the UK to provide drivers with an estimate of how long their journey will take!',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'Portfolio Site 2020',
    info:
      'You are currently looking at my 2021 portfolio website which is using React & deployed via AWS Amplify.',
    info2: 'If you want to check out my 2020 portfolio site click here:',
    url: 'https://robrobsontech.github.io/Robert-Robson-Portfolio/',
    repo: 'https://github.com/RobRobsonTech/Robert-Robson-Portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'background.png',
    title: 'Background Generator',
    info: 'This project lets users quickly create expressive website backgrounds.',
    info2:
      'When you choose the colours you want, the css you need is instantly created for you to use!',
    url: 'https://robrobsontech.github.io/Background-Generator/',
    repo: 'https://github.com/RobRobsonTech/Background-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shopping.png',
    title: 'Shopping List',
    info: 'Multiple projects require dynamic lists so here is my custome list!',
    info2:
      'This list module has multiple features such as: drag & drop, delete, add new items, edit items, tick off selected items.',
    url: 'https://robrobsontech.github.io/Shopping-List/',
    repo: 'https://github.com/RobRobsonTech/Shopping-List', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Think I'd be a good fit for your team? Awesome!",
  btn: '',
  email: 'RobRobsonTech@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/RobRobsonTech/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/RobRobsonTech',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robrobsontech/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/RobRobsonTech/',
    },
  ],
};
