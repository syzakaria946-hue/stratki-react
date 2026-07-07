
import bg from '../assets/image/bg-header.png'

 export default function Home() {
  return (
    <section
      className="h-screen bg-black/60  bg-blend-multiply bg-cover bg-center" style={{backgroundImage:`url(${bg})`}}>
      <div className=" z-10 h-full flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-7xl font-bold text-white leading-tight">

            <span className="text-blue-500">
              Creative
            </span>

            {" "} & Innovative

            <br />

            Digital Agency

          </h1>

        </div>

      </div>
    </section>
  );
}



