import React from 'react'
import Mobiles from './Mobiles'
import { Computr } from './Computr'

import Books from './Books'
import { Fridge } from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Men from './Men'
import Watch from './Watch'
import Woman from './Woman'
import Ac from './Ac'


const Products = () => {
 
  return (
    <div>
      <Mobiles/>
      <Computr/>
      <Watch/>
      <Men/>
      <Woman/>
      <Ac/>
      <Books/>
      <Fridge/>
      <Furniture/>
      <Kitchen/>
      
     
    </div>
  )
}

export default Products