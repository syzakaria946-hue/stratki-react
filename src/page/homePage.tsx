import aboutus from "../assets/image/aboutus-COMvwa4W.png";
import Sy from "../assets/image/Sy.jpg";
import bg from "../assets/image/bg-header.png";
import { plans, Service, SkillsProp, stats2, team } from "../constantes";
import { CheckIcon } from "lucide-react";
import CardSvg from "../components/cardSvg";

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


      <div className="w-full bg-white py-16 px-6 pt-15 gap-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats2.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl pt-10 flex flex-col gap-10 "
            >
              <span className="text-3xl md:text-4xl font-bold text-green-500">
                {stat.value}
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center"></div>
        <section className="bg-white py-16 px-6 text-center">
          <h2 className="text-center text-5xl md:text-7xl font-extrabold text-slate-800 py-3">
            Our Team
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-xl overflow-hidden bg-slate-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-3/4 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-700 py-3">
          Pricing Plan
        </h2>
      </div>
      <section
        id="services"
        className="min-h-screen flex fl items-center justify-center bg-white"
      >
        <svg
          className="w-5 h-5 shrink-0 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <section className="bg-linear-to-br from-emerald-800 to-emerald-950 py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-blue-600 text-white md:scale-110 shadow-2xl z-10 py-12"
                    : "bg-white text-slate-900 shadow-lg"
                }`}
              >
                <h3
                  className={`text-center text-2xl font-extrabold mb-4 ${
                    plan.highlighted ? "text-green-400" : "text-blue-600"
                  }`}
                >
                  {plan.name}
                </h3>

                <p className="text-center text-4xl font-extrabold mb-6">
                  {plan.price}
                </p>

                <p
                  className={`text-center text-sm mb-6 ${
                    plan.highlighted ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-800 py-3">
            Testimonials
          </h2>
        </div>
      </section>
    </section>
  );
}
