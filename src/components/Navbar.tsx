import { Link } from 'react-router-dom'
import logo from "../assets/image/logo (1).png"

import { navList } from '../constantes';


export default  function Navbar() {
  return (
    <section className='gap-12 bg-slate-900 p-12 fixed top-0 w-full z-50 '>
      
       <div className=' flex justify-around items-center'>
         <img 
        src={logo}
         alt="logo" 
          />
    
      {navList.map((item,index)=>(
      <nav key={index} className='text-white  hover:text-green-600'>
        <Link to={item.lien}>{item.nom}</Link>
      </nav>
      ))}

       </div>
       
    
   
     </section>
  );
}
