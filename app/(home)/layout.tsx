import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
type Props = {
    children: React.ReactNode
}
const layout = ({children} : Props) => {
  return (
    <div className='w-full h-screen flex flex-col '>
      <Header />
      {children}
      <Footer />
    </div>


  )
}

export default layout
