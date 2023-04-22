import Link from 'next/link'
import React from 'react'

function Card({desc,title,link}) {
  return (
    <div className='w-1/2 flex justify-between border border-gray-700 border-bg-[#282D34] bg-[#0C0E10] opacity-[0.8] rounded-lg p-5 mb-2 '>
      <Link href={`${link}`} target="_blank">
        <div className='flex items-center justify-between'> 

        <div>
        <h1 className='text-white font-bold text-xl'>{title}</h1>
        <p className=' text-gray-400 text-sm  '>{desc}</p>
        </div>
        

        
        {/* <div className='logo'>
        <svg className='h-8 text-white'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </div> */}
        </div>
        </Link>
        {/* description */}
        {/* logo */}
    </div>
  )
}

export default Card