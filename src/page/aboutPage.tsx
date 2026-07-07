import aboutus from "../assets/image/aboutus-COMvwa4W.png";
import Sy from "../assets/image/Sy.jpg";



export  default function About() {   
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative">

          <img
            src={aboutus}
            alt="About"
            className="w-full h-150 object-cover rounded"
          />

          {/* Experience Card */}
          <div className="absolute bottom-8 left-0 bg-green-500 text-white w-40 h-40 flex flex-col justify-center items-center rounded shadow-lg">

            <h2 className="text-5xl font-bold">
              12
            </h2>

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam, voluptates porro. Unde nemo ipsum maxime libero
            architecto voluptates, voluptatem assumenda ullam natus
            consequuntur blanditiis quaerat deserunt.
          </p>

          <p className="text-gray-500 leading-8 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur nemo debitis libero sed quidem ducimus ratione
            maiores, ex deleniti vitae reprehenderit.
          </p>

          <p className="text-gray-500 leading-8 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis facere numquam a itaque inventore saepe quo
            adipisci sed ipsam.
          </p>

          {/* Founder */}

          <div className="flex items-center gap-4">

            <img
              src={Sy}
              alt="Sy"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Richard Nautz
              </h3>

              <p className="text-gray-500">
                Founder & CEO
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bouton */}

      <button className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded flex items-center justify-center text-2xl shadow-lg transition">
        ↑
      </button>

    </section>
  );
}

