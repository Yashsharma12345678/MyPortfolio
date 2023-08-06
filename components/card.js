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
        </div>
        </Link>
    </div>
  )
}

export default Card