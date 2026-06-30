function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative h-full flex items-center justify-center">

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

export default Home;