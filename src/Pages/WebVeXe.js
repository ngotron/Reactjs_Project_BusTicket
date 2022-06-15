import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import PreLoading from '../componnet/PreLoading';
import getAPI from '../Core/API';

export default function WebVeXe() {
    const [data,setData]=useState({
        data:[],
        isLoad :false
    });
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
      sortable: true,
    },
];
  // if homeCar null will return "Nhà xe  Phương Trang";
    const convert = (data) =>{
        return data.map(item=>{
            if(item.homeCar === undefined) return item.homeCar = "Nhà xe Phương Trang"
            else return item
        })
    }

    useEffect(()=>{
        getAPI(""+id).then(res=>
            setData({...data,
                data:res,
                isLoad:true
        }));
        },[])
 
    return (
    <>
        {data.isLoad ?
        <>
            <h2>Dữ liệu: {data.data.name}</h2>
            <DataTable
            columns={columnss}
            data={convert(data.data.web)}
        />
        </>
        :
        <PreLoading/>
        }
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
