import Image from 'next/image';
import Link from 'next/link';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Hero from '../assets/hero.jpg';
import './globals.css'

export default function Home() {
  return (
    <div>
      <header className='p-10 py-48 bg-slate-500 lg:bg-hero-pattern flex flex-col justify-start items-start bg-cover bg-center text-white hero-background' style={{ backgroundImage: 'url(../assets/hero.jpg)' }}>
        <div id="cont" className='p-10 ml-auto lg:ml-52 bg-slate-500 opacity-100 lg:opacity-60 text-center lg:text-start'>
          <h1 className='text-6xl font-extrabold mb-8 text-white'>Webtor</h1>
          <p>Build your ultimate Frontend experience</p>
        </div>
      </header>

      <section className='flex justify-evenly flex-col-reverse lg:flex-row my-10 lg:my-auto items-center p-10'>
        <div id="text" className='flex-1 text-center lg:text-start'>
          <h1 className='text-3xl mb-4 font-bold text-slate-800'>Learn from Zero to Hero</h1>
          <p className='mb-5'>At Webtor, we turn beginners into frontend development heroes. Our course guides you step-by-step, from basic HTML, CSS, and JavaScript to advanced frameworks like React. With hands-on projects and expert mentorship, you'll gain the skills needed to thrive in the tech industry. Join us and transform your passion into professional prowess.</p>
          <p className='p-3 bg-slate-900 text-white inline-block'><Link href="/about">Learn more</Link></p>
        </div>
        <div id="img" className='flex-1 p-4'>
          <Image className='w-full h-auto' src={Img1} alt="Frontend Development" width={500} height={300} />
        </div>
      </section>

      <section className='flex justify-evenly flex-col lg:flex-row items-center p-10 my-10 lg:my-auto'>
        <div id="img" className='flex-1 p-4'>
          <Image className='w-full h-auto' src={Img2} alt="Frontend Development" width={500} height={300} />
        </div>

        <div id="text" className='flex-1 text-center lg:text-end'>
          <h1 className='text-3xl mb-4 font-bold text-slate-800'>Made for Cheap, Only $0.50!</h1>
          <p className='mb-5'>Get top-notch frontend development education for just $0.50! Our course note offers expert insights, hands-on projects, and all the resources you need to become a frontend pro—without breaking the bank. Grab it now and start your journey!</p>
          <p className='p-3 bg-slate-900 text-white inline-block'><Link href="/Contact">Contact us</Link></p>
        </div>
      </section>

      <footer className='text-center text-white py-10 bg-slate-950'>
        Webtor
      </footer>
    </div>
  );
}
