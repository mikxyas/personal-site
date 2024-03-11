import Image from 'next/image'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { motion } from 'framer-motion'

export default function Home() {

  return (

    <div className='flex mainbg items-center justify-center flex-col h-screen w-screen'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex text-white p-8 lg:p-0 lg:pl-28 lg:pt-20 cont-container flex-col bg-black'>
          <div>

            <h1 className='epic-font  mainTitle'>MIKIYAS AYELE</h1>


            <h3 className='epic-font mainDesc mb-3'>FULL STACK DEVELOPER</h3>
            <div className='gap-3 mt-2 flex'>
              <GitHubIcon />
              <LinkedInIcon />
              <XIcon />
            </div>
          </div>
          <div className='mt-10'>
            <h1 className=' text-4xl subTitle epic-font'>PROJECTS</h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className='project-card mt-5'>
                <h1 className='flex items-center epic-font text-3xl subTitle justify-between'><span>BOOKNOTE</span><GitHubIcon /></h1>
                <h3 className='mainDesc'>Web app that helps you track your reading notes</h3>
              </div>
            </motion.button>
          </div>
          {/* <div className='mt-10'>
          <h1 className=' text-4xl subTitle epic-font'>CERTIFICATIONS</h1>
          <div className='flex   mt-7 cert-container' >
            <div className='cert-card flex justify-center flex-col  items-center'>
              <Image className=' rounded-2xl' width={150} height={100} alt='hi' src='/space.png' />
              <h3 className='epic-font text-md mt-3 text-center'>NASA COMP.</h3>
            </div>
            <div className='cert-card ml-3 flex justify-center flex-col items-center'>
              <Image className=' rounded-2xl' width={140} height={100} alt='hi' src='/cs.png' />
              <h3 className='epic-font text-md mt-3 text-center'>HARVARD CS50</h3>

            </div>
            <div className='cert-card ml-3 flex justify-center flex-col items-center'>
              <Image className=' rounded-2xl' width={160} height={100} alt='hi' src='/stem.png' />
              <h3 className='epic-font text-md mt-3 text-center'>STEM TRAINING</h3>

            </div>
          </div>
        </div> */}
        </div>
      </motion.div>
    </div >

  )
}
