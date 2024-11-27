import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'

const Acpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {
            acData.map((item)=>{
                return(
                    <div>
                        <div className="pageimage">
                            <Link to={`/ac/${item.id}`}><img src={item.image} alt="" /></Link>
                        
                       
                    </div>
                    
                         <div className="model">
                            {item.company} <br/>
                            {item.model}
                         </div>
                    </div>
                    
                )
            })
        }
    </div>
    </>
  )
}

export default Acpage