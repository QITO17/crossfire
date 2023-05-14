import React from 'react'
import logo from '../assets/imgs/logocf.png'
const Footer = () => {
  return (
    <div className='  bg-gray-900 '>
        <div className='flex flex-wrap md:justify-between items-center justify-center  max-w-[1024px] mx-auto '>
            <ul className='flex flex-col items-center'>
                <li>#CF VIVE</li>
                <li>#REVIVAMOS EL CF</li>
                <li>#EL JUEGO DE MI INFANCIA</li>
            </ul>

            <div className='max-w-[400px]'>
            <img className='w-full' src={logo} alt="" />
            </div>
        </div>
       <div className='text-center'>
       <h1>MIS REDES</h1>
       <ul>
            <li>Linkedin <a href='https://www.linkedin.com/in/jostin-arley-hurtado-hinestroza-57ab49255/' target='_blank'><i className='bx bxl-linkedin-square text-blue-400 text-[1.3rem] font-semibold'></i></a></li>
            <li>Facebook <a href='https://wa.link/2ijldm'><i className='bx bxl-facebook-square wa text-green-400 text-[1.3rem] font-semibold'></i></a></li>
            <li>Whatsapp <a href=''><i className='bx bxl-whatsapp text-blue-400 text-[1.3rem] font-semibold'></i></a></li>
        </ul>
        </div> 
        
        
    </div>
  )
}

export default Footer