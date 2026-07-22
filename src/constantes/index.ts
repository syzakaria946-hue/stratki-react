import {  type pricingPlan } from './../type/pricing';
import type { TeamMember } from "../type/team";
import type { SkillsProps } from "../type/skills";
import type { ServiceProps } from "../type/Service";
import service1 from "../assets/image/service1.png";
import service2 from "../assets/image/service2.png";
import service3 from "../assets/image/service3.png";
import service4 from "../assets/image/service4.png";
import service5 from "../assets/image/service5.png";
import service6 from "../assets/image/service6.png";
import portfolio1 from "../assets/image/portfolio-1.png";
import portfolio2 from "../assets/image/portfolio-2.png";
import portfolio3 from "../assets/image/portfolio-3.png";
import portfolio4 from "../assets/image/portfolio-4.png";
import portfolio5 from "../assets/image/portfolio-5.png";
import portfolio6 from "../assets/image/portfolio-6.png";
import portfolio7 from "../assets/image/portfolio-7.png";
import portfolio8 from "../assets/image/portfolio-8.png";
import portfolio9 from "../assets/image/portfolio-9.png";
import type { propsPortofolio } from "../type/portofolio";
import type { meunType } from "../type/navabar";
import team1 from "../assets/image/team1.jpg";
import team2 from "../assets/image/team2.jpg";
import team3 from "../assets/image/team3.jpg";
import team4 from "../assets/image/team4.jpg";

export const navList: meunType[] = [
  {
    lien: "/",
    nom: "Home",
  },
  {
    lien: "/about",
    nom: "About Us",
  },
  {
    lien: "/service",
    nom: "Srevice",
  },
  {
    lien: "/portfolio",
    nom: "Portfolio",
  },
  {
    lien: "/team",
    nom: "Team",
  },
  {
    lien: "/pricing",
    nom: "Pricing",
  },
  {
    lien: "/contact",
    nom: "Contact",
  },
];

export const Service: ServiceProps[] = [
  {
    icon: service1,
    title: "Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    icon: service2,
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    icon: service3,
    title: "Concept & Idea",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    icon: service4,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    icon: service5,
    title: "Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    icon: service6,
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
];

export const SkillsProp: SkillsProps[] = [
  {
    title: "Market Analysis",
    percentage: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    title: "Optimization",
    percentage: 90,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    title: "Integration",
    percentage: 80,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",
  },
  {
    title: "Development",
    percentage: 50,
    description:
      "lorem ipusm dolor sit amet consectetur adispiscing elit elit. Ipsam, suscipit?",
  },
];

export const portfolioOptions = [
  "All",
  "Development",
  "Optimization",
  "Integration",
  "Marketing",
  "Test",
];

export const portfolioItem: propsPortofolio[] = [
  {
    img: portfolio1,
    nom: "porto1",
    categorie: portfolioOptions[1],
  },
  {
    img: portfolio2,
    nom: "porto2",
    categorie: portfolioOptions[1],
  },
  {
    img: portfolio3,
    nom: "porto3",
    categorie: portfolioOptions[2],
  },
  {
    img: portfolio4,
    nom: "porto4",
    categorie: portfolioOptions[1],
  },
  {
    img: portfolio5,
    nom: "porto5",
    categorie: portfolioOptions[2],
  },
  {
    img: portfolio6,
    nom: "porto6",
    categorie: portfolioOptions[3],
  },
  {
    img: portfolio7,
    nom: "porto7",
    categorie: portfolioOptions[3],
  },
  {
    img: portfolio8,
    nom: "porto8",
    categorie: portfolioOptions[1],
  },
  {
    img: portfolio9,
    nom: "porto9",
    categorie: portfolioOptions[4],
  },
];

export const  Stats= [
  {value:"375+", label: "Projects"},
  {value: "248+", label:"Clients"},
  { value: "14+", label:"Countries"},
  {value: "18+", label: "Team"}
];
 
export const team: TeamMember[]  = [
 {
   id: 1,
   name: "Jeremy White",
   role: "Consultant",
   img: team1,
 },
 {
   id: 2,
   name: "Sofia Mayer",
   role: "Consultant",
   img: team2,
 },
 {
   id: 3,
   name: "Carlie Addison",
   role: "Manger",
   img: team3,
 },
 {
   id: 4,
   name: "Richard Nautz",
   role: "Founder",
   img: team4,
 },

];


export const pricingPlans: pricingPlan[]=[
  {
    id:1,
    title:"Regulars Package",
    price:"$289",
    featured:false,
    description:"lorem ipsum dolor sit amet connsecttetur adipisicing elit.Optio sint?",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
    ]
  },
  {
    id:2,
    title:"Standard Package",
    price:"$541",
    featured:true,
    description:"lorem ipsum dolor sit amet connsecttetur adipisicing elit.Optio sint?",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
    ]
  },
  {
    id:3,
    title:"Premium Package",
    price:"$756",
    featured:false,
    description:"lorem ipsum dolor sit amet connsecttetur adipisicing elit.Optio sint?",
    features: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
    ]
  }

]

