import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWorkshop() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div
      ref={container}
      className='relative flex items-center justify-center h-[100vh] overflow-hidden bg-gray-800'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='absolute inset-0'>
        {/* <video
          className='w-full h-full object-cover'
          src='/images/lap2.mp4' // Ensure the path to the video file is correct
          autoPlay
          muted
          loop
          playsInline
        ></video> */}
      </div>
      <div className='relative z-10 p-20 text-white w-full h-full flex flex-col justify-between'></div>
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
        <motion.div style={{ y }} className='relative w-full h-full'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 mix-blend-overlay '>
            {' '}
            {/* Adjust blending mode */}
            <p className='text-[6vw] uppercase proshow'>MATHRIX TEAM</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
