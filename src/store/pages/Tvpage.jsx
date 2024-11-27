import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'

export const Tvpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {tvData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/tvs/${item.id}`}><img src={item.image} alt="" /> </Link>
                    
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
