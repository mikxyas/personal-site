import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-20'>
      <div className='container p-10'>
        <h1 className='text-5xl  font-bold'>Mikiyas Ayele</h1>
        <p className='text-lg mt-4 font-medium text-gray-600'>Computer Nerd</p>
        <p className='text-lg font-medium mt-4 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsam libero sunt labore aliquam tenetur possimus sapiente quisquam tempora. Assumenda id iste perspiciatis temporibus, mollitia recusandae quia a facere iure.</p>
        <a target='_blank' href='https://github.com/iammikiyas'><button className='p-1 mt-4 bg-black  text-white pl-3 pr-3 font-medium'>Github</button></a>      
        <a target='_blank' href='https://t.me/mikiyas_tg'><button className='p-1 mt-4 bg-black ml-2  text-white pl-3 pr-3 font-medium'>Telegram</button></a>      
      </div>
      <div className="container flex p-10 mt-20 ">
        <div className='p-2 w-80'> 
          <h1 className='text-4xl font-bold'>Project title</h1>
          <p className='leading-5 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus exercitationem reprehenderit excepturi fugiat repellat minima similique.</p>
          <button className='p-1 mt-4 border-2 border-black pl-2 pr-2 font-medium'>Check it out</button>
          <button className='p-1 ml-2 bg-black border-black border-2 text-white pl-2 pr-2 font-medium'>Github</button>
        </div>
        <div className='p-2 w-80'> 
          <h1 className='text-4xl font-bold'>Project title</h1>
          <p className='leading-5 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus exercitationem reprehenderit excepturi fugiat repellat minima similique.</p>
          <button className='p-1 mt-4 border-2 border-black pl-2 pr-2 font-medium'>Check it out</button>
          <button className='p-1 ml-2 bg-black border-black border-2 text-white pl-2 pr-2 font-medium'>Github</button>
        </div>
         <div className='p-2 w-80'> 
          <h1 className='text-4xl font-bold'>Project title</h1>
          <p className='leading-5 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus exercitationem reprehenderit excepturi fugiat repellat minima similique.</p>
          <button className='p-1 mt-4 border-2 border-black pl-2 pr-2 font-medium'>Check it out</button>
          <button className='p-1 ml-2 bg-black border-black border-2 text-white pl-2 pr-2 font-medium'>Github</button>
        </div>
      </div>
    </div>
  )
}
