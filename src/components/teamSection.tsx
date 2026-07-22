
import { team } from "../constantes";

export default function teamSection() {
    return (
        <section className= "min-h-screen flex items-center justify-center h-full  bg-white py-20 min-h-24">
            <div className="max-w-7xl mx-auto px-6 p-6 m-5 space-x-3">
                <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-800 mb-16">
                    Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {team.map((member) => (
                        <div key={member.id} className="group flex flex-col items-center">
                          <div className="overflow-hidden roundded">
                           <img 
                           src={member.img} 
                           alt={member.name}  className="w-full h-[360px] object-cover transition-all duration-500 group-hover:scale-110 bg-blue-600"/> 
                         
                        </div>
                        <h3 className="mt-6 text-3xl font-bold text-gray-800 text-center">
                            {member.name}
                        </h3>
                        <p className="text-gray-400 text-xl">
                            {member.role}
                        </p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    )
}