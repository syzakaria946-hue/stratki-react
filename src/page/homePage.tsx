import aboutus from "../assets/image/aboutus-COMvwa4W.png";
import Sy from "../assets/image/Sy.jpg";
import bg from "../assets/image/bg-header.png";
import { pricingPlans, Service, SkillsProp, Stats, team } from "../constantes";
import CardSvg from "../components/cardSvg";
import Portfolio from "../components/portoflio";
import PricingCard from "../components/pricingCard";
import pricing from "../assets/image/pricing.png"

export default function Home() {
  return (
    <section
      className="h-screen bg-black/60  bg-blend-multiply bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white leading-tight">
            <span className="text-blue-500">Creative</span> & Innovative
            <br />
            Digital Agency
          </h1>
        </div>
      </div>

      <div className="py-20 min-h-24"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center ">
        {/* Image */}
        <div className="relative gap-4">
          <img
            src={aboutus}
            alt="About"
            className="w-full h-150 object-cover rounded"
          />

          {/* Experience Card */}
          <div className="absolute bottom-8 left-0 bg-green-500 text-white w-40 h-40 flex flex-col justify-center items-center rounded shadow-lg">
            <h2 className="text-5xl font-bold ">12</h2>

            <p className="text-center mt-2 text-lg">
              Years
              <br />
              Experience
            </p>
          </div>
        </div>

        {/* Texte */}
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            About Creative Agency
          </h1>

          <p className="text-gray-500 leading-8 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            voluptates porro. Unde nemo ipsum maxime libero architecto
            voluptates, voluptatem assumenda ullam natus consequuntur blanditiis
            quaerat deserunt.
          </p>

          <p className="text-gray-500 leading-8 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nemo debitis libero sed quidem ducimus ratione maiores, ex deleniti
            vitae reprehenderit.
          </p>

          <p className="text-gray-500 leading-8 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            facere numquam a itaque inventore saepe quo adipisci sed ipsam.
          </p>

          {/* Founder */}

          <div className="flex items-center gap-4">
            <img
              src={Sy}
              alt="Sy"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h3 className="text-xl font-bold text-gray-800">Richard Nautz</h3>

              <p className="text-gray-500">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton */}

      <button className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded flex items-center justify-center text-2xl shadow-lg transition">
        ↑
      </button>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-800 py-3">
            Our Services
          </h2>
        </div>
      </section>

      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-3 group my-20 mx-10 justify-center items-center p-20 py-30 pt-20">
        {Service.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center sm:justify-self-start sm:items-start p-5 "
          >
            <img src={item.icon} alt={item.title} className="my-4" />
            <h2 className="my-2 font-bold text-2xl">{item.title}</h2>
            <p className="opacity-50">{item.description}</p>
          </div>
        ))}
      </div>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-emerald-500 py-3">
            Our Skills
          </h2>
        </div>
      </section>

      {/* <div className="flex justify-center items-center">
              <div className="flex items-center m-0">
                <svg viewBox="0 0 36 36" className="w-full h-full shrink-0">
                  < path d="M18 2a16 16 0 010 32 16 16 0 010-32" strokeDasharray="100" strokeWidth="2.8" strokeLinecap="round" stroke="#F8F8F8" fill="#fff"/>
                  < path d="M18 2a16 16 0 010 32 16 16 0 010-32" strokeDasharray="100, 100" strokeWidth="2.8" strokeLinecap="round" stroke="#5BC86D" fill="#fff"/>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#5BC86D" className="text-xs font-normal relative">100%</text>
                </svg>
              </div>
              
             </div> */}

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {SkillsProp.map((item, index) => (
          <CardSvg
            description={item.description}
            percentage={item.percentage}
            title={item.title}
            key={index}
          />
        ))}
      </div>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-800 py-3">
            Our Portfolio
          </h2>
          <h3 className="text-5xl md:text-5xl font-extrabold text-slate-800 py-3"></h3>
        </div>
      </section>
      <Portfolio></Portfolio>

      <section
        id="services"
        className=" min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-800 py-3 "></h2>
        </div>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 p-1.5">
        {Stats.map((stat) => (
          <div
            key={stat.label}
            className=" bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 text-center"
          >
            <div className="text-2xl md:text-3xl font-bold text-green-600">
              {stat.value}
              <div className="mt-2 text-slate-700 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
        <section className="  min-h-screen flex items-center justify-center  h-full bg-white py-20 min-h-24">
      <div className="max-w-7xl mx-auto px-6 min-h-24 p-6 m-5 space-x-3">
        <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-800 mb-16">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {team.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              <div className="overflow-hidden roundded">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[360px] object-cover transition-all duration-500 group-hover:scale-110 bg-blue-600"
                />
              </div>
              <h3 className="mt-6 text-3xl font-bold text-gray-800 text-center">
                {member.name}
              </h3>
              <p className="text-gray-400 text-xl">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
       
       <section className=" bg-size/60 bg-blend-multiply  relative py-24 overflow-hidden h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${pricing})`
      
      }}>
      <div className="max-w-7xl mx-auto px-6 relative">

        <h1 className="text-center text-6xl font-extrabold text-white mb-20">
          Pricing Plan
        </h1>

        <div className="relative mt-24 flex flex-col lg:flex-row justify-center items-end text-center">

          {/* Carte gauche */}
  <div className="w-full lg:w-[32%] text-center">
    <PricingCard plan={pricingPlans[0]} />
  </div>

  {/* Carte du milieu */}
  <div className="w-full lg:w-[36%] lg:-mx-8 lg:-translate-y-12 z-20 text-center">
    <PricingCard plan={pricingPlans[1]} />
  </div>

  {/* Carte droite */}
  <div className="w-full lg:w-[32%] text-center">
    <PricingCard plan={pricingPlans[2]} />
  </div>

</div>
         
        </div>
    </section>
         
       


      
    </section>
  );
}
