import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='flex items-center flex-col pt-4'>
      <div>
        <p className=' text-lg'>Trying to accelerate humanity towards a better future.</p>
        <p className='text-lg'>Some stuff I made</p>
        <div className='ml-8 mt-4'>
          <img style={{ width: '10em' }} src='cooking.png' />
        </div>
      </div>
    </div>
  )
}
