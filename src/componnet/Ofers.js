import React from 'react'
import NhaXeComponent from './NhaXeComponent';
import ProductComponent from './ProductComponent';


export default function Ofers(props) {
 
  let row = "loading...."

  if(props.main.length !== 0){
    row = props.main.map((item)=><NhaXeComponent data={item} web={item.name}></NhaXeComponent>)
  }
  return (
    <>
           <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 temp_col" />
            
            <div className="col-lg-12">
              {/* Offers Grid */}
              <div className="offers_grid">
                {row}
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

