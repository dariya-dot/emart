import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'
const Womanspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {womanData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/womans/${item.id}`} ><img src={item.image} alt="" /></Link>
                    
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

export default Womanspage