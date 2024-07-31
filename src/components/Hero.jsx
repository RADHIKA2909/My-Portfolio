import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* For the vertical gradient line ---------------------   */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 h-80 violet-gradient'/>
        </div>

        {/* For Name and Desc  ---------------------  */}
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className='text-[#915eff]'> Radhika</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Web developer with a proven ability to adapt <br className='sm:block hidden' />
          in both self-starting and collaborative environments
          </p>
        </div>
      </div>

      {/* Computer Canvas 3D model ---------------------  */}
      <ComputersCanvas />

      {/* For bottom scrollbar ---------------------  */}
      <div className='absolute xs:bottom-5 bottom-28 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[24px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start'>
             <motion.div        //  This is for the inner circle of the scrolbar    
              animate={{
                y: [0, 22, 0]         
              }}
              transition={{                   
                duration: 1.5,        
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
             />   
          </div>
        </a>
      </div>



    </section>
  )
}

export default Hero