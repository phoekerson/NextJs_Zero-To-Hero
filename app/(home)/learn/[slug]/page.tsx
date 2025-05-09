import React from 'react'
import Image from 'next/image'
type Props= {
    params: {
        slug: "string"
    }
}
const page = (
    {params}:Props
) => {
  return (
    <div>
        {params.slug}
        <Image 
            src="/caleb.jpg"
            width={140}
            height={150}
            alt={'caleb image'}
            />
    </div>
  )
}

export default page