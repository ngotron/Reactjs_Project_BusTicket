import React, { Component } from 'react'

export default class Navba extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            {/* Offers Sorting */}
            <div className="offers_sorting_container">
              <ul className="offers_sorting">
              <li className="distance_item">
                  <span className="sorting_text">distance from center dsadd </span>
                  <i className="fa fa-chevron-down" />
                  <ul className=''>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                  </ul>
                </li>
                <li className="distance_item">
                  <span className="sorting_text">distance from center dsadd </span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                  </ul>
                </li>
                <li className="distance_item">
                  <span className="sorting_text">distance from center dsadd </span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
