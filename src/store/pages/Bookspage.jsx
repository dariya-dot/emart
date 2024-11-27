import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'

export const Bookspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {booksData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                <Link to={`/books/${item.id}`}><img src={item.image} alt="" /></Link>
                    
                </div>
                <div className="model">
                  {item.title} <br/>
                  {item.author}
                </div>

            </div>
            )
           
        })}
    </div>
    </>
  )
}
