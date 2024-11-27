import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'

const Mobilespage = () => {
  const [selecteditem,setSelecteditem]=useState([])
  const companyselect=(companyname)=>selecteditem.includes(companyname)?
        setSelecteditem(selecteditem.filter(item=>item!==companyname))
        :setSelecteditem([...selecteditem,companyname])

  const filterdproduct= selecteditem.length===0?
  mobileData:mobileData.filter((item)=>selecteditem.includes(item.company))    
  return (
    <>
     <Navbar/>
     <div className='fullmobilepage'>
     <div className='checklistdiv'>
      {
        mobileData.map((item)=>{
          return(
            <div className='checkboxinput' >
              <label>
               <input type="checkbox"
               checked={selecteditem.includes(item.company)}
               onChange={()=>companyselect(item.company)} />
               {item.company}
            </label>
            
            </div>
            
            
          )
        })
      }
      
    </div>

    <div className='pagesection'>
        {filterdproduct.map((item)=>{
            return(
                <div>
                  
                  <div className="pageimage">
                    <Link to ={`/mobiles/${item.id}`}>
                    <img src={item.image} alt="" />
                    </Link>
                  </div>
                 
                
                <div className="model">
                  {item.company}<br/>{item.model}
                </div>

            </div>
            )
           
        })}
    </div>
    </div>
    </>
  )
}

export default Mobilespage