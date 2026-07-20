import React from "react";
import { portfolioItem, portfolioOptions } from "../constantes";
import { useState } from "react";
import type { propsPortofolio } from "../type/portofolio";
import { Sparkles } from "lucide-react";


export default function Portfolio (){
    
    const [card, setCard] = useState<propsPortofolio[]>(portfolioItem);

    //gestion du click
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        const valeur = event.currentTarget.value;
        if (valeur ==="All"){
            setCard(portfolioItem);
        } else {
            const filter = portfolioItem.filter((item) => item.categorie === valeur);
            setCard(filter);
        }
    }
    

return (
    
    <div>
        
        
        <div className="flex items-center gap-3 justify-center">
            {portfolioOptions.map((item,index) =>(
                <div key={index}>
                    <button value={item} onClick={handleClick}>
                        {item}
                    </button>
                </div>
            ))}
        </div>
        <div className=" grid grid-cols2 lg:grid-cols-4 m-h-24 ">
            {card.map ((item,index ) => (
                <div key={index} className="relative">
                    <img 
                    src={item.img} 
                    alt={item.nom} />
                    <div className="absolute top-0 w-full bg-blue-600 h-full flex flex-col gap-2 justify-center items-center text-white opacity-0 hover:opacity-60 duration-150 ease-in transition-opacity cursor-pointer px-8">

                        <Sparkles />
                        <p>{item.nom}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
);
};