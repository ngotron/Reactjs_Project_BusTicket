import React from 'react'

import DataTable from 'react-data-table-component';
import ListItem from './ListItem';

const columns = [
    {
        name: 'Nha xe',
        selector: row => row.nhaXe,
    },
    {
        name: 'Xuat phat',
        selector: row => row.xuatPhat,
    },
    {
        name: 'Den noi',
        selector: row => row.year,
    },
];


export default function Main({data}) {
  return (
   <>
   <h2>
       Du lieu tu ve xe re
   </h2>
         <DataTable
    columns={columns}
    data={data}
    />
    <br>
    </br>
    <h2>
       Du lieu tu flte.com
   </h2>
    <DataTable
    columns={columns}
    data={data}
    />
      <br>
    </br>
    <h2>
       Du lieu tu aloANh
   </h2>
    <DataTable
    columns={columns}
    data={data}
    />
   <ListItem></ListItem>
   </>

  )
}
