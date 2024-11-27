import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'
const Books = () => {
    const firstfivebooks=booksData.slice(0,5)
  return (
    <>
    <h2>Books</h2>
    <div className='productsection'>
        
        {
            firstfivebooks.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='books'> <img src={item.image} alt="" />
                        </Link>
                   
                    <p>{item.title}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Books