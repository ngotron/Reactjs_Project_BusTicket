import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

import { useParams } from 'react-router-dom'
import getAPI from '../Core/API';

export default function WebVeXe() {
  const [data,setData]=useState([]);
  const {id} = useParams();

  const columnss = [
    {
        name: 'Nhà xe',
        selector: row => row.homeCar,
    },
    {
        name: 'Tuyến đường',
        selector: row => row.route,
    },
    {
      name: 'Giá vé',
      selector: row => row.price,
  },
];
  // if homeCar null will return "Nhà xe Hiếu Hiếu";
  const convert = (data) =>{
    return data.map(item=>{
      if(item.homeCar === undefined) return item.homeCar = "Nhà xe Hiếu Hiếu"
      else return item
    })
  }
const show = data.length !== 0 ?
     <DataTable
            columns={columnss}
            data={convert(data.web)}/>
  : "Loading...";

  useEffect(()=>{
    getAPI(""+id).then(res=>setData(res));
  },[id])
 
  return (
    <>
        <h2>Nhà xe abc{id}</h2>
        {show}
    </>
  )
}
