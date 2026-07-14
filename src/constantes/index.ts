import type { SkillsProps } from './../data/skills';

import type { ServiceProps } from "../data/Service";

import service1 from "../assets/image/service1.png";
import service2 from "../assets/image/service2.png";
import service3 from "../assets/image/service3.png";
import service4 from "../assets/image/service4.png";
import service5 from "../assets/image/service5.png";
import service6 from "../assets/image/service6.png";
import team1 from "../assets/image/team1-Dpzh5qbd.jpg";
import team2 from "../assets/image/team2-DzE8l89-.jpg";
import team3 from "../assets/image/team3-DhsEGRez.jpg";
import team4 from "../assets/image/team4-_W8ui1z1.jpg";

export interface meunType{
    lien:string,
    nom:string,
}

export const navList:meunType[]=[
    {
        lien:"/",
        nom:'Home'
    },
    {
        lien:'/about',
        nom:'About Us'
    },
    {
        lien: '/service',
        nom: 'Srevice'
    },
    {
        lien:'/portfolio',
        nom: 'Portfolio'
    },
    {
       lien:'/team',
        nom: 'Team'  
    },
    {
         lien:'/pricing',
        nom: 'Pricing'
    },
    {
         lien:'/contact',
        nom: 'Contact'
    },
    
]







export const Service: ServiceProps[] = [
    {
        icon: service1,
        title: "Optimization",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
    {
        icon: service2,
        title: "Market Analysis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
    {
        icon: service3,
        title: "Concept & Idea",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
    {
        icon: service4,
        title: "Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
    {
        icon: service5,
        title: "Integration",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
    {
        icon: service6,
        title: "Support",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    }
];


export const SkillsProp:SkillsProps[] =[
    
   { 
    title: "Market Analysis",
    percentage: 100,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    title: "Optimization",
    percentage: 90,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
  },
  {
    title: "Integration",
    percentage: 80,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
  },
  {
    title: "Development",
    percentage: 50,
    description: "lorem ipusm dolor sit amet consectetur adispiscing elit elit. Ipsam, suscipit?"
  }

];

export const stats2 =[
    {value: "375+", label: "Projects"},
    {value: "247+", label: "Clients"},
    {value: "13+", label: "Countries"},
    {value: "13+", label: "Teams"},
]

 export const team = [
  {
    name: "Jeremy White",
    role: "Consultant",
    img: "team1-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    name: "Sofia Mayer",
    role: "Consultant",
    img: "team2-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    name: "Charlie Addissn",
    role: "Manager",
    img: "team3-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    name: "Richard Nautz",
    role: "Founder",
    img: "team4-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
];


 export const plans = [
  {
    name: "Regulars Package",
    price: "$289",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint?",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
    ],
    highlighted: false,
  },
  {
    name: "Standard Package",
    price: "$541",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae.",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
    ],
    highlighted: true,
  },
  {
    name: "Premium Package",
    price: "$756",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic!",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
    ],
    highlighted: false,
    hasButton: true,
  },
];

export const testimonials = [
    {
        id: 1,
        name:"Carlie Addison",
        role:"Manager",
        image: "testimonial1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
    {
        id: 2,
        name: "Olivia Grosh",
        role: "Consultant",
        image: "testimonial2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
];

