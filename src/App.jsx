import Cube from './components/Cube'
import Navbar from './components/Navbar'
import ProjectContainer from './components/Project'
import Section from './components/Motion-Wrapper'
import TechStack from './components/Tech-Stack'
import { motion } from 'framer-motion'

function App() {


  return (
    <main className='flex flex-col justify-center items-center gap-44 '>
      <Navbar />
      <Cube />



      <motion.div initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-2xl  -mt-24 -mb-36 "
      >
        <img className='border-black border-4 shadow-xl border-solid max-w-xs rounded-full' src='/me.jpg' />
      </motion.div>



      <Section delay={0.1}>

        <h1 className='text-4xl text-center'>
          Nicholas Hoong (Fullstack developer)
        </h1>
      </Section>

      <Section delay={0.2}>


        <h2 className='font-semibold'>Bio</h2>
        <article className='text-lg indent-8'>Hey there! I'm an amateur web developer from Vancouver who is just starting out on this exciting journey of building websites. I have a strong passion for technology and enjoy tinkering with code to see how things work. Although I'm relatively new to the field, I'm eager to learn and improve my skills in HTML, CSS, JavaScript, and other programming languages. I'm excited about the endless possibilities of web development and the potential to create beautiful, functional websites that make people's lives easier. In my free time, I love browsing online forums and watching video tutorials to expand my knowledge and gain inspiration for new projects. I'm looking forward to growing as a developer and contributing to the amazing web development community.</article>

      </Section>

      <Section delay={0.3}>
        <TechStack />
      </Section>

      <Section delay={0.4}>
        <ProjectContainer />
      </Section>

      <Section delay={0.5}>
        <h2 className='font-semibold'>Contacts</h2>
        <div className='w-'>
          <div className='flex items-center gap-6 mb-6'>

            <svg aria-hidden="true" viewBox="0 0 16 16" className='h-8'>
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <a className='text-lg text-blue-500' href='https://github.com/not-a-bumblebee'>https://github.com/not-a-bumblebee</a>
          </div>




          <p className='text-xl'>Email: <a className='text-blue-500' href='mailto:BirdDeleter@gmail.com'>BirdDeleter@gmail.com</a></p>
        </div>
      </Section>

      <footer className='mb-5'>
        @ pp
      </footer>


    </main>
  )
}

export default App
