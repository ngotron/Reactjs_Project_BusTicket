import React from 'react'

export default function Seat({change,seat}) {
    // console.log(seat.user,sessionStorage.getItem("user"));
    const renderColor = (first,second) =>{
        if(first.status_s === 0 ||first.status_s === false ){
            return "seat"
        }
        else if(first.status_s  === 2){
            return "seat-bought"
        }
        else if(first.user === second ){
            return "seat-checked"
        }
        else{
            return "seat-buying"
        }
    }
    return (
        <div 
            onClick={change}
        className ={renderColor(seat,sessionStorage.getItem("user"))}>
            {seat.name}
        </div>
    )
}
// 0: sale
// 1 : checked
// 2 :sell