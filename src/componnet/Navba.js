
import React from 'react'
import { renderHomeCar, renderRouteCar } from '../Core/renderNavBar';




export default function Navba(props) { 
  const routeCar = props.data  === undefined ?
  "loading nè...." :
  renderRouteCar(props.data.web);
  const homeCar = props.data  === undefined ?
  "loading nè...." :
  // renderRouteCar(props.data.web)
  renderHomeCar(props.data.web);
  


    return (
    <>
   
        <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            {/* Offers Sorting */}
            <div className="offers_sorting_container">
              <div className="offers_sorting d-flex justify-content-around">
              <div className="distance_item">
                <h2>Tuyến đường</h2>
                  <i className="fa fa-chevron-down" />
                  <select name='routeCar' value={props.select.routeCar} onChange={props.handler} className='distance_item'>
                    {routeCar}
                  </select>
                </div>
                <div className="distance_item">
                <h2>Nhà xe</h2>
                  <i className="fa fa-chevron-down" />
                  <select name='homeCar' value={props.select.homeCar} onChange={props.handler} className='distance_item'>
                  {homeCar}
                  </select>
                </div>
                <div className="distance_item">
                <h2>Giá</h2>
                  <i className="fa fa-chevron-down" />
                  <input name='min' value={props.select.min} onChange={props.handler} />
                  <input name='max' value={props.select.max} onChange={props.handler}/>
                </div>
              </div>
              <h2>{props.select.homeCar}</h2>
              <h2>{props.select.routeCar}</h2>
              <h2>{props.select.min}</h2>
              <h2>{props.select.max}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

