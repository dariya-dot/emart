import React from 'react'
import { menData } from '../data/men'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'
const Menspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {menData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/mens/${item.id}`} > <img src={item.image} alt="" /></Link>
                    
                </div>
                <div className="model">
                  {item.brand}<br/>{item.model}
                </div>

            </div>
            )
           
        })}
    </div>
    </>
  )
}

export default Menspage