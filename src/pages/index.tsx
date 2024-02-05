import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <div className='flex items-center flex-col'>
        {/* <p className=' text-lg'>Trying to accelerate humanity towards a better future.</p>
        <p className='text-lg'>Some stuff I made</p>
        <div className='ml-8 mt-4'>
          <img style={{ width: '10em' }} src='cooking.png' />
        </div> */}
        <p className='text-3xl'> Mikiyas Ayele</p>
        <p>Wrestling with Technology</p>
        <p className='text-gray-500 text-sm'>mikiyas.dev@gmail.com</p>
      </div>
    </div>
  )
}
