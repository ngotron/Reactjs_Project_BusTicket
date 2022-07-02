import React from "react";
import { renderRouteCar } from "../Core/renderNavBar";

export default function Navba(props) {
  var chua = [];
  props.data.length === 0
    ? (chua = "loading nè....")
    : props.data.forEach((e, i) => {
        chua[i] = renderRouteCar(e.web);
      });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            {/* Offers Sorting */}
            <div className="offers_sorting_container">
              <form onSubmit={props.submit}>
                <div className="offers_sorting d-flex justify-content-around">
                  <div className="distance_item">
                    <div className="form-group">
                      <label htmlFor="inputState">Tuyến duong</label>
                      <select
                        name="routeCar"
                        value={props.select.routeCar}
                        onChange={props.handler}
                        id="inputState"
                        className="form-control"
                      >
                        {chua}
                      </select>
                    </div>
                  </div>
                  <div className="distance_item">
                    <h2>Giá</h2>
                    <i className="fa fa-chevron-down" />
                    <div className="col">
                      <label>Nhập tiền tối thiểu</label>
                      <input
                        type="text"
                        name="min"
                        value={props.select.min}
                        onChange={props.handler}
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>

                    <div className="col">
                      <label>Nhập tiền tối đa </label>
                      <input
                        name="max"
                        value={props.select.max}
                        onChange={props.handler}
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="distance_item">
                    <h2>Tìm kiếm</h2>
                    <div>
                      <button className="button">
                        tìm kiếm Nhà xe phù hợp
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
