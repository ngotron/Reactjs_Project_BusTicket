import React from 'react'
import Item from './Item'

export default function ListItem() {
  return (
    <>
        <div className="trending">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="section_title">trending now</h2>
                    </div>
                </div>
            <div className="row trending_container">
                {/* print data here */}
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
            </div>
        </div>
    </>
  )
}

<>

</>