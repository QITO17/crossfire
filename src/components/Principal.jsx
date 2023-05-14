import React from 'react'
import nemesis from '../assets/imgs/nemesis.png'
import irom from '../assets/imgs/irom.png'
import prision from '../assets/imgs/prision.jpg'
import resort from '../assets/imgs/resort.jpg'
import mo from '../assets/imgs/mo.jpg'
import free from '../assets/imgs/free.jpg'
import black from '../assets/imgs/black.jpg'
import gost from '../assets/imgs/gost.jpg'
import char1 from '../assets/imgs/char1.png'
import xander from '../assets/video/xander.mp4'
import Footer from './Footer'

const Principal = () => {
  return (
    <div>
        <div className=' mt-16 '>
        </div>

        <div className='flex justify-center items-center gap-14 px-2 max-w-[1024px]
        mx-auto flex-wrap'>
            <div className='max-w-[350px]'>
                <h2 className='font-bold'>Que es el crossfire?</h2>
                <p>CrossFire es un videojuego de disparos en primera persona online para Microsoft Windows desarrollado por la empresa surcoreana SmileGate.</p>
            </div>
            
            <div className='max-w-[600px]'>
                <img className='w-[100%]' src={nemesis} alt="" />
            </div>
        </div>


        <div className=' mt-16 '>
        </div>


        <div className='max-w-[800px] mx-auto'>
            <p>¿Qué tan largo es Outriders?
¿Cuánto dura el juego? Depende por completo de vuestra manera de jugar. Si os centráis solo en la campaña principal o en una sola clase, tardaréis unas 25 o 30 horas; el doble o el triple si acabáis todas las misiones secundarias, el contenido después de la campaña y adicional de Outriders.</p>
¿Qué pasó con Crossfire es?
CrossfireX cerrará sus puertas en mayo, incluyendo sus campañas para un jugador. Smilegate Entertainment ha anunciado que CrossfireX desaparecerá para siempre el 18 de mayo. Ni su modo campaña ni su multijugador serán accesibles en Xbox Series X/S y Xbox One
        </div>

        <div className=' mt-16 '>
        </div>

        <div className='flex flex-row-reverse justify-center items-center gap-14 px-2 max-w-[1024px]
        mx-auto flex-wrap'>
            <div className='max-w-[350px]'>
                <h2 className='font-bold'>Cuantas personas lo juegan?</h2>
                <p>Con la excepción del modo zombi y el modo Wave, cada modo puede soportar un máximo de 16 jugadores, cada uno dividido en un equipo de 8 personas.</p>
            </div>
            
            <div className='max-w-[600px]'>
                <img className='w-[100%]' src={irom} alt="" />
            </div>
        </div>
        <div className=' mt-16 '>
        </div>
        
        <h2 className='text-center font-bold text-blue-300 text-[1.3rem]'>Mapas</h2>
        <div className=' mt-4 '>
        </div>
        <div className=' flex flex-wrap max-w-[1024px] gap-7 mx-auto justify-center items-center'>
            <div>
                <div>
                    <p className="max-w-[270px] text-center px-1 py-1">Team Deathmatch Los equipos trabajan hacia objetivos, como primero a x muchas muertes, o el equipo con más muertes.</p>
                </div>
                <div className='max-w-[270px]'>
                    <img className='w-full h-full' src={prision} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <p className="max-w-[270px] text-center px-1 py-1">Search & Destroy El objetivo de Black List es plantar y detonar una carga C4 en un lugar designado o matar a todos los</p>
                </div>
                <div className='max-w-[270px]'>
                    <img className='w-full h-full' src={black} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <p className="max-w-[270px] text-center px-1 py-1">Free for All Un modo sin equipos en el que el principal objetivo del jugador es el de matar a los demás jugadores.</p>
                </div>
                <div className='max-w-[270px]'>
                    <img className='w-full h-full' src={free} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <p className="max-w-[270px] text-center px-1 py-1">Modo Ghost Modo en el que los jugadores pertenecientes al equipo de "Lista Negra" son invisibles al estar inmóviles</p>
                </div>
                <div className='max-w-[270px]'>
                    <img className='w-full h-full' src={gost} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <p className="max-w-[270px] text-center px-1 py-1">Elimination Similar al modo de Search & Destroy, pero sin una bomba que plantar o puntos que defender.</p>
                </div>
                <div className='max-w-[270px]'>
                    <img className='w-full h-full' src={mo} alt="" />
                </div>
            </div>

            <div>
                <div>
                    <p className="max-w-[270px] text-center px-1 py-1">Resort Los jugadores del equipo de "Lista Negra" emiten un fuerte sonido de respiración, pasos</p>
                </div>
                <div className='max-w-[270px]'>
                    <img className='w-full h-full' src={resort} alt="" />
                </div>
            </div>
        </div>
        
        <div className='mt-16'>
        </div> 

        <div className='flex justify-center items-center gap-14 px-2 max-w-[1024px]
        mx-auto flex-wrap'>
            <div className='max-w-[350px]'>
                <h2 className='font-bold'>La Fox</h2>
                <p className='text-red-400 font-semibold'>FOX es considerado por muchos jugadores como el personaje más sexy, y esta reputación aún se mantiene. El personaje de GR usa una falda azul oscuro con los botones del cuello desabrochados, revelando parcialmente su sostén, mientras que BL usa una versión amarilla similar pero sin mangas, para mostrar un tatuaje en su brazo izquierdo y además tiene una gorra. Ambos personajes también usan calcetines largos y tacones altos.</p>
            </div>
            
            <div className='max-w-[600px]'>
                <img className='w-[100%]' src={char1} alt="" />
            </div>
        </div>

        <div className='mt-16'>
        </div> 

        <div className='max-w-[900px] mx-auto'>
            <p>En 2013, fue uno de los tres videojuegos más populares de China, con un ingreso de casi $ 1 mil millones.8​ Fue el juego en línea con mayor recaudación del mundo de 2014 con 1.5 billones de won (1.300 millones de dólares). A partir de 2016, CrossFire ha recaudado 6.800 millones de dólares, lo que lo convierte en uno de los videojuegos de mayor recaudación de todos los tiempos. CrossFire es el juego FPS online más jugado en todo el mundo, con más de 8 millones de usuarios simultáneos y 650 millones de jugadores registrados según el desarrollador Smilegate.9​</p>
        </div>


        <div className='mt-16'>
        </div>


        <h1 className='text-center my-10 text-blue-500 font-semibold'>A Continuación un video de INZ_XANDER Derechos reservados al autor del video</h1>
        <div>
        <video autoPlay loop controls className='w-[1024px] mx-auto'>
            <source src={xander} type="video/mp4" />
        </video>
        </div>

        <div className=' mb-36 '>
        </div>

        <Footer />
    </div>
  )
}

export default Principal