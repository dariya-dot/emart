import React from 'react'
import Navbar from '../comaponents/Navbar'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
const Watchespage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {watchData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                    <Link to={`/watches/${item.id}`}><img src={item.image} alt="" /></Link>
                    
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

export default Watchespage