import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'
export const Speakerspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {speakerData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  
                    <Link to={`/speakers/${item.id}`}><img src={item.image} alt="" /></Link>
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
export default Speakerspage
