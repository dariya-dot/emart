import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'
const Computerspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {computerData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/computers/${item.id}`} ><img src={item.image} alt="" /></Link>
                    
                </div>
                <div className="model">
                  {item.company}<br/>{item.model}
                </div>

            </div>
            )
           
        })}
    </div>
    </>
  )
}

export default Computerspage