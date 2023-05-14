import React from 'react'
import headimg from '../assets/imgs/imghead.jpg'







const Header = () => {
  return (
    <section className='  '>
        <div className='bg-black'>
          <img className=' opacity-70 w-[100%]' src={headimg} alt="" />
        </div>
        {/* <div>
            <ul className='flex flex-wrap gap-2 items-center justify-around  bg-blue-100 '>
                <li>Principal</li>
                <li>Seccion</li>
                <li>Acerca de mí</li>
                <li>Seccion</li>
                <li>Acerca de mí</li>
            </ul>
        </div> */}

        
    </section>
  )
}

export default Header