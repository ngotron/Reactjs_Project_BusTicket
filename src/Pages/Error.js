import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <>
        <h1>Can not found</h1>
        <div className="button book_button">
            <Link to="/">
                Về trang chủ
                <span />
                <span />
                <span />    
            </Link> 
        <br></br>
        </div>
    </>
  )
}
