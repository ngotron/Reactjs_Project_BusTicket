import React from 'react'

import DataTable from 'react-data-table-component';
import ListItem from './ListItem';

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
export default function Main() {
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
