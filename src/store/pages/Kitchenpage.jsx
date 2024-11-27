import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'

const Kitchenpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {kitchenData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/kitchen/${item.id}`} ><img src={item.image} alt="" /></Link>
                    
                </div>
                <div className="model">
                  {item.type}<br/>{item.model}
                </div>

            </div>
            )
           
        })}
    </div>
    </>
  )
}

export default Kitchenpage