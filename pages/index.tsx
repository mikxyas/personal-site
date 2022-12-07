import Head from 'next/head'
import Image from 'next/image'

import BragCard from '../components/BragCard'
export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-white bg-black">
      <div className=' justify-center items-center'>
        <p className=' text-8xl font-bold '> Hello; I am Mikiyas</p>
        <p className='text-2xl font-semibold flex ml-2 mt-3 tracking-widest'>Greetings from my online residence!</p>
        <p className='ml-3  tracking-spaced text-lg leading-tight	mt-3'>When I was 13 years old, I first began to learn how to code, and ever since, <br/>it has unquestionably been a significant part of my life.<br/> On my blog I share what I&apos;ve discovered about the world and myself.<br/>Scroll down to see some of the projects I&apos;ve created.</p>
      </div>
    </div>

  )
}
