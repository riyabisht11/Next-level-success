import React from 'react'
import Buisnessleader from './Buisnessleader'
import Recommend from './Recommend'



function Recommendbigscreen() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-16 py-5 md:py-10  gap-14 lg:gap-28 flex flex-col md:flex-row justify-between">
       <Recommend/>
        <Buisnessleader/>
        
    </div>
  )
}

export default Recommendbigscreen

