import React from "react";
import { Stats } from "../constantes";



export default function StatsSection() {
    return (
        <section className=" w-full bg-gray-50 py-16 px-9 ">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Stats.map((stat) => (
                    <div key={stat.label} className=" bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                        <div className="text-3xl md:text-4xl font-extrabold text-green-600">
                            {stat.value}
                            <div className="mt-2 text-slate-700 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}