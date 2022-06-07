import React from 'react'
import { Link } from 'react-router-dom';
import ProductComponent from './ProductComponent'
export default function NhaXeComponent(props) {
  let products = "loading...."

  console.log(props.data.web.length);
  if(props.data.web.length !== 0){
    console.log(props.data);
     products = printProduct(props.data.web);
  }

  return (
    <>
        <h2>{props.web}</h2>
        {products}
        <div className="button book_button">
                          <Link to={`/${props.data.id}`}>Xem thêm những ưu đãi tương tự</Link>
                        </div>
                        <br></br>
    </>
  )
}

const printProduct = (arr)=>{
  console.log(arr);
  return arr.map((item,i)=>{
    if(i<2){
      return <ProductComponent car={item} name={item.nhaXe}></ProductComponent>
    }
    else{
      return ""
    }
  })
}
