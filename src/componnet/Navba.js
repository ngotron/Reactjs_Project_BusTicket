
import React from 'react'
import {renderRouteCar } from '../Core/renderNavBar';

export default function Navba(props) { 
    var chua = []
    props.data.length  === 0 ?
    chua = "loading nè...." :
    props.data.forEach((e,i) => {
        chua[i]  = renderRouteCar(e.web);
    });
    return (
    <>
        <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            {/* Offers Sorting */}
            <div className="offers_sorting_container">

              <form  onSubmit={props.submit}>
              <div className="offers_sorting d-flex justify-content-around">
              <div className="distance_item">
                  <h2>Tuyến đường</h2>
                    <i className="fa fa-chevron-down" />
                    <select name='routeCar' value={props.select.routeCar} onChange={props.handler} className='distance_item'>
                      {chua}
                    </select>
                  </div>
                <div className="distance_item">
                <h2>Giá</h2>
                  <i className="fa fa-chevron-down" />
                  <label>Nhập tiền tối thiểu</label>
                  <input name='min' value={props.select.min} onChange={props.handler} />
                  <label>Nhập tiền tối đa </label>

                  <input name='max' value={props.select.max} onChange={props.handler}/>
                </div>
                      <div className="distance_item">
                <h2>Tìm kiếm</h2>
                <div >
                  <button className="button"  >tìm kiếm Nhà xe phù hợp</button>
                </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

